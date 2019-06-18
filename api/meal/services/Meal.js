/* global Meal */
'use strict';

/**
 * Meal.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */

// Public dependencies.
const _ = require('lodash');

// Strapi utilities.
const utils = require('strapi-hook-bookshelf/lib/utils/');
const { convertRestQueryParams, buildQuery } = require('strapi-utils');


module.exports = {

  /**
   * Promise to fetch all meals.
   *
   * @return {Promise}
   */

  fetchAll: (params, populate) => {
    // Select field to populate.
    const withRelated = populate || Meal.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias);

    const filters = convertRestQueryParams(params);

    return Meal.query(buildQuery({ model: Meal, filters }))
      .fetchAll({ withRelated })
      .then(data => data.toJSON());
  },

  /**
   * Promise to fetch a/an meal.
   *
   * @return {Promise}
   */

  fetch: (params) => {
    // Select field to populate.
    const populate = Meal.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias);

    return Meal.forge(_.pick(params, 'id')).fetch({
      withRelated: populate
    });
  },

  /**
   * Promise to count a/an meal.
   *
   * @return {Promise}
   */

  count: (params) => {
    // Convert `params` object to filters compatible with Bookshelf.
    const filters = convertRestQueryParams(params);

    return Meal.query(buildQuery({ model: Meal, filters: _.pick(filters, 'where') })).count();
  },

  /**
   * Promise to add a/an meal.
   *
   * @return {Promise}
   */

  add: async (values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Meal.associations.map(ast => ast.alias));
    const data = _.omit(values, Meal.associations.map(ast => ast.alias));

    // Create entry with no-relational data.
    const entry = await Meal.forge(data).save();

    // Create relational data and return the entry.
    return Meal.updateRelations({ id: entry.id , values: relations });
  },

  /**
   * Promise to edit a/an meal.
   *
   * @return {Promise}
   */

  edit: async (params, values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Meal.associations.map(ast => ast.alias));
    const data = _.omit(values, Meal.associations.map(ast => ast.alias));

    // Create entry with no-relational data.
    const entry = await Meal.forge(params).save(data);

    // Create relational data and return the entry.
    return Meal.updateRelations(Object.assign(params, { values: relations }));
  },

  /**
   * Promise to remove a/an meal.
   *
   * @return {Promise}
   */

  remove: async (params) => {
    params.values = {};
    Meal.associations.map(association => {
      switch (association.nature) {
        case 'oneWay':
        case 'oneToOne':
        case 'manyToOne':
        case 'oneToManyMorph':
          params.values[association.alias] = null;
          break;
        case 'oneToMany':
        case 'manyToMany':
        case 'manyToManyMorph':
          params.values[association.alias] = [];
          break;
        default:
      }
    });

    await Meal.updateRelations(params);

    return Meal.forge(params).destroy();
  },

  /**
   * Promise to search a/an meal.
   *
   * @return {Promise}
   */

  search: async (params) => {
    // Convert `params` object to filters compatible with Bookshelf.
    const filters = strapi.utils.models.convertParams('meal', params);
    // Select field to populate.
    const populate = Meal.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias);

    const associations = Meal.associations.map(x => x.alias);
    const searchText = Object.keys(Meal._attributes)
      .filter(attribute => attribute !== Meal.primaryKey && !associations.includes(attribute))
      .filter(attribute => ['string', 'text'].includes(Meal._attributes[attribute].type));

    const searchInt = Object.keys(Meal._attributes)
      .filter(attribute => attribute !== Meal.primaryKey && !associations.includes(attribute))
      .filter(attribute => ['integer', 'decimal', 'float'].includes(Meal._attributes[attribute].type));

    const searchBool = Object.keys(Meal._attributes)
      .filter(attribute => attribute !== Meal.primaryKey && !associations.includes(attribute))
      .filter(attribute => ['boolean'].includes(Meal._attributes[attribute].type));

    const query = (params._q || '').replace(/[^a-zA-Z0-9.-\s]+/g, '');

    return Meal.query(qb => {
      if (!_.isNaN(_.toNumber(query))) {
        searchInt.forEach(attribute => {
          qb.orWhereRaw(`${attribute} = ${_.toNumber(query)}`);
        });
      }

      if (query === 'true' || query === 'false') {
        searchBool.forEach(attribute => {
          qb.orWhereRaw(`${attribute} = ${_.toNumber(query === 'true')}`);
        });
      }

      // Search in columns with text using index.
      switch (Meal.client) {
        case 'mysql':
          qb.orWhereRaw(`MATCH(${searchText.join(',')}) AGAINST(? IN BOOLEAN MODE)`, `*${query}*`);
          break;
        case 'pg': {
          const searchQuery = searchText.map(attribute =>
            _.toLower(attribute) === attribute
              ? `to_tsvector(${attribute})`
              : `to_tsvector('${attribute}')`
          );

          qb.orWhereRaw(`${searchQuery.join(' || ')} @@ to_tsquery(?)`, query);
          break;
        }
      }

      if (filters.sort) {
        qb.orderBy(filters.sort.key, filters.sort.order);
      }

      if (filters.skip) {
        qb.offset(_.toNumber(filters.skip));
      }

      if (filters.limit) {
        qb.limit(_.toNumber(filters.limit));
      }
    }).fetchAll({
      withRelated: populate
    });
  }
};

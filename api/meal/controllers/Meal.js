'use strict';

/**
 * Meal.js controller
 *
 * @description: A set of functions called "actions" for managing `Meal`.
 */

module.exports = {

  /**
   * Retrieve meal records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.meal.search(ctx.query);
    } else {
      return strapi.services.meal.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a meal record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.meal.fetch(ctx.params);
  },

  /**
   * Count meal records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.meal.count(ctx.query, populate);
  },

  /**
   * Create a/an meal record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.meal.add(ctx.request.body);
  },

  /**
   * Update a/an meal record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.meal.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an meal record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.meal.remove(ctx.params);
  }
};

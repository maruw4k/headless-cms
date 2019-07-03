'use strict';

/**
 * Lunch.js controller
 *
 * @description: A set of functions called "actions" for managing `Lunch`.
 */

module.exports = {

  /**
   * Retrieve lunch records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.lunch.search(ctx.query);
    } else {
      return strapi.services.lunch.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a lunch record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.lunch.fetch(ctx.params);
  },

  /**
   * Count lunch records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.lunch.count(ctx.query, populate);
  },

  /**
   * Create a/an lunch record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.lunch.add(ctx.request.body);
  },

  /**
   * Update a/an lunch record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.lunch.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an lunch record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.lunch.remove(ctx.params);
  }
};

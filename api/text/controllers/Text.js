'use strict';

/**
 * Text.js controller
 *
 * @description: A set of functions called "actions" for managing `Text`.
 */

module.exports = {

  /**
   * Retrieve text records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.text.search(ctx.query);
    } else {
      return strapi.services.text.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a text record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.text.fetch(ctx.params);
  },

  /**
   * Count text records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.text.count(ctx.query, populate);
  },

  /**
   * Create a/an text record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.text.add(ctx.request.body);
  },

  /**
   * Update a/an text record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.text.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an text record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.text.remove(ctx.params);
  }
};

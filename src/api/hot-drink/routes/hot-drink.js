'use strict';

/**
 * hot-drink router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::hot-drink.hot-drink');

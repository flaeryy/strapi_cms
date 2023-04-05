'use strict';

/**
 * hot-drink service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hot-drink.hot-drink');

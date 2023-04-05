'use strict';

/**
 * water service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::water.water');

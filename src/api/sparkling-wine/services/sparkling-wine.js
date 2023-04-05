'use strict';

/**
 * sparkling-wine service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sparkling-wine.sparkling-wine');

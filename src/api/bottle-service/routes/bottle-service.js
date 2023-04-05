'use strict';

/**
 * bottle-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::bottle-service.bottle-service');

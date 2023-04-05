'use strict';

/**
 * bottle-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bottle-service.bottle-service');

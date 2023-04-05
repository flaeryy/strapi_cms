'use strict';

/**
 * bottle-service controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::bottle-service.bottle-service');

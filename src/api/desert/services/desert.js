'use strict';

/**
 * desert service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::desert.desert');

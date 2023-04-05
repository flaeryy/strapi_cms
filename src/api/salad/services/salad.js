'use strict';

/**
 * salad service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::salad.salad');

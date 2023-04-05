'use strict';

/**
 * rice-bowl service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rice-bowl.rice-bowl');

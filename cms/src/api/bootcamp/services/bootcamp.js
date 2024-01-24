'use strict';

/**
 * bootcamp service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bootcamp.bootcamp');

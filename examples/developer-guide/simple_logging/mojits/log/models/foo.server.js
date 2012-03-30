/*
 * Copyright (c) 2011-2012, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

YUI.add('logModelFoo', function(Y) {

/**
 * The logModelFoo module.
 *
 * @module log
 */

    /**
     * Constructor for the logModelFoo class.
     *
     * @class logModelFoo
     * @constructor
     */
    Y.mojito.models.logModelFoo = {
 
        init: function(config) {
        Y.log('model: entering into init (..)' +config,"INFO");
            this.config = config;
        },

        /**
         * Method that will be invoked by the mojit controller to obtain data.
         *
         * @param callback {Function} The callback function to call when the
         *        data has been retrieved.
         */
        getData: function(callback) {
            callback({some:'data'});
        }

    };

}, '0.0.1', {requires: []});

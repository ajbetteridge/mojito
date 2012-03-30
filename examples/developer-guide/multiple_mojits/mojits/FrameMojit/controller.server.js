/*
 * Copyright (c) 2011-2012, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

YUI.add('FrameMojit', function(Y) {

  Y.mojito.controller = {
    init: function(config) {
      this.config = config; 
    },
    index: function(actionContext) {
        actionContext.composite.done({template: {title: "Parent Frame"}}); 
    }
  };
}, '0.0.1', {requires: []});

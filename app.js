/**
 *
 * this sets up a local instance of CONNECT platform so that you
 * can use it to test the nodes of your package. you most probably
 * do not need to modify this file at all.
 *
 */

const platform = require('connect-platform');


/**
 *
 * pretty straight forward configuration for the platform.
 *
 */
platform
  .configure({
    /**
     *
     * set the root directory to current directory.
     *
     */
    root: __dirname,

    /**
     *
     * run the test instance on port 4000.
     *
     */
    port: 4000,

    /**
     *
     * obviously we need to expose the panel to be able to
     * test our stuff with it.
     *
     */
    panel: {
      expose: true
    },

    /**
     *
     * load some basic platform packages, alongside 'panel-generated' which would
     * be all the nodes generated with the panel, and, naturally, the root package.
     *
     */
    nodes: {
      module: [
        'connect-platform/platform/bind/panel',
        'connect-platform/platform/bind/utils',
        'panel-generated',
        '.',
      ]
    }
  });

/**
 *
 * lets try to load the platform configuration set by the panel.
 *
 */
try {
  let panelconf = require('./panel-generated/platform-config');
  platform.configure(panelconf);
} catch(err) {}

/**
 *
 * this is probably useful only if you want to test your package
 * in secrecy on some always online panel somewhere.
 *
 */
if (process.env.CONNECT_PANEL_SECRET)
  platform.configure({
    panel: {
      secret: process.env.CONNECT_PANEL_SECRET
    }
  });

/**
 *
 * lets start the test instance.
 *
 */
platform.start()
  .then(server => {
    console.log(`running on http://${server.address().address}` +
                `:${server.address().port}`);
  });

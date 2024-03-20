<?php
/**
 * Plugin Name:       Test PluginDocumentSettingPanel
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 */

add_action( 'enqueue_block_editor_assets', function() {
	wp_enqueue_script(
		'test-plugin-document-setting-panel',
		plugins_url( 'src/index.js', __FILE__ ),
		[ 'wp-editor', 'wp-plugins', 'wp-data' ],
		filemtime( plugin_dir_path( __FILE__ ) . 'src/index.js' )
	);
} );

var el = React.createElement;
var __ = wp.i18n.__;
var registerPlugin = wp.plugins.registerPlugin;
var PluginDocumentSettingPanel = wp.editor.PluginDocumentSettingPanel;
const { useDispatch, useSelect } = wp.data;
const { SelectControl } = wp.components;

function MyDocumentSettingPlugin() {
	const { __experimentalSetPreviewDeviceType } = useDispatch( 'core/edit-post' );

	const previewDeviceType = useSelect( ( select ) => {
		return select( 'core/edit-post' ).__experimentalGetPreviewDeviceType();
	}, [] );

	return el(
		PluginDocumentSettingPanel,
		{
			className: 'my-document-setting-plugin',
			title: 'Test Devices',
			name: 'my-panel',
		},
		el( SelectControl, {
			label: __( 'Preview Device' ),
			value: previewDeviceType,
			options: [
				{ label: 'Desktop', value: 'Desktop' },
				{ label: 'Tablet', value: 'Tablet' },
				{ label: 'Mobile', value: 'Mobile' },
			],
			onChange: ( value ) => {
				__experimentalSetPreviewDeviceType( value );
			},
		 } )
	);
}

registerPlugin( 'my-document-setting-plugin', {
	render: MyDocumentSettingPlugin,
} );

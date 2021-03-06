/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import Edit from './components/edit';
import { BLOCK_NAME } from './constants';

/**
 * Registers the AR Viewer block.
 */
export default registerBlockType( BLOCK_NAME, {
	title: __( 'Easy Survey', 'easy-survey' ),
	description: __(
		'A simple survey, so you get quick feedback',
		'easy-survey'
	),
	category: 'common',
	icon: 'editor-table',
	keywords: [ __( 'Survey', 'easy-survey' ) ],
	attributes: {
		backgroundColor: {
			type: 'string',
		},
		className: {
			type: 'boolean',
		},
		option1: {
			type: 'string',
		},
		option2: {
			type: 'string',
		},
		textColor: {
			type: 'string',
		},
		question: {
			type: 'string',
		},
	},

	/**
	 * The block editor UI.
	 */
	edit: Edit,

	/**
	 * Renders in PHP.
	 *
	 * @see Block::render_block().
	 * @return {null} Rendered in PHP.
	 */
	save() {
		return null;
	},
} );

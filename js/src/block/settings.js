/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import Edit from './components/edit';

export const BLOCK_NAME = 'easy-survey/survey';
export const BLOCK_CLASS = 'easy-survey-block';
export const SETTINGS = {
	title: __( 'Easy Survey', 'easy-survey' ),
	description: __( 'A simple survey, so you get quick feedback', 'easy-survey' ),
	category: 'common',
	icon: 'table',
	keywords: [
		__( 'Survey', 'easy-survey' ),
	],
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
};

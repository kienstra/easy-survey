/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { BLOCK_NAME, SETTINGS } from './settings';

registerBlockType( BLOCK_NAME, SETTINGS );

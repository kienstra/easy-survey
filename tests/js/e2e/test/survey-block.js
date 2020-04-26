/**
 * External dependencies
 */
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, getByText, render } from '@testing-library/react';

/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import BlockEditor from '../helpers/block-editor';
import { BLOCK_NAME, SETTINGS } from '../../../../js/src/block/settings';

/**
 * Whether the node has the text in its textContent.
 *
 * @param {Object} nodeToSearch The element in which to search for the text.
 * @param {string} text The text to search the node for.
 */
const hasText = ( nodeToSearch, text ) => -1 !== nodeToSearch.textContent.indexOf( text );

describe( 'SurveyBlock', () => {
	it( 'displays the block in the inserter and the block has the expected values when added', () => {
		const { getByLabelText } = render(
			<BlockEditor blockRegistration={ () => registerBlockType( BLOCK_NAME, SETTINGS ) } />
		);
		const blockInserter = document.querySelector( '.block-editor-inserter__toggle' );

		// Click the inserter blockInserter to see the available blocks.
		fireEvent.click( blockInserter );
		const searchInput = getByLabelText( 'Search for a block' );

		// Enter the name of the tested block.
		fireEvent.change( searchInput, { target: { value: SETTINGS.title } } );
		const blockResults = document.querySelector( '.block-editor-inserter__results' );

		// The tested block should appear in the available blocks.
		expect( hasText( blockResults, SETTINGS.title ) ).toStrictEqual( true );
		const blockButton = getByText( blockResults, SETTINGS.title );

		// Click the tested block, to add it to the editor.
		fireEvent.click( blockButton );

		// The block should have the expected labels.
		const firstOption = getByLabelText( 'First option' );
		const secondOption = getByLabelText( 'Second option' );

		expect( firstOption ).toBeInTheDocument();
		expect( secondOption ).toBeInTheDocument();

		fireEvent.click( document.querySelector( '.block-editor-default-block-appender__content' ) );

		// Click the Background Color picker.
		const firstColorPickerOption = document.querySelector( '.components-circular-option-picker__option' );
		fireEvent.click( firstColorPickerOption );

		// The block should have the background color that was selected.
		const expectedBackgroundColor = firstColorPickerOption.style.color;
		expect( firstOption.style.backgroundColor ).toStrictEqual( expectedBackgroundColor );
		expect( secondOption.style.backgroundColor ).toStrictEqual( expectedBackgroundColor );
		debug();
	} );
} );

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
	it( 'displays the block in the inserter and the color picker changes the colors of the block', () => {
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

		const firstOption = getByLabelText( 'First option' );
		const secondOption = getByLabelText( 'Second option' );

		// The block should have the expected labels.
		expect( firstOption ).toBeInTheDocument();
		expect( secondOption ).toBeInTheDocument();

		// Click the text color picker.
		const textColorPicker = document.querySelector( '.components-circular-option-picker' );
		const firstColorPickerOption = textColorPicker.querySelector( 'button' );
		fireEvent.click( firstColorPickerOption );

		// The block should have the text color that was selected.
		const expectedTextColor = firstColorPickerOption.style.color;
		expect( firstOption.style.color ).toStrictEqual( expectedTextColor );
		expect( secondOption.style.color ).toStrictEqual( expectedTextColor );

		// Click the background color picker.
		const backgroundColorPicker = document.querySelectorAll( '.components-circular-option-picker' )[ 1 ];
		const firstBackgroundColorPickerOption = backgroundColorPicker.querySelector( 'button' );
		fireEvent.click( firstBackgroundColorPickerOption );

		// The block should have the background color that was selected.
		const expectedBackgroundColor = firstBackgroundColorPickerOption.style.color;
		expect( firstOption.style.backgroundColor ).toStrictEqual( expectedBackgroundColor );
		expect( secondOption.style.backgroundColor ).toStrictEqual( expectedBackgroundColor );
	} );
} );

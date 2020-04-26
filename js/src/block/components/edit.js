/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { ColorPalette, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { BLOCK_CLASS } from '../settings';

/**
 * The Edit component for the block.
 */
const Edit = ( { attributes: { backgroundColor, className, option1, option2, question }, instanceId, setAttributes } ) => {
	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Survey Settings', 'easy-survey' ) }>
					<label htmlFor={ `mv-background-color-${ instanceId }` } >
						{ __( 'Background Color', 'easy-survey' ) }
					</label>
					<ColorPalette
						id={ `mv-background-color-${ instanceId }` }
						label={ __( 'Background Color', 'easy-survey' ) }
						onChange={ ( newColor ) => setAttributes( { backgroundColor: newColor } ) }
						value={ backgroundColor }
					/>
				</PanelBody>
			</InspectorControls>
			<div className={ classnames( BLOCK_CLASS, className ) }>
				<RichText
					placeholder={ __( 'Survey question', 'easy-survey' ) }
					value={ question }
					onChange={ ( newValue ) => setAttributes( { question: newValue } ) }
				/>
				<RichText
					placeholder={ __( 'First option', 'easy-survey' ) }
					value={ option1 }
					onChange={ ( newValue ) => setAttributes( { option1: newValue } ) }
					className="wp-block-button__link"
					style={ { backgroundColor } }
				/>
				<RichText
					placeholder={ __( 'Second option', 'easy-survey' ) }
					value={ option2 }
					onChange={ ( newValue ) => setAttributes( { option2: newValue } ) }
					className="wp-block-button__link"
					style={ { backgroundColor } }
				/>
			</div>
		</>
	);
};

export default Edit;

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { ContrastChecker, PanelColorSettings, InspectorControls, RichText } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { BLOCK_CLASS } from '../settings';

/**
 * The Edit component for the block.
 */
const Edit = ( { attributes: { backgroundColor, className, option1, option2, textColor, question }, setAttributes } ) => {
	const style = { backgroundColor, color: textColor };

	return (
		<>
			<InspectorControls>
				<PanelColorSettings
					title={ __( 'Color settings', 'easy-survey' ) }
					colorSettings={ [
						{
							value: textColor,
							onChange: ( newValue ) => setAttributes( { textColor: newValue } ),
							label: __( 'Text color', 'easy-survey' ),
						},
						{
							value: backgroundColor,
							onChange: ( newValue ) => setAttributes( { backgroundColor: newValue } ),
							label: __( 'Background color', 'easy-survey' ),
						},
					] }
				>
					<ContrastChecker
						{ ...{
							textColor,
							backgroundColor,
						} }
						isLargeText={ false }
					/>
				</PanelColorSettings>
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
					style={ style }
				/>
				<RichText
					placeholder={ __( 'Second option', 'easy-survey' ) }
					value={ option2 }
					onChange={ ( newValue ) => setAttributes( { option2: newValue } ) }
					className="wp-block-button__link"
					style={ style }
				/>
			</div>
		</>
	);
};

export default Edit;

import React, { Component, PropTypes } from 'react'
import Form from 'react-formal'

export default class FormItemSelect extends Component {
	render(){
		const {label, name} = this.props
		return (
			<div className='form-group'>
				<label>{label}</label>
				<Form.Field className='form-control' name={name} type='select'>
				<option value='Travel'>Travel</option>
				<option value='Shopping'>Shopping</option>
				<option value='Meal'>Meal</option>
				<option value='Tickets'>Ticktes</option>
				</Form.Field>
			</div>				
		)
	}
}

FormItemSelect.propTypes = {
	name: PropTypes.string,
	label: PropTypes.string
}
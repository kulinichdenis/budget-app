import React, { Component, PropTypes } from 'react'
import Form from 'react-formal'

export default class FormItem extends Component {
	render() {
		const {name, placeholder, label, disabled} = this.props
		return (
			<div className='form-group'>
				<label>{label}</label>
				<Form.Field className='form-control' errorClass='has-error' disabled={disabled} name={name} placeholder={placeholder}/>
				<Form.Message for={name}/>
			</div>	
		)
	}
}

FormItem.propTypes = {
	name: PropTypes.string,
	placeholder: PropTypes.string,
	label: PropTypes.string,
	disabled: PropTypes.bool
}
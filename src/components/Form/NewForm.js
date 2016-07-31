import React, { Component, PropTypes } from 'react'
import Form from 'react-formal'
import modelSchema from '../../helpers/form_validation'
import FormItem from './FormItem'
import FormItemSelect from './FormItemSelect'

export default class NewForm extends Component {
	render() {
		const { state, actions } = this.props
		return (
			<div>
				<Form schema={ modelSchema } value={ state.current } onChange = {(e) => { actions.editForm(e)} } onSubmit = {(e) => actions.saveBudgetItem(e)} >
						<FormItem label='Name' name='name' placeholder='Name' />
						<FormItem label='Cost' name='cost' placeholder='Cost' />
						<FormItem label='Percent' name='percent' placeholder='Percent' disabled={true} />
						<FormItemSelect label='Group' name='group'/>
						<Form.Button className='btn btn-primary' type='submit'>
							Save
						</Form.Button>
					</Form>
			</div>
		)
	}
}

NewForm.propTypes = {
	state: PropTypes.object,
	actions: PropTypes.object
}
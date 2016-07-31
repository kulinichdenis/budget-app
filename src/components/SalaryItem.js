import React, { Component, PropTypes } from 'react'
import Form from 'react-formal'
import FormItem from './Form/FormItem'
import modelInput from '../helpers/salary_validation'
import salaryConvert from '../helpers/convert'

export default class SalaryItem extends Component {
	render(){
		const { salary, updateSalary } = this.props 
		return (
			<Form schema={modelInput} value={{salary:salary}} onChange={(e) => updateSalary(salaryConvert(e.salary)) }>
				<FormItem label='SALARY' name='salary' placeholder='Salary' />
			</Form>	
		)
	}
}
	
SalaryItem.propTypes = {
	salary: PropTypes.number,
	updateSalary: PropTypes.func
}	
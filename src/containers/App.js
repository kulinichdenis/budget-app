import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Main from '../components/Main'
import * as actions from '../actions/actions'
import SalaryItem from '../components/SalaryItem'
import BudgetTable from '../components/Table/BudgetTable'

class App extends Component {
  constructor() {
		super()
		this.state = {sort: {id: 'desc', name: 'desc', cost: 'desc', percent: 'desc', group: 'desc' }}
		this.editBudgetItem = this.editBudgetItem.bind(this)
		this.sortTable = this.sortTable.bind(this)
  }

  editBudgetItem(id) {
		this.props.actions.sendBudgetItemId(id)
		this.props.actions.showModal()
  }

  sortTable(column) {		
		if(this.state.sort[column] === 'desc') {
			const obj = this.state.sort
			obj[column] = 'asc'
			this.setState({ sort: obj })
			this.props.actions.sortTableAsc(column)
		} else {
			const obj = this.state.sort
			obj[column] = 'desc'
			this.setState({ sort: obj })
			this.props.actions.sortTableDesc(column)
		}
  }

  render() {
		const { actions, salary, budget, modal } = this.props
    return <div className='container'>
      <br/>
      <SalaryItem salary={ salary } updateSalary = {actions.updateSalary} />
      <h1>Budget</h1>
			<BudgetTable budget={ budget } actions={ {sortTable:this.sortTable, editBudgetItem: this.editBudgetItem} } deleteBudgetItem={ actions.deleteBudgetItem } /> 				
			<Main show={ modal.showModal } actions={ actions } 
				item = { budget.filter( item => item.edit === true) } salary = {salary}/>
      <button className='btn btn-primary' onClick={actions.showModal}>Add</button>
    </div>
  } 
}

function mapStateToProps(state){
	return {
		budget: state.budget.budgetList,
		salary: state.budget.salary,
		modal: state.modal
	}
}

function mapDispatchToProps(dispatch){
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
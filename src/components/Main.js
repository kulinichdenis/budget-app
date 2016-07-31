import React, { Component, PropTypes } from 'react'
import { Modal } from 'react-bootstrap'
import EditForm from './Form/EditForm'
import NewForm from './Form/NewForm'

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.saveBudgetItem = this.saveBudgetItem.bind(this)
		this.editBudgetItem = this.editBudgetItem.bind(this)
		this.setDefaultState = this.setDefaultState.bind(this)
		this.closeModal = this.closeModal.bind(this)
		this.editForm = this.editForm.bind(this)
		this.state = { current: {cost: 0, percent: 0, group: 'Travel', name: ''},
			prev : ''
		}
	}

	saveBudgetItem(e) {
		this.props.actions.addBudgetItem({name: e.name,
			cost: e.cost, group: e.group})
		this.setDefaultState()	
		this.props.actions.closeModal()
	}

	editBudgetItem(e) {
		this.props.actions.editBudgetItem({...this.props.item[0], name: e.name,
			cost: e.cost, group: e.group})
		this.setDefaultState()
		this.props.actions.closeModal()
	}

	editForm(e) {
		if(this.props.item.length > 0 && this.state.prev === '') {
			this.setState({prev: this.props.item[0]})
		}
		this.setState({current:{name: e.name, cost: e.cost, percent: this.props.salary/100 * e.cost, group: e.group}})
	}

	closeModal() {
		if(this.props.item.length > 0) {
			this.props.actions.backEditBudgetItem(this.props.item[0].id)
		}
		this.setDefaultState()
		this.props.actions.closeModal()
	}

	setDefaultState() {
		this.setState({ current: {cost: 0, percent: 0, group: 'Travel', name: ''},
			prev : ''
		})
	}

	render() {	
		const {show, item} = this.props
		return (
			<Modal show={show} onHide={this.closeModal}>
				<Modal.Header closeButton>
					<Modal.Title>{this.props.item.length > 0 ? 'Edit' : 'New' } item</Modal.Title>
					</Modal.Header>
				<Modal.Body>
					{
						item.length > 0
						? <EditForm state={this.state} item={this.props.item[0]} actions={{editForm: this.editForm, editBudgetItem: this.editBudgetItem}}/>						
						: <NewForm state={this.state} actions={{editForm: this.editForm, saveBudgetItem: this.saveBudgetItem}}/>						
					}
				</Modal.Body>
				<Modal.Footer>
				</Modal.Footer>
			</Modal>
		)
	}
}

Main.propTypes = {
	show: PropTypes.bool,
	item: PropTypes.array,
	actions: PropTypes.objectOf(PropTypes.func)
}


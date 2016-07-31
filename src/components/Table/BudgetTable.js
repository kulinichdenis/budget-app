import React, { Component, PropTypes } from 'react'
export default class BudgetTable extends Component {
	render() {
		const {budget, actions, deleteBudgetItem} = this.props
		return (
			<table className='table table-bordered'>
				<thead>
					<tr>
						<th onClick={()=> { actions.sortTable('id')}}>ID</th>
						<th onClick={()=> { actions.sortTable('name')}}>Name</th>
						<th onClick={()=> { actions.sortTable('cost')}}>Cost</th>
						<th onClick={()=> { actions.sortTable('percent')}}>% From Salary</th>
						<th onClick={()=> { actions.sortTable('group')}}>Group</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
						{ budget.map((item) => {
							return ( 
								<tr key={item.id}>
									<td>{item.id}</td>
									<td>{item.name}</td>
									<td>{item.cost}</td>
									<td>{item.percent}</td>
									<td>{item.group}</td>
									<td><button className='btn btn-primary' onClick={() => { actions.editBudgetItem(item.id) }}>Edit</button></td>
									<td><button className='btn btn-primary' onClick={() => { deleteBudgetItem(item.id) }}>Delete</button></td>
								</tr>
							)
						}) }
					</tbody>
			</table>	
		)
	}
} 

BudgetTable.propTypes = {
	budget: PropTypes.array,
	actions: PropTypes.object,
	deleteBudgetItem: PropTypes.func
}
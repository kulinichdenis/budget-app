import * as types from '../constants/ActionTypes'

let id = 1;
export const addBudgetItem = (item) => {
	return {
		type: types.ADD_BUDGET_ITEM,
		item: { ...item, id: id++ }
	}
}

export const deleteBudgetItem = (id) => {
	return {
		type: types.DELETE_BUDGET_ITEM,
		id
	}
}

export const sendBudgetItemId = (id) => {
	return {
		type: types.SET_EDIT_ITEM,
		id: +id
	}
}

export const backEditBudgetItem = (id) => {
	return {
		type: types.BACK_EDIT_ITEM,
		id
	}
}

export const editBudgetItem = (item) => {
	return {
		type: types.EDIT_BUDGET_ITEM,
		item: item
	}
}

export const updateSalary = (salary) => {
	return {
		type: types.UPDATE_SALARY,
		salary
	}
}
export const closeModal = () => {
	return {
		type: types.HIDE_MODAL,
		show: false 
	}
}

export const showModal = () => {
	return {
		type: types.SHOW_MODAL,
		show: true
	}
} 

export const sortTableAsc = (sort) => {
	return {
		type: types.SORT_TABLE_ASC,
		sort
	}
}

export const sortTableDesc = (sort) => {
	return {
		type: types.SORT_TABLE_DESC,
		sort
	}
}
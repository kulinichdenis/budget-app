const initialState = {
  budgetList: [],
  salary: 0  
} 				

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BUDGET_ITEM':
      return {...state, budgetList: [...state.budgetList, {...action.item, percent: state.salary/100 * action.item.cost}]}
      
    case 'DELETE_BUDGET_ITEM':
			return  {...state, budgetList: state.budgetList.filter((item) => item.id != action.id)}    
    
    case 'EDIT_BUDGET_ITEM':
      return {...state, budgetList: state.budgetList.map((item) => {
        if(item.id === action.item.id) {
          return {...action.item, percent: state.salary * action.item.cost/100, edit: false }
        } 
          return item
        })
      }

    case 'SET_EDIT_ITEM':
      return {...state, budgetList: state.budgetList.map((item) => {
        if(item.id === action.id) {
            item.edit = true	
        }
        return item
        })
      }

    case 'BACK_EDIT_ITEM':
      return {...state, budgetList: state.budgetList.map((item) => {
        if(item.id === action.id) {
          return {...item, edit: false} 	
        }
        return item
        })
      }

    case 'UPDATE_SALARY':
      return { budgetList: state.budgetList.map((item) => { return {...item, percent: action.salary/100 * item.cost} }), salary: action.salary }  
    
    case 'SORT_TABLE_ASC':
      return {...state, budgetList: [...state.budgetList.sort((a,b) => {
        if(a[action.sort] > b[action.sort]) {
          return 1
        }
        if(a[action.sort] < b[action.sort]) {
          return -1
        }
        return 0
      })]}

    case 'SORT_TABLE_DESC':
      return {...state, budgetList: [...state.budgetList.sort((a,b) => {
        if(a[action.sort] < b[action.sort]) {
          return 1
        }
        if(a[action.sort] > b[action.sort]) {
          return -1
        }
        return 0
      })]}  

    default:
      return state;
  }
}
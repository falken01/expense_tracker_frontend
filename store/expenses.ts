export const state = () => ({
  expenses:[]
})

export const mutations = {
  INIT_EXPENSES(state:any, expenses:string[]){
    state.expenses = expenses;
  },
  ADD_EXPENSE(state:any,expense:object){
    state.expenses.push(expense)
  }
}

export const actions = {
  // @ts-ignore commit
  add_new_expense({ commit },expense:object){
    commit("ADD_EXPENSE",expense)
    return expense
  }
}
export const getters = {
  get_all_expenses(state:any){
    return state.expenses
  }
}

export const state = () => ({
  user:{
    name:"hwdp",
    currency:"EUR",
    cash_to_spend:0
  }
})

export const mutations = {

}

export const actions = {

}
export const getters = {
  get_user_info(state:any){
    return state.user
  }
}

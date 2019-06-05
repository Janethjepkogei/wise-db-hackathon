const state = {
    loggedIn: false
}

const mutations = {
    setLoggedIn(state, value) {
        state.loggedIn = value;
    }
}

const actions = {

}

export const account = {
    namespaced: true,
    state,
    mutations,
    actions
  };
  
import router from '@/router'

const state = {
    topBarTitle: 'Home'
}

const mutations = {
    setTopBarTitle(state, title) {
        state.topBarTitle = title;
    }
}

const actions = {
    navigate({commit}, data) {
        router.push(data.url);
    }
}

export const navigation = {
    namespaced: true,
    state,
    mutations,
    actions
};
  
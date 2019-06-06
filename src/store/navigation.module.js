import router from '@/router'

const state = {
    persona: sessionStorage.getItem('persona') || '',
    topBarTitle: 'Home'
}

const mutations = {
    setTopBarTitle(state, title) {
        state.topBarTitle = title;
    },
    setPersona(state, name) {
        sessionStorage.setItem('persona', name)
    }
}

const actions = {
    navigate({}, data) {
        router.push(data.url);
    }
}

export const navigation = {
    namespaced: true,
    state,
    mutations,
    actions
};
  
import { createStore } from 'vuex'

export default createStore({
    state: {
        count: 0,
    },
    getters: {

    },

    mutations: {
        add(state) {
            state.count++;
        }
    },
    actions: {
        add(ctx) {
            ctx.commit('add')
        }
    },
    modules: {
    }
})

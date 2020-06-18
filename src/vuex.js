import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        counter: 0
    },
    mutations: {
        decrement: state => state.counter--,
        increment: (state, num) => state.counter = num * 2

    },
    getters: {
        counter: status => status.counter   
    
    },
    actions: {
        decrement: ({ commit }) => commit('decrement'),
        
        increment: ({ commit }) => {
            setTimeout(() => {
                commit('increment',5)
            }, 2000)
        }

    }
})

export { store }
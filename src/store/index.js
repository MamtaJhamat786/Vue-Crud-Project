
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// actions ->mutations -> state

export default new Vuex.Store({
  state: {
    newTutorial: {},
    updatedData:{},
  },
  // able to access this state
  mutations: {
    setNewTutorial(state, payload){
          state.newTutorial = payload
    },
    updatedData(state, payload){
      state.updatedData =payload
    }
    
  },
  actions: {
    // newtutorial is the actions name that is similar in add.vue 
    // now we commit to mutations with context
    newTutorial(context, payload){
        context.commit('setNewTutorial', payload)
    },
    editData(context,payload){
      context.commit('updatedData', payload)
    }
  },
  //  you can access these getters from whereever you want in your application
  // here new tutorial is the name of the getter that we will use in tutorials to display
  getters: {
    newTutorial(state) {
      return state.newTutorial
    },
    updatedData(state){
      return state.updatedData
    }
    
  },
  modules: {
  }
})

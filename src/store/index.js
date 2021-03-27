
import Vue from 'vue'
import Vuex from 'vuex'
import PostService from '../PostService'

Vue.use(Vuex)

// actions ->mutations -> state

export default new Vuex.Store({
  state: {
    tutorials: [],
    updatedData:{},
    search: ''
  },
  // able to access this state
  mutations: {
    setNewTutorial(state, payload){
          state.tutorials.push(payload)
    },
    updatedData(state, payload){
      state.updatedData = payload
    },
    initData(state, payload) {
      state.tutorials = payload
    },
    deleteAll(state) {
      state.tutorials = {}
    },
    updatedPost(state, payload){
      let array = state.tutorials
      array.forEach(element => {
        if (element._id === payload.id) {
          let index = array.indexOf(element)
          array[index] = payload
        }
      });
      state.tutorials = array
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
    },
   async initData(context) {
      try {
        let tutorials = await PostService.getPosts();
        context.commit('initData', tutorials)
      } catch (err) {
        console.log(err)
      }
    },
    deleteAll(context) {
      context.commit('deleteAll')
    },
    updatedPost(context, payload){
      context.commit('updatedPost', payload)
    },
    search(context, payload){
      context.commit('search', payload)

    }
  },
  //  you can access these getters from whereever you want in your application
  // here new tutorial is the name of the getter that we will use in tutorials to display
  getters: {
    tutorials(state) {
      return state.tutorials
    },
    updatedData(state){
      return state.updatedData
    }
    
  },
  modules: {
  }
})

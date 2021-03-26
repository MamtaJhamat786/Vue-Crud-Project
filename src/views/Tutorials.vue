<template>
  <div>
   
    <b-container>
      <b-row class="mb-4 mt-4" >
        <b-col cols="7">
          <b-form class="d-flex flex-row" @submit.prevent="searchSomething">
            <b-form-input size="sm" placeholder="Search" :v-model="search"></b-form-input>
            <!-- <b-button size="sm" class="my-2 my-sm-0" type="submit" >Search</b-button -->
            
          </b-form>
        </b-col>
        <b-col>
           
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <h2>Information of Tutor</h2>
          <b-list-group>
            <b-list-group-item
              v-for="(tutorial, index) in tutorials"
              :key="index"
              @click="passValue(tutorial)"
              >{{ tutorial.firstName }}</b-list-group-item
            >
          </b-list-group>
        </b-col>
        <b-col>


          <Tutorial v-if="Object.keys(tut).length > 0"
            :first-name="tut.firstName"
            :last-name="tut.lastName"
            :email="tut.email"
            :telephone="tut.telephone"
            :hiredata="tut.hiredata"
            :id="tut._id"
          />

          <p v-else>Please click on a tutorial... </p>
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col>
          <b-button variant="danger" @click="deleteAll">Remove All</b-button>
        </b-col>
        <b-col>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import PostService from "../PostService";
import Tutorial from "../components/Tutorial.vue";

import { mapGetters } from "vuex";

export default {
  name: "Tutorials",

  components: {
    Tutorial
  },
  data() {
    return {
      error: "",
      tut: {}, 
      search: ''
    };
  },
  //  here we are using getters from index.js
  // new tutorial is the name of the getter
  computed: {
    tutorials(){
      return this.$store.getters.tutorials
      var tutorials = [];
      for (var i in this.tutorials){
         var tutorial = this.tutorials[i];
                    if(game.fi.toUpperCase().indexOf(this.keyword.toUpperCase()) !== -1 ||
                        game.text.indexOf(this.keyword) !== -1) {
                        games.push(game);
                    }
      }

    }
  },
  methods: {
    passValue(value) {
      this.tut = value;
      
    },
    deleteAll(){
      PostService.deleteAll();
      this.$store.dispatch('deleteAll')
    },
    searchSomething(){
      this.$store.dispatch('search', this.search);


    },

  },
};
</script>

<style>
.btn-color {
  background-color: red;
}
</style>
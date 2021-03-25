<template>
  <div>
   
    <b-container>
      <b-row class="mb-4 mt-4" >
        <b-col cols="7">
          <b-form class="d-flex flex-row">
            <b-form-input size="sm" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit" >Search</b-button
            >
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
            :telephone="tut.telePhone"
            :hiredata="tut.hireData"
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
      tutorials: [],
      error: "",
      tut: {},  
    };
  },
  //  here we are using getters from index.js
  // new tutorial is the name of the getter
  computed: {
    ...mapGetters({
      newTutorial: "newTutorial"
    })
  },
  methods: {
    passValue(value) {
      this.tut = value;
      
    },
    deleteAll(){
      PostService.deleteAll();
      this.PostService =  PostService.getPosts();
    },
  //   searchForValue(){
  //     if(this.searchQuery){
  //       var names =[]
  //       for(var i in this.names) {
  //         var name = this.names[i]
  //         if (this.name.Tutorial.firstName.toUpperCase().indexOf(this.searchQuery.toUpperCase()) !== -1{

  //         }

  //       }
  //     }

  //   }
  // },
  },
  async created() {
    try {
      this.tutorials = await PostService.getPosts();
    } catch (err) {
      this.error = err.message;
    }
  }
};
</script>

<style>
.btn-color {
  background-color: red;
}
</style>
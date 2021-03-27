<template>
  <div>
    <b-container>
      <b-row class="mb-4 mt-4">
        <b-col cols="7">
          <b-form class="d-flex flex-row">
            <b-form-input
              size="sm"
              placeholder="Search"
              v-model="search"
            ></b-form-input>
            <!-- <b-button size="sm" class="my-2 my-sm-0" type="submit" >Search</b-button -->
          </b-form>
        </b-col>
        <b-col> </b-col>
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
          <Tutorial
            v-if="Object.keys(tut).length > 0"
            :first-name="tut.firstName"
            :last-name="tut.lastName"
            :email="tut.email"
            :telephone="tut.telephone"
            :hiredate="tut.hiredate"
            :id="tut._id"
            :published="tut.published"
          />

          <p v-else>Please click on a tutorial...</p>
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col>
          <b-button variant="danger" @click="deleteAll">Remove All</b-button>
        </b-col>
        <b-col> </b-col>
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
      tut: [],
      search: ""
    };
  },
  //  here we are using getters from index.js
  // new tutorial is the name of the getter
  computed: {
    tutorials() {
     let tutorials = [];
      let search = this.search
      let listOfTut = this.$store.getters.tutorials
                for(let i in listOfTut) {
                    let tut = listOfTut[i];
                    if(tut.firstName.toUpperCase().indexOf(search.toUpperCase()) !== -1) {
                        tutorials.push(tut);
                    }
                }
                return tutorials;
    }
  },
  methods: {
    passValue(value) {
      this.tut = value;
    },
    deleteAll() {
      PostService.deleteAll();
      this.$store.dispatch("deleteAll");
    },
  }
};
</script>

<style>
.btn-color {
  background-color: red;
}
</style>
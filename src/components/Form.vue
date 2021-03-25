<template>
  <div>
    <b-container>
      <b-form
        @submit.prevent="onSubmit()"
        class="mx-auto"
        style="max-width: 30rem"
      >
        <slot name="heading"> </slot>
        <b-input-group class="mt-5">
          <label class="mr-5">First Name</label>
          <b-form-input
            placeholder="John"
            type="text"
            v-model="form.firstName"
            required
          ></b-form-input>
        </b-input-group>
        <b-input-group class="mt-3">
          <label class="mr-5">Last Name</label>
          <b-form-input
            placeholder="Smith"
            type="text"
            v-model="form.lastName"
            required
          ></b-form-input>
        </b-input-group>
        <b-input-group class="mt-3">
          <label class="mr-4">Email Address</label>
          <b-form-input
            placeholder="johnsmith@gmail.com"
            type="email"
            v-model="form.email"
            required
          ></b-form-input>
        </b-input-group>

        <b-input-group class="mt-3">
          <label class="mr-3">Phone Number</label>
          <b-form-input
            placeholder="56785678"
            type="text"
            v-model="form.telephone"
            required
          ></b-form-input>
        </b-input-group>

        <b-input-group class="mt-3">
          <label class="mr-5">Hire Data</label>
          <b-form-input
            placeholder="5th feb "
            type="text"
            v-model="form.hiredata"
            required
          ></b-form-input>
        </b-input-group>
        <b-button v-if="isEdit" variant="primary" class="mr-4 mt-5"
          >Publish</b-button
        >
        <router-link v-if="isEdit" to="/tutorials">
          <b-button variant="danger" class="mr-4 mt-5"
            >Delete</b-button
          ></router-link>
          
        <b-button v-if="isEdit" variant="success" class="mt-5">Update</b-button>
        
        <b-button
          v-if="isAdd"
          variant="primary"
          class="mt-5"
          @click="onSubmit()"
          >Save</b-button
        >
      </b-form>
    </b-container>
  </div>
</template>


<script>
import PostService from "../PostService";
export default {
  name: "Add",
  components: {},
  props: {
    isAdd: Boolean,
    isEdit: Boolean,
    editData: Object
  },
  data() {
    return {
      form: this.editData ? { ...this.editData } : {
            firstName: "",
            lastName: "",
            email: "",
            telephone: "",
            hiredata: ""
          }
    };
  },
  methods: {
    onSubmit() {
      const newTutorial = {
        id: Math.floor(Math.random() * 10000),
        firstName: this.form.firstName,
        lastName: this.form.lastName,
        email: this.form.email,
        telephone: this.form.telephone,
        hiredata: this.form.hiredata
      };
      //   passing this payload- newTutorial in store dipatch {action name is newtutorial},  payload- newTutorial
      this.$store.dispatch("newTutorial", newTutorial);

      PostService.insertPost(
        this.form.firstName,
        this.form.lastName,
        this.form.email,
        this.form.telephone,
        this.form.hiredata
      );

      console.log(newTutorial);

      this.form.firstName = "";
      this.form.lastName = "";
      this.form.email = "";
      this.form.telephone = "";
      this.form.hiredata = "";
    }
  }
};
</script>


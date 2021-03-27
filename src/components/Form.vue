<template>
  <div>
    <b-container>
      <b-form
        @submit.prevent="onSubmit()"
        class="mx-auto"
        style="max-width: 30rem"
      >
        <slot name="heading"> </slot>
        <b-input-group class="mt-2">
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
          <label class="mr-5">Hire Date</label>
          
         <b-calendar v-model="form.hiredate" ></b-calendar>
        </b-input-group>
      
      <p class="text-left mt-3" v-if="isEdit"><strong>Status: </strong>{{ form.published ? 'Published' : 'Pending' }}</p>
    

       <div >
          <b-button v-if="isEdit" variant="primary" class="mr-4" @click="onUpdate(form.published ? false : true)"
          >{{ form.published ? 'UnPublish' : 'Publish' }}</b-button
        >
          <b-button variant="danger" v-if="isEdit" class="mr-4" @click="onDelete(form.id)" >Delete</b-button>
          
        <b-button v-if="isEdit" variant="success" @click="onUpdate(false), updated=true">Update</b-button>
       </div>
        <p v-if="updated" class="mt-5"> The information was updated successfully</p>
        
        <router-link to="/added"><b-button
          v-if="isAdd"
          variant="primary"
          class="mt-3"
          @click="onSubmit()"
          >Save</b-button
        ></router-link>
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
            hiredate: new Date(),
            published: true
          },

        updated : false

    };
  },
  methods: {
    onDelete(id){
        console.log()
        PostService.deletePost(id);

    },
    onUpdate(value){
        
      let form = this.form
      form.published = value
        PostService.updatePost(form);
        this.$store.dispatch("updatedPost", form)
        

    },
    onSubmit() {
      const newTutorial = {
        // id: Math.floor(Math.random() * 10000),
        firstName: this.form.firstName,
        lastName: this.form.lastName,
        email: this.form.email,
        telephone: this.form.telephone,
        hiredate: this.form.hiredate,
        published: this.form.published
      };
      //   passing this payload- newTutorial in store dipatch {action name is newtutorial},  payload- newTutorial
      this.$store.dispatch("newTutorial", newTutorial);

      PostService.insertPost(this.form.firstName,this.form.lastName,this.form.email, this.form.telephone, this.form.hiredate, this.form.published);

      console.log(newTutorial);

      this.form.firstName = "";
      this.form.lastName = "";
      this.form.email = "";
      this.form.telephone = "";
      this.form.hiredate = "";
    }
  }
};
</script>


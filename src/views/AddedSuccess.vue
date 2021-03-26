<template>
  <div>
      <h1>
          You added successfully
      </h1>
      <b-button @click="addAgain" variant="success" >
          Add Again
      </b-button>
  </div>
</template>

<script>
export default {
    Name: 'AddedSuccess',
    methods: {
        addAgain(){
            this.$router.push('/add');

        }
      
    }

}
</script>

<style>

</style>
<template>
  <add-form isAdd>
    <template v-slot:heading>
      <h1>Enter tutors information</h1>
    </template>
  
  </add-form>
</template>

<script>
import AddForm from '../components/Form.vue'
export default {
  components: {
    AddForm
  }
}
</script>

<style>

</style>
<template>
  <edit-form isEdit :edit-data="editData">
    <template v-slot:heading>
      <h1>Update tutor info</h1>
    </template>
  
  </edit-form>
</template>

<script>
import EditForm from '../components/Form.vue'
export default {
  components: {
    EditForm
  },
  computed: {
      editData() {
          return this.$store.getters.updatedData
      }
  },
}
</script>

<style>

</style>
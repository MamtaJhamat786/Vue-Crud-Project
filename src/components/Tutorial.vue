<template>
<div class="text-left">
    <h2>Tutor personal Information</h2>
    <p><strong>First Name: </strong> {{ firstName }}</p>
    <p><strong>Last Name: </strong> {{ lastName }}</p>
    <p><strong>Email: </strong> {{ email }}</p>
    <p><strong>Telephone Number: </strong> {{ telephone }}</p>
    <p><strong>HireData: </strong> {{ hiredata }}</p>
   
<b-button variant="warning" @click="editDatatss">Edit</b-button>
</div>
  
</template>

<script>
export default {
    props:{
        id:String,
        firstName: String,
        lastName:String,
        email: String,
        telephone: [String, Number],
        hiredata: String,      
    },
    methods: {
        editDatatss() {
            const editDatas = {
                id: this.id,
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                telephone: this.telephone,
                hiredata: this.hiredata
            };
             this.$store.dispatch('editData', editDatas)
             this.$router.push('/edit-tutorial')
        }
    }
}
</script>

<style>

</style>
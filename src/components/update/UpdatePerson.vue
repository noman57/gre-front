<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Edit Item</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="updatePerson">
          <div class="form-group">
            <label>Item Name:</label>
            <input type="text" class="form-control" v-model="person.name"/>
          </div>
          <div class="form-group">
            <input type="submit" class="btn btn-primary" value="update person"/>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>


import PersonService from "@/components/service/PersonService";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      person: {}
    }
  },

  created: function () {
    this.getPerson();
  },

  methods: {
    getPerson() {
      PersonService.findById(this.$route.params.id).then((response) => {
        this.person = response.data;
      });
    },

    updatePerson() {
      PersonService.updatePerson(this.$route.params.id, this.person).then((response) => {
        this.$router.push({name: 'ListPerson'});
      }).catch((e) => {
        Swal.fire('Update failed,'+e.response.data.errors);
      });
    }
  }
}
</script>
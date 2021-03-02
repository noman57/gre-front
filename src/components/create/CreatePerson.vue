<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Add Person</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="addPerson">
          <div class="form-group">
            <label>Name:</label>
            <input required type="text" class="form-control" v-model="person.name"/>
          </div>
          <div class="form-group">
            <input type="submit" class="btn btn-primary" value="Add Person"/>
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
  methods: {
    addPerson() {
      console.log(this.item);
      PersonService.createPerson( this.person).then((response) => {
        this.$router.push({name: 'ListPerson'});
      }).catch((e) => {
        Swal.fire('Creation failed, please see log for details');
        console.log(e);
      });
    }
  }
}
</script>
<template>
  <div  class="container bg-light">
    <h3>Persons</h3>
    <table class="table table-hover">
      <thead>
      <tr>
        <td>ID</td>
        <td>Name</td>
        <td>Edit</td>
        <td>Delete</td>
      </tr>
      </thead>

      <tbody>
      <tr v-for="person in persons" :key="person.id">
        <td>{{ person.id }}</td>
        <td>{{ person.name }}</td>
        <td>
          <router-link :to="{name: 'UpdatePerson', params: { id: person.id }}" class="btn btn-primary">Edit
          </router-link>
        </td>
        <td>
          <button class="btn btn-danger" v-on:click="deleteItem(person.id)">Delete</button>
        </td>
      </tr>
      </tbody>
    </table>
    <div>
      <router-link :to="{name: 'CreatePerson'}" class="btn btn-primary">add person</router-link>
    </div>
  </div>
</template>

<script>

import Swal from "sweetalert2";
import PersonService from "@/components/service/PersonService";

export default {
  data() {
    return {
      persons: []
    }
  },

  created: function () {
    this.fetchItems();
  },

  methods: {
    fetchItems() {
      PersonService.findAll(null).then((response) => {
        console.log(response.data.content);
        this.persons = response.data.content;
      });
    },
    deleteItem(id) {
      PersonService.delete(id).then((response) => {
        this.$router.go();
      }).catch((e) => {
        Swal.fire('Delete failed,'+e.response.data.errors);
      });
    }
  }
}
</script>
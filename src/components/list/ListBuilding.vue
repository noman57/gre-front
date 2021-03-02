<template>
  <div  class="container bg-light">
    <h3>Buildings</h3>
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
      <tr v-for="building in buildings" :key="building.id">
        <td>{{ building.id }}</td>
        <td>{{ building.name }}</td>
        <td>
          <router-link :to="{name: 'UpdateBuilding', params: { id: building.id }}" class="btn btn-primary">Edit
          </router-link>
        </td>
        <td>
          <button class="btn btn-danger" v-on:click="deleteItem(building.id)">Delete</button>
        </td>
      </tr>
      </tbody>
    </table>
    <div>
      <router-link :to="{name: 'CreateBuilding'}" class="btn btn-primary">add building</router-link>
    </div>
  </div>
</template>

<script>

import Swal from "sweetalert2";
import BuildingService from "@/components/service/BuildingService";

export default {
  data() {
    return {
      error: "",
      buildings: []
    }
  },

  created: function () {
    this.fetchItems();
  },

  methods: {
    fetchItems() {
      BuildingService.findAll(null).then((response) => {
        console.log(response.data.content);
        this.buildings = response.data.content;
      });
    },
    deleteItem(id) {
      BuildingService.delete(id).then((response) => {
        this.$router.go();
      }).catch((e) => {
        Swal.fire('Delete failed,'+e.response.data.errors);
      });
    }
  }
}
</script>
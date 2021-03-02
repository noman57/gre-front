<template>
  <div>
    <h1>Projects</h1>
    <table class="table table-hover">
      <thead>
      <tr>
        <td>ID</td>
        <td>Name</td>
        <td>Person name</td>
        <td>Building name</td>
        <td>Edit</td>
        <td>Delete</td>
      </tr>
      </thead>

      <tbody>
      <tr v-for="project in projects" :key="project.id">
        <td>{{ project.id }}</td>
        <td>{{ project.name }}</td>
        <td>
          <router-link :to="{name: 'UpdatePerson', params: { id: project.person.id }}" class="nav-link">
            {{ project.person.name }}
          </router-link>
        </td>
        <td>
          <router-link :to="{name: 'UpdateBuilding', params: { id: project.building.id }}" class="nav-link">
            {{ project.building.name }}
          </router-link>
        </td>
        <td>
          <router-link :to="{name: 'UpdateProject', params: { id: project.id }}" class="btn btn-primary">Edit
          </router-link>
        </td>
        <td>
          <button class="btn btn-danger" v-on:click="deleteItem(project.id)">Delete</button>
        </td>
      </tr>
      </tbody>
    </table>
    <div>
      <router-link :to="{name: 'CreateProject'}" class="btn btn-primary">add project</router-link>
    </div>
  </div>
</template>

<script>

import Swal from "sweetalert2";
import ProjectService from "@/components/service/ProjectService";

export default {
  data() {
    return {
      error: "",
      projects: []
    }
  },

  created: function () {
    this.fetchItems();
  },

  methods: {
    fetchItems() {
      ProjectService.findAll(null).then((response) => {
        console.log(response.data.content);
        this.projects = response.data.content;
      });
    },
    deleteItem(id) {
      ProjectService.delete(id).then((response) => {
        this.$router.go();
      }).catch((e) => {
        console.log(e);
        Swal.fire('Delete failed,Please see the log');
        console.log(e);
        // room for improvement here
      });
    }
  }
}
</script>
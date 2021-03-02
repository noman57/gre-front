<template>
  <div>
    <h1>Projects</h1>
    <form>
      <div class="form-row">
        <div class="col">
          <select
              type="select"
              class="form-control"
              v-model="filter.personId"
              name="person"
          >
            <option value="" selected >Please select person</option>
            <option v-for="(person, i) in persons" :key="i" :value="person.id">
              {{ person.name }}
            </option>
          </select>
        </div>

        <div class="col">
          <select
              type="select"
              class="form-control"
              v-model="filter.buildingId"
              name="building"
          >
            <option value="" selected >Please select building</option>
            <option v-for="(building, i) in buildings" :key="i" :value="building.id">
              {{ building.name }}
            </option>
          </select>
        </div>

        <div class="col ">
          <button class="btn btn-info form-control"  type="button" v-on:click="filterProjectResults()">filter</button>
        </div>
        <div class="col ">
          <button class="btn btn-info form-control"  type="button" v-on:click="fetchItems()">reset</button>
        </div>
      </div>
    </form>
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
import PersonService from "@/components/service/PersonService";
import BuildingService from "@/components/service/BuildingService";

export default {
  data() {
    return {
      projects: [],
      persons: {},
      filter: {
        personId:null,
        buildingId:null
      },
      buildings: {}
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
        Swal.fire('Delete failed,'+e.response.data.errors);
      });
    },
    filterProjectResults() {
      ProjectService.filterResult(this.filter.personId,this.filter.buildingId).then((response) => {
        this.projects = response.data.content;

      }).catch((e) => {
        console.log(e);
        Swal.fire('Failed to load filter results');
        console.log(e);
        // room for improvement here
      });
    },
    findPersons() {
      PersonService.findAll(null).then((response) => {
        console.log(response.data.content);
        this.persons = response.data.content;
      });
    }, findBuildings() {
      BuildingService.findAll(null).then((response) => {
        console.log(response.data.content);
        this.buildings = response.data.content;
      });
    }
  },
  mounted() {
    this.findPersons();
    this.findBuildings();
  }
}
</script>
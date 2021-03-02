<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Add project</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="addItem">
          <div class="form-group">
            <label>Name:</label>
            <input type="text" class="form-control" v-model="project.name"/>
          </div>
          <div class="form-group">
            <label>Description:</label>
            <input type="text" class="form-control" v-model="project.description"/>
          </div>
          <div class="form-group">
            <label>Status</label>
            <select
                type="select"
                class="form-control"
                id="status"
                required
                v-model="project.status"
                name="status"
                @change="setStatus($event)"
            >
              <option value="In progress">In Progress</option>
              <option value="Complete">Complete</option>
            </select>
          </div>
          <div class="form-group">
            <label >get person</label>
            <select
                type="select"
                class="form-control"
                id="person"
                required
                v-model="project.personId"
                name="person"
            >
              <option v-for="(person, i) in persons" :key="i" :value="person.id">
                {{ person.name }}
              </option>
            </select>
          </div>

          <div class="form-group">
            <label >Building</label>
            <select
                type="select"
                class="form-control"
                id="building"
                required
                v-model="project.buildingId"
                name="building"
            >
              <option
                  v-for="(building, i) in buildings"
                  :key="i"
                  :value="building.id"
              >
                {{ building.name }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <input type="submit" class="btn btn-primary" value="Add project"/>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import ProjectService from "@/components/service/ProjectService";
import PersonService from "@/components/service/PersonService";
import BuildingService from "@/components/service/BuildingService";

export default {
  components: {
    /*name: 'AddItem'*/
  },
  data() {
    return {
      project: {},
      persons:{},
      buildings:{}
    }
  },
  methods: {
    addItem() {
      console.log(this.item);
      ProjectService.createProject(this.project).then((response) => {
        this.$router.push({name: 'ListProject'});
      }).catch((e) => {
        Swal.fire('Creation failed, please see log for details');
        console.log(e);
      });
    },
    setStatus(event) {
      this.project.status = event.target.value;
    },
    findPersons(){
      PersonService.findAll(null).then((response) => {
        console.log(response.data.content);
        this.persons = response.data.content;
      });
    },findBuildings(){
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
<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Add project</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="updateItem">
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
            <label>get person</label>
            <select
                type="select"
                class="form-control"
                required
                v-model="project.person.id"
                name="person"
                @change="setPerson($event)"
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
                required
                v-model="project.building.id"
                name="building"
                @change="setBuilding($event)"
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
            <input type="submit" class="btn btn-primary" value="update project"/>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  data(){
    return{
      project: {},
      persons:{},
      buildings:{}
    }
  },

  created: function(){
    this.getItem();
  },

  methods: {
    getItem()
    {
      let uri = '/projects/' + this.$route.params.id;
      this.axios.get(uri).then((response) => {
        this.project = response.data;
      });
    },
    setStatus(event) {
      this.project.status = event.target.value;
    },
    setBuilding(event) {
      this.project.buildingId = event.target.value;
    },
    setPerson(event) {
      this.project.personId = event.target.value;
    },
    updateItem()
    {
      let uri = '/projects/' + this.$route.params.id;
      this.axios.patch(uri, this.project).then((response) => {
        this.$router.push({name: 'ListProject'});
      });
    },
    findPersons(){
      let uri = '/persons';
      this.axios.get(uri).then((response) => {
        console.log(response.data.content);
        this.persons = response.data.content;
      });
    },findBuildings(){
      let uri = '/buildings';
      this.axios.get(uri).then((response) => {
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
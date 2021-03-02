<template>
  <div  class="container bg-light">
    <div >
      <div class="card-header">
        <h3>Add Building</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="addBuilding">
          <div class="form-group">
            <label>Name:</label>
            <input required type="text" class="form-control" v-model="building.name"/>
          </div>
          <div class="form-group">
            <input type="submit" class="btn btn-primary" value="Add Building"/>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import BuildingService from "@/components/service/BuildingService";

export default {
  data() {
    return {
      building: {}
    }
  },
  methods: {
    addBuilding() {
      console.log(this.item);
      BuildingService.createBuilding(this.building).then((response) => {
        this.$router.push({name: 'ListBuilding'});
      });
    }
  }
}
</script>
<template>
  <div  class="container bg-light">
    <div >
      <div class="card-header">
        <h3>Edit Building</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="updateItem">
          <div class="form-group">
            <label>Name:</label>
            <input type="text" class="form-control" v-model="building.name"/>
          </div>
          <div class="form-group">
            <input type="submit" class="btn btn-primary" value="update building"/>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>

import BuildingService from "@/components/service/BuildingService";
import Swal from "sweetalert2";

export default{
  data(){
    return{
      building:{}
    }
  },

  created: function(){
    this.getItem();
  },

  methods: {
    getItem()
    {
      BuildingService.findById(this.$route.params.id).then((response) => {
        this.building = response.data;
      });
    },

    updateItem()
    {
      BuildingService.updateBuilding(this.$route.params.id, this.building).then((response) => {
        this.$router.push({name: 'ListBuilding'});
      }).catch((e) => {
        Swal.fire('Update failed,'+e.response.data.errors);
      });
    }
  }
}
</script>
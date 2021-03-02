<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Add Item</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="addItem">
          <div class="form-group">
            <label>Building Name:</label>
            <input type="text" class="form-control" v-model="building.name"/>
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
export default {
  components: {
    /*name: 'AddItem'*/
  },
  data() {
    return {
      building: {}
    }
  },
  methods: {
    addItem() {
      console.log(this.item);
      let uri = '/buildings';
      this.axios.post(uri, this.building).then((response) => {
        this.$router.push({name: 'ListBuilding'});
      });
    }
  }
}
</script>
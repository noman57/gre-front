<template>
  <div>
    <h1>Buildings</h1>
    <table class="table table-hover">
      <thead>
      <tr>
        <td>ID</td>
        <td>Building Name</td>
        <td>Actions</td>
      </tr>
      </thead>

      <tbody>
      <tr v-for="building in buildings" :key="building.id">
        <td>{{ building.id }}</td>
        <td>{{ building.name }}</td>
        <td><router-link :to="{name: 'UpdateBuilding', params: { id: building.id }}" class="btn btn-primary">Edit</router-link></td>
        <td><button class="btn btn-danger"  v-on:click="deleteItem(building.id)">Delete</button></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  data(){
    return{
      error:"",
      buildings: []
    }
  },

  created: function()
  {
    this.fetchItems();
  },

  methods: {
    fetchItems()
    {
      let uri = '/buildings';
      this.axios.get(uri).then((response) => {
        console.log(response.data.content);
        this.buildings = response.data.content;
      });
    },
  deleteItem(id)
  {
    let uri = '/buildings/'+id;
    this.axios.delete(uri).then((response) => {
      this.$router.go();
    }).catch((e) => {
      alert("Delete not successful .Building already used in project");
      console.log(e);
      // room for improvement here
    });
  }
  }
}
</script>
<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Add Person</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="addItem">
          <div class="form-group">
            <label>Name:</label>
            <input type="text" class="form-control" v-model="person.name"/>
          </div>
          <div class="form-group">
            <input type="submit" class="btn btn-primary" value="Add Person"/>
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
      person: {}
    }
  },
  methods: {
    addItem() {
      console.log(this.item);
      let uri = '/persons';
      this.axios.post(uri, this.person).then((response) => {
        this.$router.push({name: 'ListPerson'});
      });
    }
  }
}
</script>
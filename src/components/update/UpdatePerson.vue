<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Edit Item</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="updateItem">
          <div class="form-group">
            <label>Item Name:</label>
            <input type="text" class="form-control" v-model="person.name"/>
          </div>
          <div class="form-group">
            <input type="submit" class="btn btn-primary" value="update person"/>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>


import PersonService from "@/components/service/PersonService";

export default {
  data() {
    return {
      person: {}
    }
  },

  created: function () {
    this.getItem();
  },

  methods: {
    getItem() {
      PersonService.findById(this.$route.params.id).then((response) => {
        this.person = response.data;
      });
    },

    updateItem() {
      PersonService.updatePerson(this.$route.params.id, this.person).then((response) => {
        this.$router.push({name: 'ListPerson'});
      });
    }
  }
}
</script>
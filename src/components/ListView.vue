<template>
  <div class="search h-100 container-fluid">
    <b-alert :show="loading" variant="info">Loading...</b-alert>
    <b-row>
      <b-col>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>ListID</th>
              <th>Name</th>
              <th>Title</th>
              <th>Description</th>
              <th>ListGroup</th>
              <th>Active</th>
              <th>Updated At</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="list in lists" :key="list.id">
              <td>{{ list.listid }}</td>
              <td>{{ list.name }}</td>
              <td>{{ list.title }}</td> 
              <td>{{ list.description }}</td>
              <td>{{ list.listgroup }}</td>
              <td>{{ list.active }}</td>
              <td>{{ list.updatedAt }}</td>
              <td class="text-right">
                <a href="#" @click.prevent="loadList(list)">Edit</a>
                <!-- <a href="#" @click.prevent="deleteAuto(auto.id)">Delete</a> -->
              </td>
            </tr>
          </tbody>
        </table>
      </b-col>
    </b-row>
    <div class="py-2">
      2019 &copy;  created by Beau Bishop
    </div>
  </div>
</template>

<script>
import api from '@/api'
export default {
  name: 'list',
  data () {
    return {
      msg: 'List View',
      loading: false,
      lists: [],
      model: {}
    }
  },
  async created () {
    this.refreshLists()
  },
  methods: {
    async refreshLists () {
      this.loading = true
      this.lists = await api.getLists()
      this.loading = false
    },
    async loadList (list) {
      this.model = Object.assign({}, list)
    },
    async saveList () {
      if (this.model.id) {
        await api.updateList(this.model.id, this.model)
      } else {
        await api.createList(this.model)
      }
      this.model = {}
      await this.refreshLists()
    } // ,
    //     async deleteChannel (id) {
    //       if (confirm('Are you sure you want to delete this Channel?')) {
    //         if (this.model.id === id) {
    //           this.model = {}
    //         }
    //         await api.deleteChannel(id)
    //         await this.refreshChannels()
    //       }
    //     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html,body,#app {
  height: 100% !important;
  background:#f8f8f8;
}
  
</style>

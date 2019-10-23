<template>
  <div class="search h-100 container-fluid">
    <b-alert :show="loading" variant="info">Loading...</b-alert>
    <b-row>
      <b-col>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>ChannelID</th>
              <th>Name</th>
              <th>Code</th>
              <th>ContentType</th>
              <th>ListID</th>
              <th>Active</th>
              <th>Updated At</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="channel in channels" :key="channel.id">
              <td>{{ channel.channelid }}</td>
              <td>{{ channel.name }}</td>
              <td>{{ channel.code }}</td> 
              <td>{{ channel.contenttype }}</td>
              <td>{{ channel.listid }}</td>
              <td>{{ channel.active }}</td>
              <td>{{ channel.updatedAt }}</td>
              <td class="text-right">
                <a href="#" @click.prevent="loadChannel(channel)">Edit</a>
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
  name: 'channel',
  data () {
    return {
      msg: 'Channel View',
      loading: false,
      channels: [],
      model: {}
    }
  },
  async created () {
    this.refreshChannels()
  },
  methods: {
    async refreshChannels () {
      this.loading = true
      this.channels = await api.getChannels()
      this.loading = false
    },
    async loadChannel (channel) {
      this.model = Object.assign({}, channel)
    },
    async saveChannel () {
      if (this.model.id) {
        await api.updateChannel(this.model.id, this.model)
      } else {
        await api.createChannel(this.model)
      }
      this.model = {}
      await this.refreshChannels()
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
  
.h-85 {
  height:85% !important;
}
.mask-col {
  background: url('/static/img/tacoma.jpg') no-repeat 0 -9rem;
  background-size: cover;
  
  height: 15vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
  
}
</style>

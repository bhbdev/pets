<template>
  <div class="search h-100 container-fluid">
    <b-alert :show="loading" variant="info">Loading...</b-alert>
    <b-row>
      <b-col>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>StoryID</th>
              <th>ChannelID</th>
              <th>ListID</th>
              <th>ContentType</th>
              <th>Headline</th>
              <th>StoryDate</th>
              <th>Updated At</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="story in storyads" :key="story.id">
              <td>{{ story.listid }}</td>
              <td>{{ story.channelid }}</td>
              <td>{{ story.listid }}</td> 
              <td>{{ story.contenttype }}</td>
              <td>{{ story.headline }}</td>
              <td>{{ story.storydate }}</td>
              <td>{{ story.updatedAt }}</td>
              <td class="text-right">
                <a href="#" @click.prevent="loadStoryAd(story)">Edit</a>
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
      msg: 'Story View',
      loading: false,
      storyads: [],
      model: {}
    }
  },
  async created () {
    this.refreshStoryAds()
  },
  methods: {
    async refreshStoryAds () {
      this.loading = true
      this.storyads = await api.getStoryAds()
      this.loading = false
    },
    async loadStoryAd (story) {
      this.model = Object.assign({}, story)
    },
    async saveStoryAd () {
      if (this.model.id) {
        await api.updateStoryAd(this.model.id, this.model)
      } else {
        await api.createStoryAd(this.model)
      }
      this.model = {}
      await this.refreshStoryAds()
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

//  import Vue from 'vue'
import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:8081/',
  json: true
})

export default {
  async execute (method, resource, data) {
  //  let accessToken = await Vue.prototype.$auth.getAccessToken()
    return client({
      method,
      url: resource,
      data
    //  headers: {
    //    Authorization: `Bearer ${accessToken}`
    //  }
    }).then(req => {
      return req.data
    })
  },
  getLists () {
    return this.execute('get', '/lists')
  },
  getList (id) {
    return this.execute('get', `/lists/{$id}`)
  },
  getChannels () {
    return this.execute('get', '/channels')
  },
  getChannel (id) {
    return this.execute('get', `/channels/{$id}`)
  },
  getStoryAds () {
    return this.execute('get', '/storyads')
  },
  getStoryAd (id) {
    return this.execute('get', `/storyads/{$id}`)
  }// ,
//   createAuto (data) {
//     return this.execute('post', '/autos', data)
//   },
//   updateAuto (id, data) {
//     return this.execute('put', `/autos/${id}`, data)
//   },
//   deleteAuto (id) {
//     return this.execute('delete', `/autos/${id}`)
//   }
}

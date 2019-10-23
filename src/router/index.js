import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ListView from '@/components/ListView'
import ChannelView from '@/components/ChannelView'
import StoryAdView from '@/components/StoryAdView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/lists',
      name: 'ListView',
      component: ListView
    },
    {
      path: '/channels',
      name: 'ChannelView',
      component: ChannelView
    },
    {
      path: '/storyads',
      name: 'StoryAdView',
      component: StoryAdView
    }
  ]
})

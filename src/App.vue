<template>
  <div id="app">
    <div class="deep-purple darken-4">
    <b-navbar toggleable="md" type="dark" xvariant="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand to="/" class="font-weight-bold"><v-icon name="paw" /> Pets</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
					<b-nav-item to="/lists">Lists</b-nav-item>
          <b-nav-item to="/channels">Channels</b-nav-item>
					<b-nav-item to="/storyads">StoryAds</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    </div>
    <!-- routes will be rendered here -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.navbar-brand .fa-icon {
  margin-top: -3px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>

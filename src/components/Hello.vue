<template>
  <div class="hello h-100 container-fluid">
    <div class="row">
      <div class="col white">
        
        <h1 class=" display-4">{{ msg }}</h1>
          
      </div>
    </div>
    <div class="py-2">
      2019 &copy;  created by Beau Bishop
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to ArcaMax Pets'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
html,body,#app {
  height: 100% !important;
  background:#f8f8f8;
}

h1, h2 {
  font-weight: normal;
}

a {
  color: #35495E;
}
</style>

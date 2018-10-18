<template>

  <div id="app">

    
    <nav-bar class="nav"></nav-bar>

   <router-view></router-view>
  </div>
</template>

<script>

import NavBar from './components/NavBar'
import Particule from './components/Particule'  



export default {
  name: 'App',
  components: {
    NavBar,
    Particule,
  },
}
</script>

<style>


body {
    background-color: grey;

}

a:-webkit-any-link {
  text-decoration: none;
  color: black;
}

h1 {
  font-family: Raleway;
  font-size: 28px;
  text-align: center;
  padding-top: 5vh;
  padding-bottom: 6vh;
}


.txt {
  font-family: Open Sans;
text-align: center;
} 
</style>

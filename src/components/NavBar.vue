<template>
  <circle-menu id="mybtn" type="top" :number="3" animate="animated jello" mask='white' circle>
    <button type="button" slot="item_btn"></button>
    
        <router-link to="/" slot="item_1"><img src="../assets/icons/home.png" alt="Icone Home" id="img_home"></img></router-link>
        <router-link to="cv" slot="item_2"><img src="../assets/icons/cv.png" alt="Icone CV" id="img_cv"></img></router-link>
        <router-link to="projets" slot="item_3"><img src="../assets/icons/projets.png" alt="Icone Projet" id="img_projet" ></img></router-link>

  </circle-menu>
</template>

<script>

import CircleMenu from 'vue-circle-menu'
export default {
      components: {
    CircleMenu
  },
  
}
</script>

<style>

#mybtn {
  display: flex;
  justify-content: center;
  margin: auto;

}

* {
   margin: 0;
    padding: 0;
}

#img_home {
  width: 40px;
  height: 40px;
  padding-top: 3px;

}

#img_contact {
  width: 40px;
  height: 40px;
  padding-top: 4px;

}

#img_cv {
  width: 40px;
  height: 40px;
    padding-top: 3px;

}

#img_projet {
  width: 40px;
  height: 40px;
  padding-top: 5px;
}
  .nav {
     bottom: 0;
      position: fixed;
     width: 100%;
    background-color: #DFDFDF;
  }



#home {
  width: 43px;
  background-position: center;
}

#cv {
  width: 43px;
  background-position: center;
}
#projet {
  width: 43px;
  background-position: center;
vertical-align: auto;
display: block;
}
#contact {
  width: 43px;
  background-position: center;
}

.oy-menu-item {
  height: 50px;
  width: 50px;
}

element.style {
      display: flex;
    align-items: center;
    justify-content: center;
}

</style>

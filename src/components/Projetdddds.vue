<template>
<div>
   <h1> Voici la liste des différents projets que j'ai réalisé :</h1>
      <div class="text">
        <div v-bind:key="comp" v-for="comp in comps"> 
              <img class="image-projet" v-bind:src="`${comp.picture_1}`" alt="Photo de mon projet">
               <!-- <div v-bind:key="im" v-for="im in lol"> 
              <img class="image-projet" v-bind:src="`${im.picture_2}`" alt=""> -->

        <div class="pj txt" id="pj-name">Nom du projet : {{comp.project_name}}</div>
        <div class="pj txt" id="pj-des"> Description du projets : {{comp.project_description}}</div>
   <div id="lk" <button class="mybtn">    <a :href="`${ comp.link_to_project }`" target="_blank"> <p class="decouvrir" >Lien vers le site WEB</p></a></button> </div>


        </div>
      </div>
    </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'projects',
  data () {
    return {
      comps: {}
    }
  },
  created () {
    axios.get('https://jeremyv.promo-17.codeur.online/pwa/static/projects.php')
      .then(response => {
        this.comps = response.data
        console.log(response.data);
      })
      .catch(Err => {
      })
  }

}
</script>

<style>
#lk {
     padding-top: 5vh;
    padding-bottom: 10vh;
}
.mybtn {
     text-decoration: none;
    color: #333;
    background-color: #fff;
    border-color: #ccc;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
    display: flex;
    margin: auto;
    justify-content: center !important;
    display: flex !important;
}
.image-projet {
width: 98%;
margin: 0 auto;
	border-radius: 3px;
	box-shadow: 0 3px 6px rgba(0,0,0,0.9);
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
.pj {
  font-size: 3vh;
  padding-top: 1vh;
  padding-bottom: 4vh;
}
</style>


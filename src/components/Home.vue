<template>

<div>
  <!-- iOS Safari -->


  <div> <h1>Bienvenue sur mon portfolio </h1>
    <div id="myname"> 
      Je m'appel Jérémy VITAL
    </div>
      <div class=txt>
Ce portfolio est un PWA conçu avec vueJS et symfony. C'est mon projet de fin d'année.      </div>
    </div>

<div id="ptc">
 <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
  </div>

  </div>




</template>

<style>


#myname {
    font-family: Raleway;
    font-size: 25px;
    padding-top: 5vh;
    padding-bottom: 4vh;
      text-align: center;
}

.description {
  font-family: Raleway;
}


</style>

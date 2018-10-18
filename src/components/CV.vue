<template>
<div class="my-content">
    <h1>Mon CV</h1>
    <div id="my-resume">  
        <img src="../../static/CV_HD.jpg" id="myresume">
     </div>   
    <div class="txt" id="dwl">
    <button class="mybtn">  <a href="https://jeremyv.promo-17.codeur.online/pwa/static/CV_HD.pdf" alt="Photo de mon CV" download>Télécharger mon CV en PDF</a></button>
    <div class="txt" id="ctc">
    <button class="mybtn"> Me contacter: <a HREF="mailto:jeremyy.v@codeur.online">jeremy.v@codeur.online</a> </button>
    <div class="txt" id="lkd">
    <button class="mybtn">  <a href="https://linkedin.com/in/jeremy-vital-dev">Linkedin</a></button>
</div>
    <div class="txt" id="gt">
    <button class="mybtn">  <a href="https://github.com/vitalj">Github</a></button>
</div>


    </div>

    </div>
    </div>

</template>


<style>

body {
}


.mybtn {
     text-decoration: none;
    color: #333;
    background-color: #fff;
    border-color: #ccc;
    display: inline-block;
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

}
#lkd {
    padding-top: 3vh;
}

#ctc{
    padding-top: 3vh;
}

#gt{
    padding-top: 3vh;
}

#dwl {
    padding-top: 5vh;
    padding-bottom: 10vh;
}



#info {
    padding-bottom: 5%;
}

#myresume {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 98%;
}

.my-content {
    margin: auto;
}



</style>
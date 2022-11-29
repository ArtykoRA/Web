
//Componentes para cambiar el cielo activo


    //console.log("pulsando click-listener");
AFRAME.registerComponent("click-listener", {
 init: function() {
  this.el.addEventListener("click", (e) => { 
    console.log("pulsando click-listener");          
      let apago = document.querySelector("#sky1");
      let apago3 = document.querySelector("#sky3"); 
      let apago4 = document.querySelector("#sky4");
      let enciendo = document.querySelector("#sky2");
         
      apago.setAttribute("visible",false);
      apago3.setAttribute("visible",false);
      apago4.setAttribute("visible",false);
      enciendo.setAttribute("visible",true);            
  })
 }
})



AFRAME.registerComponent("click-listener2", {
  init: function() {
    this.el.addEventListener("click", (e) => {
    console.log("pulsando click-listener2");           
      let apago = document.querySelector("#sky1");
      let apago2 = document.querySelector("#sky2");
      let enciendo = document.querySelector("#sky3"); 
      let apago4 = document.querySelector("#sky4");

      apago.setAttribute("visible",false);
      apago2.setAttribute("visible",false);
      apago4.setAttribute("visible",false);
      enciendo.setAttribute("visible",true);            
    })
  }
})

AFRAME.registerComponent("click-listener3", {
  init: function() {
    this.el.addEventListener("click", (e) => { 
      console.log("pulsando click-listener3");          
      let apago = document.querySelector("#sky1");
      let apago2 = document.querySelector("#sky2");
      let apago3 = document.querySelector("#sky3");
      let apago5 = document.querySelector("#sky5");
      let apago7 = document.querySelector("#sky7");
      let enciendo = document.querySelector("#sky4");  
     
      apago.setAttribute("visible",false);
      apago2.setAttribute("visible",false);
      apago3.setAttribute("visible",false);
      apago5.setAttribute("visible",false);
      apago7.setAttribute("visible",false);
      enciendo.setAttribute("visible",true);       
      
      document.getElementById("b4").className = "clickable"; 
      document.getElementById("b4b").className = "clickable";
      document.getElementById("b4bb").className = "clickable"; 
      document.getElementById("b4bbb").className = "clickable";

      document.getElementById("s3b1").className = "clickable";
      document.getElementById("s3b2").className = "clickable";
      document.getElementById("s3b3").className = "clickable";
      document.getElementById("s3b4").className = "clickable";
    })
  }
})

AFRAME.registerComponent("click-listener4", {
  init: function() {
    this.el.addEventListener("click", (e) => {
      console.log("pulsando click-listener4");           
      let apago = document.querySelector("#sky2");
      let apago3 = document.querySelector("#sky3");
      let enciendo = document.querySelector("#sky1"); 

      apago3.setAttribute("visible",false);
      apago.setAttribute("visible",false);
      enciendo.setAttribute("visible",true);            
    })
  }
})
//este nos saca del problema
AFRAME.registerComponent("click-listener5", {
  init: function() {
    this.el.addEventListener("click", (e) => {
      console.log("pulsando click-listener5");           
      let apago = document.querySelector("#sky4");
      let apago6 = document.querySelector("#sky6");
      let enciendo = document.querySelector("#sky5"); 

      apago6.setAttribute("visible",false);
      apago.setAttribute("visible",false);
      enciendo.setAttribute("visible",true);       
      
      document.getElementById("b5").className = "clickable"; 
      document.getElementById("b5b").className = "clickable";

      document.getElementById("b4").className = "not-clickable"; 
      document.getElementById("b4b").className = "not-clickable";
      document.getElementById("b4bb").className = "not-clickable"; 
      document.getElementById("b4bbb").className = "not-clickable";

      document.getElementById("s3b1").className = "not-clickable";
      document.getElementById("s3b2").className = "not-clickable";
      document.getElementById("s3b3").className = "not-clickable";
      document.getElementById("s3b4").className = "not-clickable";

    })
  }
})
//pulsando este vamos al lugar del problema
AFRAME.registerComponent("click-listener6", {
  init: function() {
    this.el.addEventListener("click", (e) => {
      console.log("pulsando click-listener  6");           
      let apago = document.querySelector("#sky5");
      let enciendo = document.querySelector("#sky6"); 

      apago.setAttribute("visible",false);
      enciendo.setAttribute("visible",true);    
      
      document.getElementById("b6").className = "clickable"; 
      document.getElementById("b6b").className = "clickable";
      
      document.getElementById("b5").className = "not-clickable"; 
      document.getElementById("b5b").className = "not-clickable";
    })
  }
})
AFRAME.registerComponent("click-listener7", {
  init: function() {
    this.el.addEventListener("click", (e) => {
      console.log("pulsando click-listener 7 ");           
      let apago = document.querySelector("#sky4");
      //let apago3 = document.querySelector("#sky3");
      let enciendo = document.querySelector("#sky7"); 

      //apago3.setAttribute("visible",false);
      apago.setAttribute("visible",false);
      enciendo.setAttribute("visible",true);            
    })
  }
})
AFRAME.registerComponent("click-listener8", {
  init: function() {
    this.el.addEventListener("click", (e) => {
      console.log("pulsando click-listener 8 ");           
      let apago = document.querySelector("#sky7");
      let apago4 = document.querySelector("#sky4");
      let enciendo = document.querySelector("#sky8"); 

      apago4.setAttribute("visible",false);
      apago.setAttribute("visible",false);
      enciendo.setAttribute("visible",true);            
    })
  }
})
AFRAME.registerComponent("click-listener9", {
  init: function() {
    this.el.addEventListener("click", (e) => {
      console.log("pulsando click-listener 9 ");           
      let apago = document.querySelector("#sky8");
      //let apago4 = document.querySelector("#sky4");
      let enciendo = document.querySelector("#sky7"); 

      //apago4.setAttribute("visible",false);
      apago.setAttribute("visible",false);
      enciendo.setAttribute("visible",true);            
    })
  }
})



  
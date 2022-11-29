AFRAME.registerComponent("click-listener", {
    init: function() {
     this.el.addEventListener("click", (e) => { 
       console.log("pulsando click-listener");          
         let apago = document.querySelector("#sky1");
         let enciendo = document.querySelector("#sky2");
            
         apago.setAttribute("visible",false);
         enciendo.setAttribute("visible",true);            
     })
    }
})

AFRAME.registerComponent("click-listener2", {
    init: function() {
     this.el.addEventListener("click", (e) => { 
       console.log("pulsando click-listener 2 ");          
         let apago = document.querySelector("#sky2");
          let enciendo = document.querySelector("#sky1");
            
         apago.setAttribute("visible",false);
         enciendo.setAttribute("visible",true);            
     })
    }
})
   
AFRAME.registerComponent("click-listener3", {
  init: function() {
   this.el.addEventListener("click", (e) => { 
     console.log("pulsando click-listener 3");          
       let apago = document.querySelector("#sky2");
       let enciendo = document.querySelector("#sky3");
          
       apago.setAttribute("visible",false);
       enciendo.setAttribute("visible",true);            
   })
  }
})

AFRAME.registerComponent("click-listener4", {
  init: function() {
   this.el.addEventListener("click", (e) => { 
     console.log("pulsando click-listener 4");          
       let apago = document.querySelector("#sky3");
       let enciendo = document.querySelector("#sky2");
          
       apago.setAttribute("visible",false);
       enciendo.setAttribute("visible",true);            
   })
  }
})

AFRAME.registerComponent("click-listener5", {
  init: function() {
   this.el.addEventListener("click", (e) => { 
     console.log("pulsando click-listener 5");          
       let apago = document.querySelector("#sky3");
       let apago5 = document.querySelector("#sky5");
       let enciendo = document.querySelector("#sky4");
          
       apago.setAttribute("visible",false);
       apago5.setAttribute("visible",false);
       enciendo.setAttribute("visible",true);            
   })
  }
})

AFRAME.registerComponent("click-listener6", {
  init: function() {
   this.el.addEventListener("click", (e) => { 
     console.log("pulsando click-listener 5");          
       let apago = document.querySelector("#sky4");
       let enciendo = document.querySelector("#sky3");
          
       apago.setAttribute("visible",false);
       enciendo.setAttribute("visible",true);            
   })
  }
})

AFRAME.registerComponent("click-listener7", {
  init: function() {
   this.el.addEventListener("click", (e) => { 
     console.log("pulsando click-listener 5");          
       let apago = document.querySelector("#sky4");
       let enciendo = document.querySelector("#sky5");
          
       apago.setAttribute("visible",false);
       enciendo.setAttribute("visible",true);            
   })
  }
})

AFRAME.registerComponent("click-listener8", {
  init: function() {
   this.el.addEventListener("click", (e) => { 
     console.log("pulsando click-listener 8");          
       let apago = document.querySelector("#sky5");
       let enciendo = document.querySelector("#sky6");
          
       apago.setAttribute("visible",false);
       enciendo.setAttribute("visible",true);            
   })
  }
})
AFRAME.registerComponent("click-listener9", {
  init: function() {
   this.el.addEventListener("click", (e) => { 
     console.log("pulsando click-listener 9");          
       let apago = document.querySelector("#sky5");
       let enciendo = document.querySelector("#sky7");
          
       apago.setAttribute("visible",false);
       enciendo.setAttribute("visible",true);            
   })
  }
})

AFRAME.registerComponent("click-listener10", {
  init: function() {
   this.el.addEventListener("click", (e) => { 
     console.log("pulsando click-listener 10");          
       let apago = document.querySelector("#sky5");
       let enciendo = document.querySelector("#sky8");
          
       apago.setAttribute("visible",false);
       enciendo.setAttribute("visible",true);            
   })
  }
})

AFRAME.registerComponent("click-listener11", {
  init: function() {
   this.el.addEventListener("click", (e) => { 
     console.log("pulsando click-listener 11");          
       let apago = document.querySelector("#sky7");
       let enciendo = document.querySelector("#sky5");
          
       apago.setAttribute("visible",false);
       enciendo.setAttribute("visible",true);            
   })
  }
})

AFRAME.registerComponent("click-listener12", {
  init: function() {
   this.el.addEventListener("click", (e) => { 
     console.log("pulsando click-listener 11");          
       let apago = document.querySelector("#sky8");
       let enciendo = document.querySelector("#sky5");
          
       apago.setAttribute("visible",false);
       enciendo.setAttribute("visible",true);            
   })
  }
})

AFRAME.registerComponent("click-listener13", {
  init: function() {
   this.el.addEventListener("click", (e) => { 
     console.log("pulsando click-listener 11");          
       let apago = document.querySelector("#sky6");
       let enciendo = document.querySelector("#sky5");
          
       apago.setAttribute("visible",false);
       enciendo.setAttribute("visible",true);            
   })
  }
})
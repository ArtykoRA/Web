AFRAME.registerComponent("click-listener", {
    init: function() {
     this.el.addEventListener("click", (e) => { 
       console.log("pulsando click-listener");          
         let apago = document.querySelector("#sky1");
         let enciendo = document.querySelector("#sky2");
            
         apago.setAttribute("visible",false);
         enciendo.setAttribute("visible",true);
         enciendo.setAttribute("rotation","0 45 0");            
     })
    }
})

AFRAME.registerComponent("click-listener1", {
    init: function() {
     this.el.addEventListener("click", (e) => { 
       console.log("pulsando click-listener 1");          
         let apago = document.querySelector("#sky2");
         let enciendo = document.querySelector("#sky1");
            
         apago.setAttribute("visible",false);
         enciendo.setAttribute("visible",true);           
     })
    }
})
AFRAME.registerComponent("click-listener2", {
    init: function() {
     this.el.addEventListener("click", (e) => { 
       console.log("pulsando click-listener 2");          
         let apago = document.querySelector("#sky2");
         let enciendo = document.querySelector("#sky3");
            
         apago.setAttribute("visible",false);
         enciendo.setAttribute("visible",true);           
     })
    }
})
AFRAME.registerComponent("click-listener3", {
    init: function() {
     this.el.addEventListener("click", (e) => { 
       console.log("pulsando click-listener 3");          
         let apago = document.querySelector("#sky3");
         let enciendo = document.querySelector("#sky2");
            
         apago.setAttribute("visible",false);
         enciendo.setAttribute("visible",true);           
     })
    }
})
AFRAME.registerComponent("click-listener4", {
    init: function() {
     this.el.addEventListener("click", (e) => { 
       console.log("pulsando click-listener 3");          
         let apago = document.querySelector("#sky2");
         let enciendo = document.querySelector("#sky4");
            
         apago.setAttribute("visible",false);
         enciendo.setAttribute("visible",true);           
     })
    }
})
AFRAME.registerComponent("click-listener5", {
    init: function() {
     this.el.addEventListener("click", (e) => { 
       console.log("pulsando click-listener 5");          
         let apago = document.querySelector("#sky4");
         let enciendo = document.querySelector("#sky2");
            
         apago.setAttribute("visible",false);
         enciendo.setAttribute("visible",true);           
     })
    }
})

AFRAME.registerComponent("click-listener6", {
    init: function() {
     this.el.addEventListener("click", (e) => { 
       console.log("pulsando click-listener 6");          
         let apago = document.querySelector("#sky4");
         let enciendo = document.querySelector("#sky5");
            
         apago.setAttribute("visible",false);
         enciendo.setAttribute("visible",true); 
         //enciendo.setAttribute("rotation","0 -180 0");          
     })
    }
})
AFRAME.registerComponent("click-listener7", {
    init: function() {
     this.el.addEventListener("click", (e) => { 
       console.log("pulsando click-listener 7");          
         let apago = document.querySelector("#sky5");
         let enciendo = document.querySelector("#sky4");
            
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
       let enciendo = document.querySelector("#sky7");
          
       apago.setAttribute("visible",false);
       enciendo.setAttribute("visible",true);           
   })
  }
})
AFRAME.registerComponent("click-listener9", {
  init: function() {
   this.el.addEventListener("click", (e) => { 
     console.log("pulsando click-listener 9");          
       let apago = document.querySelector("#sky7");
       let enciendo = document.querySelector("#sky5");
          
       apago.setAttribute("visible",false);
       enciendo.setAttribute("visible",true);           
   })
  }
})
AFRAME.registerComponent("click-listener10", {
  init: function() {
   this.el.addEventListener("click", (e) => { 
     console.log("pulsando click-listener 12");          
       let apago = document.querySelector("#sky5");
       let enciendo = document.querySelector("#sky6");
          
       apago.setAttribute("visible",false);
       enciendo.setAttribute("visible",true);           
   })
  }
})
AFRAME.registerComponent("click-listener11", {
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
AFRAME.registerComponent("click-listener12", {
  init: function() {
   this.el.addEventListener("click", (e) => { 
     console.log("pulsando click-listener 11");          
       let apago = document.querySelector("#sky1");
       let enciendo = document.querySelector("#sky8");
          
       apago.setAttribute("visible",false);
       enciendo.setAttribute("visible",true);           
   })
  }
})
AFRAME.registerComponent("click-listener13", {
  init: function() {
   this.el.addEventListener("click", (e) => { 
     console.log("pulsando click-listener 13");          
       let apago = document.querySelector("#sky8");
       let enciendo = document.querySelector("#sky1");
          
       apago.setAttribute("visible",false);
       enciendo.setAttribute("visible",true);           
   })
  }
})
AFRAME.registerComponent("click-listener14", {
  init: function() {
   this.el.addEventListener("click", (e) => { 
     console.log("pulsando click-listener 14");          
       let apago = document.querySelector("#sky8");
       let enciendo = document.querySelector("#sky9");
          
       apago.setAttribute("visible",false);
       enciendo.setAttribute("visible",true);           
   })
  }
})
AFRAME.registerComponent("click-listener15", {
  init: function() {
   this.el.addEventListener("click", (e) => { 
     console.log("pulsando click-listener 15");          
       let apago = document.querySelector("#sky9");
       let enciendo = document.querySelector("#sky8");
          
       apago.setAttribute("visible",false);
       enciendo.setAttribute("visible",true);           
   })
  }
})
AFRAME.registerComponent("click-listener16", {
  init: function() {
   this.el.addEventListener("click", (e) => { 
     console.log("pulsando click-listener 16");          
       let apago = document.querySelector("#sky9");
       let enciendo = document.querySelector("#sky10");
          
       apago.setAttribute("visible",false);
       enciendo.setAttribute("visible",true);           
   })
  }
})
AFRAME.registerComponent("click-listener17", {
  init: function() {
   this.el.addEventListener("click", (e) => { 
     console.log("pulsando click-listener 17");          
       let apago = document.querySelector("#sky10");
       let enciendo = document.querySelector("#sky9");
          
       apago.setAttribute("visible",false);
       enciendo.setAttribute("visible",true);           
   })
  }
})
AFRAME.registerComponent("click-listener18", {
  init: function() {
   this.el.addEventListener("click", (e) => { 
     console.log("pulsando click-listener 18");          
       let apago = document.querySelector("#sky10");
       let enciendo = document.querySelector("#sky11");
          
       apago.setAttribute("visible",false);
       enciendo.setAttribute("visible",true);           
   })
  }
})
AFRAME.registerComponent("click-listener19", {
  init: function() {
   this.el.addEventListener("click", (e) => { 
     console.log("pulsando click-listener 19");          
       let apago = document.querySelector("#sky11");
       let enciendo = document.querySelector("#sky10");
          
       apago.setAttribute("visible",false);
       enciendo.setAttribute("visible",true);           
   })
  }
})
AFRAME.registerComponent("click-listener", {
    init: function() {
      this.el.addEventListener("click", (e) => { 
          console.log("pulsando click-listener");          
          const apago = document.querySelector("#sky1");
          const enciendo = document.querySelector("#sky2");  
 
          apago.setAttribute("visible",false);
          enciendo.setAttribute("visible",true);          
      })
    }
})


AFRAME.registerComponent("click-listener1", {
    init: function() {
      this.el.addEventListener("click", (e) => {  
          console.log("pulsando click-listener 1");        
          const apago = document.querySelector("#sky2");
          const enciendo = document.querySelector("#sky1");  
 
          apago.setAttribute("visible",false);
          enciendo.setAttribute("visible",true); 
      })
    }
})

AFRAME.registerComponent("click-listener2", {
    init: function() {
      this.el.addEventListener("click", (e) => {  
          console.log("pulsando click-listener 2");        
          const apago = document.querySelector("#sky1");
          const enciendo = document.querySelector("#sky4");  
 
          apago.setAttribute("visible",false);
          enciendo.setAttribute("visible",true); 
      })
    }
})
AFRAME.registerComponent("click-listener3", {
    init: function() {
      this.el.addEventListener("click", (e) => {  
          console.log("pulsando click-listener 3");        
          const apago = document.querySelector("#sky4");
          const enciendo = document.querySelector("#sky1");  
 
          apago.setAttribute("visible",false);
          enciendo.setAttribute("visible",true); 
      })
    }
})

AFRAME.registerComponent("click-listener4", {
    init: function() {
      this.el.addEventListener("click", (e) => {  
          console.log("pulsando click-listener 4");        
          const apago = document.querySelector("#sky2");
          const enciendo = document.querySelector("#sky3");  
 
          apago.setAttribute("visible",false);
          enciendo.setAttribute("visible",true); 
      })
    }
})

AFRAME.registerComponent("click-listener5", {
    init: function() {
      this.el.addEventListener("click", (e) => {  
          console.log("pulsando click-listener 4");        
          const apago = document.querySelector("#sky3");
          const enciendo = document.querySelector("#sky2");  
 
          apago.setAttribute("visible",false);
          enciendo.setAttribute("visible",true); 
      })
    }
})

AFRAME.registerComponent("click-listener6", {
    init: function() {
      this.el.addEventListener("click", (e) => {  
          console.log("pulsando click-listener 6");        
          const apago = document.querySelector("#sky3");
          const enciendo = document.querySelector("#sky4");  
 
          apago.setAttribute("visible",false);
          enciendo.setAttribute("visible",true); 
      })
    }
})

AFRAME.registerComponent("click-listener7", {
    init: function() {
      this.el.addEventListener("click", (e) => {  
          console.log("pulsando click-listener 7");        
          const apago = document.querySelector("#sky1");
          const enciendo = document.querySelector("#sky5");  
 
          apago.setAttribute("visible",false);
          enciendo.setAttribute("visible",true); 
      })
    }
})

AFRAME.registerComponent("click-listener8", {
    init: function() {
      this.el.addEventListener("click", (e) => {  
          console.log("pulsando click-listener 7");        
          const apago = document.querySelector("#sky5");
          const enciendo = document.querySelector("#sky1");  
 
          apago.setAttribute("visible",false);
          enciendo.setAttribute("visible",true); 
      })
    }
})

AFRAME.registerComponent("click-listener9", {
    init: function() {
      this.el.addEventListener("click", (e) => {  
          console.log("pulsando click-listener 9");        
          const apago = document.querySelector("#sky5");
          const enciendo = document.querySelector("#sky6");  
 
          apago.setAttribute("visible",false);
          enciendo.setAttribute("visible",true); 
      })
    }
})

AFRAME.registerComponent("click-listener10", {
    init: function() {
      this.el.addEventListener("click", (e) => {  
          console.log("pulsando click-listener 10");        
          const apago = document.querySelector("#sky6");
          const enciendo = document.querySelector("#sky5");  
 
          apago.setAttribute("visible",false);
          enciendo.setAttribute("visible",true); 
      })
    }
})

AFRAME.registerComponent("click-listener11", {
    init: function() {
      this.el.addEventListener("click", (e) => {  
          console.log("pulsando click-listener 11");        
          const apago = document.querySelector("#sky6");
          const enciendo = document.querySelector("#sky7");  
 
          apago.setAttribute("visible",false);
          enciendo.setAttribute("visible",true); 
      })
    }
})

AFRAME.registerComponent("click-listener12", {
    init: function() {
      this.el.addEventListener("click", (e) => {  
          console.log("pulsando click-listener 12");        
          const apago = document.querySelector("#sky7");
          const enciendo = document.querySelector("#sky6");  
 
          apago.setAttribute("visible",false);
          enciendo.setAttribute("visible",true); 
      })
    }
})
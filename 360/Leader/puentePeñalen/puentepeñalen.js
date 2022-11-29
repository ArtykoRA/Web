
AFRAME.registerComponent("click-listener", {
            init: function() {
              this.el.addEventListener("click", (e) => {           
                  const apago = document.querySelector("#sky1");
                  const enciendo = document.querySelector("#sky2");  
         
                  apago.setAttribute("visible",false);
                  enciendo.setAttribute("visible",true); 
                  console.log("pulsando click-listener");
              })
            }
})

AFRAME.registerComponent("click-listener2", {
            init: function() {
              this.el.addEventListener("click", (e) => {           
                  const apago = document.querySelector("#sky2");
                  const enciendo = document.querySelector("#sky3");  
         
                  apago.setAttribute("visible",false);
                  enciendo.setAttribute("visible",true); 
                  console.log("pulsando click-listener2");
              })
            }
})

AFRAME.registerComponent("click-listener3", {
            init: function() {
              this.el.addEventListener("click", (e) => {           
                  const apago = document.querySelector("#sky2");
                  const enciendo = document.querySelector("#sky1");  
         
                  apago.setAttribute("visible",false);
                  enciendo.setAttribute("visible",true); 
                  console.log("pulsando click-listener3");
              })
            }
})

AFRAME.registerComponent("click-listener4", {
            init: function() {
              this.el.addEventListener("click", (e) => {           
                  const apago = document.querySelector("#sky3");
                  const enciendo = document.querySelector("#sky4");  
         
                  apago.setAttribute("visible",false);
                  enciendo.setAttribute("visible",true); 
                  console.log("pulsando click-listener4");
              })
            }
})
          
AFRAME.registerComponent("click-listener5", {
            init: function() {
              this.el.addEventListener("click", (e) => {           
                  const apago = document.querySelector("#sky3");
                  const enciendo = document.querySelector("#sky2");  
         
                  apago.setAttribute("visible",false);
                  enciendo.setAttribute("visible",true); 
                  console.log("pulsando click-listener5");            
              })
            }
})

AFRAME.registerComponent("click-listener6", {
            init: function() {
              this.el.addEventListener("click", (e) => {           
                  const apago = document.querySelector("#sky4");
                  const enciendo = document.querySelector("#sky5");  
         
                  apago.setAttribute("visible",false);
                  enciendo.setAttribute("visible",true); 
                  console.log("pulsando click-listener6");
              })
            }
})

AFRAME.registerComponent("click-listener7", {
            init: function() {
              this.el.addEventListener("click", (e) => {           
                  const apago = document.querySelector("#sky4");
                  const enciendo = document.querySelector("#sky3");  
         
                  apago.setAttribute("visible",false);
                  enciendo.setAttribute("visible",true); 
                  console.log("pulsando click-listener7");            
              })
            }
})

AFRAME.registerComponent("click-listener8", {
            init: function() {
              this.el.addEventListener("click", (e) => {           
                  const apago = document.querySelector("#sky5");
                  const enciendo = document.querySelector("#sky4");  
         
                  apago.setAttribute("visible",false);
                  enciendo.setAttribute("visible",true); 
                  console.log("pulsando click-listener8");            
              })
            }
})
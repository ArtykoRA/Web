AFRAME.registerComponent("click-listener2", {
    init: function() {
      this.el.addEventListener("click", (e) => { 
          console.log("pulsando click-listener va al 2");          
          let apago = document.querySelector("#sky1");
          let enciendo = document.querySelector("#sky2");  
 
       
          apago.setAttribute("visible",false);
          enciendo.setAttribute("visible",true);         
          
          
          document.getElementById("b2").className = "clickable"; 
          document.getElementById("b2b").className = "clickable";

          document.getElementById("b1").className = "not-clickable"; 
          document.getElementById("b1b").className = "not-clickable";
      })
    }
})
AFRAME.registerComponent("click-listener21", {
    init: function() {
      this.el.addEventListener("click", (e) => { 
          console.log("pulsando click-listener 21");          
          let apago = document.querySelector("#sky2");
          let enciendo = document.querySelector("#sky1");  
 
          apago.setAttribute("visible",false);
          enciendo.setAttribute("visible",true);       
          
          document.getElementById("b1").className = "clickable"; 
          document.getElementById("b1b").className = "clickable";

          document.getElementById("b2").className = "not-clickable"; 
          document.getElementById("b2b").className = "not-clickable";
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
          
          document.getElementById("b3").className = "clickable"; 
          document.getElementById("b3b").className = "clickable";
          
          document.getElementById("b2").className = "not-clickable"; 
          document.getElementById("b2b").className = "not-clickable";
      })
    }
})

AFRAME.registerComponent("click-listener32", {
    init: function() {
      this.el.addEventListener("click", (e) => { 
          console.log("pulsando click-listener 32");          
          let apago = document.querySelector("#sky3");
          let enciendo = document.querySelector("#sky2");  
          
          apago.setAttribute("visible",false);
          enciendo.setAttribute("visible",true);         

          document.getElementById("b2").className = "clickable"; 
          document.getElementById("b2b").className = "clickable";

          document.getElementById("b3").className = "not-clickable"; 
          document.getElementById("b3b").className = "not-clickable";
      })
    }
})

AFRAME.registerComponent("click-listener4", {
    init: function() {
      this.el.addEventListener("click", (e) => { 
          console.log("pulsando click-listener 4");          
          let apago = document.querySelector("#sky3");
          let enciendo = document.querySelector("#sky4");  
      
          apago.setAttribute("visible",false);
          enciendo.setAttribute("visible",true);    
          
          

          document.getElementById("b4").className = "clickable"; 
          document.getElementById("b4b").className = "clickable";

          document.getElementById("b3").className = "not-clickable"; 
          document.getElementById("b3b").className = "not-clickable";

      })
    }
})

AFRAME.registerComponent("click-listener43", {
    init: function() {
      this.el.addEventListener("click", (e) => { 
          console.log("pulsando click-listener 43");          
          let apago = document.querySelector("#sky4");
          let enciendo = document.querySelector("#sky3");  
 
          apago.setAttribute("visible",false);
          enciendo.setAttribute("visible",true);    
          
          document.getElementById("b3").className = "clickable"; 
          document.getElementById("b3b").className = "clickable";

          document.getElementById("b4").className = "not-clickable"; 
          document.getElementById("b4b").className = "not-clickable";

      })
    }
})

AFRAME.registerComponent("click-listener5", {
    init: function() {
      this.el.addEventListener("click", (e) => { 
          console.log("pulsando click-listener 5");          
          let apago = document.querySelector("#sky4");
          let enciendo = document.querySelector("#sky5");  
 
          apago.setAttribute("visible",false);
          enciendo.setAttribute("visible",true);     

          document.getElementById("b5").className = "clickable"; 
          document.getElementById("b5b").className = "clickable";

          document.getElementById("b4").className = "not-clickable"; 
          document.getElementById("b4b").className = "not-clickable";     
      })
    }
})

AFRAME.registerComponent("click-listener54", {
    init: function() {
      this.el.addEventListener("click", (e) => { 
          console.log("pulsando click-listener 54");          
          let apago = document.querySelector("#sky5");
          let enciendo = document.querySelector("#sky4");  
 
          apago.setAttribute("visible",false);
          enciendo.setAttribute("visible",true);    
          
          document.getElementById("b4").className = "clickable"; 
          document.getElementById("b4b").className = "clickable";

          document.getElementById("b5").className = "not-clickable"; 
          document.getElementById("b5b").className = "not-clickable";
      })
    }
})

AFRAME.registerComponent("click-listener6", {
    init: function() {
      this.el.addEventListener("click", (e) => { 
          console.log("pulsando click-listener 6");          
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

AFRAME.registerComponent("click-listener65", {
    init: function() {
      this.el.addEventListener("click", (e) => { 
          console.log("pulsando click-listener 65");          
          let apago = document.querySelector("#sky6");
          let enciendo = document.querySelector("#sky5");  
 
          apago.setAttribute("visible",false);
          enciendo.setAttribute("visible",true);     
          
          document.getElementById("b5").className = "clickable"; 
          document.getElementById("b5b").className = "clickable";

          document.getElementById("b6").className = "not-clickable"; 
          document.getElementById("b6b").className = "not-clickable";
      })
    }
})

AFRAME.registerComponent("click-listener7", {
    init: function() {
      this.el.addEventListener("click", (e) => { 
          console.log("pulsando click-listener 7");          
          let apago = document.querySelector("#sky6");
          let enciendo = document.querySelector("#sky7");  
 
          apago.setAttribute("visible",false);
          enciendo.setAttribute("visible",true);     

          document.getElementById("b7").className = "clickable"; 
          
          document.getElementById("b6").className = "not-clickable"; 
          document.getElementById("b6b").className = "not-clickable";
      })
    }
})

AFRAME.registerComponent("click-listener76", {
    init: function() {
      this.el.addEventListener("click", (e) => { 
          console.log("pulsando click-listener 76");          
          let apago = document.querySelector("#sky7");
          let enciendo = document.querySelector("#sky6");  
 
          apago.setAttribute("visible",false);
          enciendo.setAttribute("visible",true); enciendo.setAttribute("rotation","0  -90  0"); 
          
          document.getElementById("b6").className = "clickable"; 
          document.getElementById("b6b").className = "clickable";
          
          document.getElementById("b7").className = "not-clickable";    
      })
    }
})


//sector del molino

AFRAME.registerComponent("click-listener8", {
    init: function() {
      this.el.addEventListener("click", (e) => { 
          console.log("pulsando click-listener 8");          
          let apago = document.querySelector("#sky1");
          let enciendo = document.querySelector("#sky8");  
               
          apago.setAttribute("visible",false);
          enciendo.setAttribute("visible",true);      
          
          document.getElementById("b8").className = "clickable"; 
          document.getElementById("b88").className = "clickable";
          document.getElementById("b1").className = "not-clickable"; 
          document.getElementById("b11").className = "not-clickable";
      })
    }
})

AFRAME.registerComponent("click-listener81", {
    init: function() {
      this.el.addEventListener("click", (e) => { 
          console.log("pulsando click-listener 81");          
          let apago = document.querySelector("#sky8");
          let enciendo = document.querySelector("#sky1");  
 
          apago.setAttribute("visible",false);
          enciendo.setAttribute("visible",true);    
          
          document.getElementById("b1").className = "clickable"; 
          document.getElementById("b11").className = "clickable";

          document.getElementById("b8").className = "not-clickable"; 
          document.getElementById("b88").className = "not-clickable";
      })
    }
})

AFRAME.registerComponent("click-listener9", {
    init: function() {
      this.el.addEventListener("click", (e) => { 
          console.log("pulsando click-listener 9");          
          let apago = document.querySelector("#sky8");
          let enciendo = document.querySelector("#sky9");  
 
          apago.setAttribute("visible",false);
          enciendo.setAttribute("visible",true);  
          
          document.getElementById("b8").className = "not-clickable"; 
          document.getElementById("b88").className = "not-clickable";

          document.getElementById("b9").className = "clickable"; 
          document.getElementById("b99").className = "clickable";
          document.getElementById("b999").className = "clickable";
      })
    }
})

AFRAME.registerComponent("click-listener98", {
  init: function() {
    this.el.addEventListener("click", (e) => { 
        console.log("pulsando click-listener 98");          
        let apago = document.querySelector("#sky9");
        let enciendo = document.querySelector("#sky8");  

        apago.setAttribute("visible",false);
        enciendo.setAttribute("visible",true);   
        
        document.getElementById("b8").className = "clickable"; 
        document.getElementById("b88").className = "clickable";

        document.getElementById("b9").className = "not-clickable"; 
        document.getElementById("b99").className = "not-clickable";
        document.getElementById("b999").className = "not-clickable";
    })
  }
})

AFRAME.registerComponent("click-listener10", {
  init: function() {
    this.el.addEventListener("click", (e) => { 
        console.log("pulsando click-listener 10");          
        let apago = document.querySelector("#sky9");
        let enciendo = document.querySelector("#sky10");  

        apago.setAttribute("visible",false);
        enciendo.setAttribute("visible",true);   
        
        document.getElementById("b10").className = "clickable"; 
        document.getElementById("b1010").className = "clickable";
        
        document.getElementById("b9").className = "not-clickable"; 
        document.getElementById("b99").className = "not-clickable";
        document.getElementById("b999").className = "not-clickable";
    })
  }
})

AFRAME.registerComponent("click-listener19", {
  init: function() {
    this.el.addEventListener("click", (e) => { 
        console.log("pulsando click-listener 19");          
        let apago = document.querySelector("#sky10");
        let enciendo = document.querySelector("#sky9");  

        apago.setAttribute("visible",false);
        enciendo.setAttribute("visible",true); 
        
        document.getElementById("b10").className = "not-clickable"; 
        document.getElementById("b1010").className = "not-clickable";

        document.getElementById("b9").className = "clickable"; 
        document.getElementById("b99").className = "clickable";
        document.getElementById("b999").className = "clickable";

    })
  }
})

AFRAME.registerComponent("click-listener11", {
  init: function() {
    this.el.addEventListener("click", (e) => { 
        console.log("pulsando click-listener 11");          
        let apago = document.querySelector("#sky10");
        let apago2 = document.querySelector("#sky9");
        let enciendo = document.querySelector("#sky11");  
        

        apago2.setAttribute("visible",false);
        apago.setAttribute("visible",false);
        enciendo.setAttribute("visible",true);  
        
        document.getElementById("b11").className = "clickable"; 
        document.getElementById("b1111").className = "clickable";

        document.getElementById("b9").className = "not-clickable"; 
        document.getElementById("b99").className = "not-clickable";
        document.getElementById("b999").className = "not-clickable";

    })
  }
})

AFRAME.registerComponent("click-listener1110", {
  init: function() {
    this.el.addEventListener("click", (e) => { 
        console.log("pulsando click-listener 1110");          
        let apago = document.querySelector("#sky11");
        let enciendo = document.querySelector("#sky10");  
        

        apago.setAttribute("visible",false);
        enciendo.setAttribute("visible",true);     
        
        document.getElementById("b10").className = "clickable"; 
        document.getElementById("b1010").className = "clickable";
        
        document.getElementById("b11").className = "not-clickable"; 
        document.getElementById("b1111").className = "not-clickable";
    })
  }
})

AFRAME.registerComponent("click-listener118", {
  init: function() {
    this.el.addEventListener("click", (e) => { 
        console.log("pulsando click-listener 118");          
        let apago = document.querySelector("#sky11");
        let enciendo = document.querySelector("#sky8");  
        
        apago.setAttribute("visible",false);
        enciendo.setAttribute("visible",true);   
        
        document.getElementById("b8").className = "clickable"; 
        document.getElementById("b88").className = "clickable";

        document.getElementById("b11").className = "not-clickable"; 
        document.getElementById("b1111").className = "not-clickable";
    })
  }
})
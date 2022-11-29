AFRAME.registerComponent("click-listener2", {
    init: function() {
      this.el.addEventListener("click", (e) => { 
          console.log("pulsando click-listener  2");    
                
          document.getElementById("sky1").setAttribute("visible",false);
          document.getElementById("sky3").setAttribute("visible",false);  
          document.getElementById("sky2").setAttribute("visible",true);      
                    
          document.getElementById("b2").className = "clickable"; 
          document.getElementById("b2b").className = "clickable";

          document.getElementById("b1").className = "not-clickable"; 
          document.getElementById("b1b").className = "not-clickable";
          document.getElementById("b3").className = "not-clickable"; 
          document.getElementById("b3b").className = "not-clickable";
          document.getElementById("b3bb").className = "not-clickable";
      })
    }
})

AFRAME.registerComponent("click-listener21", {
    init: function() {
      this.el.addEventListener("click", (e) => { 
          console.log("pulsando click-listener  21");          
    
          document.getElementById("sky2").setAttribute("visible",false);
          document.getElementById("sky3").setAttribute("visible",false);
          document.getElementById("sky4").setAttribute("visible",false);
          document.getElementById("sky1").setAttribute("visible",true);   
                   
          document.getElementById("b1").className = "clickable"; 
          document.getElementById("b1b").className = "clickable";

          document.getElementById("b2").className = "not-clickable"; 
          document.getElementById("b2b").className = "not-clickable";

          document.getElementById("b4").className = "not-clickable"; 
          document.getElementById("b4b").className = "not-clickable";
          document.getElementById("b4").className = "not-clickable"; 
          

      })
    }
})

AFRAME.registerComponent("click-listener3", {
    init: function() {
      this.el.addEventListener("click", (e) => { 
          console.log("pulsando click-listener  3");    

          document.getElementById("sky2").setAttribute("visible",false);
          document.getElementById("sky4").setAttribute("visible",false);
          document.getElementById("sky3").setAttribute("visible",true);
                   
          document.getElementById("b3").className = "clickable"; 
          document.getElementById("b3b").className = "clickable";
          document.getElementById("b3bb").className = "clickable";

          document.getElementById("b2").className = "not-clickable"; 
          document.getElementById("b2b").className = "not-clickable";

          document.getElementById("b4").className = "not-clickable"; 
        document.getElementById("b4b").className = "not-clickable";
        document.getElementById("b4bb").className = "not-clickable";
      })
    }
})

AFRAME.registerComponent("click-listener4", {
  init: function() {
    this.el.addEventListener("click", (e) => { 
        console.log("pulsando click-listener  4");    

        document.getElementById("sky1").setAttribute("visible",false);
        document.getElementById("sky3").setAttribute("visible",false);
        document.getElementById("sky5").setAttribute("visible",false);
        document.getElementById("sky4").setAttribute("visible",true);

        document.getElementById("b4").className = "clickable"; 
        document.getElementById("b4b").className = "clickable";
        document.getElementById("b4bb").className = "clickable";
                 
        document.getElementById("b3").className = "not-clickable"; 
        document.getElementById("b3b").className = "not-clickable";
        document.getElementById("b3bb").className = "not-clickable";

        document.getElementById("b1").className = "not-clickable"; 
        document.getElementById("b1b").className = "not-clickable";

        document.getElementById("b5").className = "not-clickable"; 
        document.getElementById("b5b").className = "not-clickable";
    })
  }
})

AFRAME.registerComponent("click-listener5", {
  init: function() {
    this.el.addEventListener("click", (e) => { 
        console.log("pulsando click-listener  5");    

        document.getElementById("sky4").setAttribute("visible",false);
        document.getElementById("sky5").setAttribute("visible",true);

        document.getElementById("b4").className = "not-clickable"; 
        document.getElementById("b4b").className = "not-clickable";
        document.getElementById("b4bb").className = "not-clickable";

        document.getElementById("b5").className = "clickable"; 
        document.getElementById("b5b").className = "clickable";
    })
  }
})

AFRAME.registerComponent("click-listener6", {
  init: function() {
    this.el.addEventListener("click", (e) => { 
        console.log("pulsando click-listener  6");    

        document.getElementById("sky5").setAttribute("visible",false);
        document.getElementById("sky6").setAttribute("visible",true);

        document.getElementById("b5").className = "not-clickable"; 
        document.getElementById("b5b").className = "not-clickable";
      
        document.getElementById("b6").className = "clickable"; 
        document.getElementById("b6b").className = "clickable";
    })
  }
})

AFRAME.registerComponent("click-listener61", {
  init: function() {
    this.el.addEventListener("click", (e) => { 
        console.log("pulsando click-listener  61");    

        document.getElementById("sky6").setAttribute("visible",false);
        document.getElementById("sky5").setAttribute("visible",true);

        document.getElementById("b6").className = "not-clickable"; 
        document.getElementById("b6b").className = "not-clickable";
      
        document.getElementById("b5").className = "clickable"; 
        document.getElementById("b5b").className = "clickable";
    })
  }
})

AFRAME.registerComponent("click-listener7", {
  init: function() {
    this.el.addEventListener("click", (e) => { 
        console.log("pulsando click-listener  7");    

        document.getElementById("sky6").setAttribute("visible",false);
        document.getElementById("sky7").setAttribute("visible",true);

        document.getElementById("b6").className = "not-clickable"; 
        document.getElementById("b6b").className = "not-clickable";
      
        document.getElementById("b7").className = "clickable"; 
        document.getElementById("b7b").className = "clickable";
    })
  }
})

AFRAME.registerComponent("click-listener71", {
  init: function() {
    this.el.addEventListener("click", (e) => { 
        console.log("pulsando click-listener  7");    

        document.getElementById("sky7").setAttribute("visible",false);
        document.getElementById("sky6").setAttribute("visible",true);

        document.getElementById("b7").className = "not-clickable"; 
        document.getElementById("b7b").className = "not-clickable";
      
        document.getElementById("b6").className = "clickable"; 
        document.getElementById("b6b").className = "clickable";
    })
  }
})

AFRAME.registerComponent("click-listener8", {
  init: function() {
    this.el.addEventListener("click", (e) => { 
        console.log("pulsando click-listener  7");    

        document.getElementById("sky7").setAttribute("visible",false);
        document.getElementById("sky8").setAttribute("visible",true);

        document.getElementById("b7").className = "not-clickable"; 
        document.getElementById("b7b").className = "not-clickable";
      
        document.getElementById("b8").className = "clickable"; 
        document.getElementById("b8b").className = "clickable";
    })
  }
})

AFRAME.registerComponent("click-listener81", {
  init: function() {
    this.el.addEventListener("click", (e) => { 
        console.log("pulsando click-listener  81");    

        document.getElementById("sky8").setAttribute("visible",false);
        document.getElementById("sky7").setAttribute("visible",true);

        document.getElementById("b8").className = "not-clickable"; 
        document.getElementById("b8b").className = "not-clickable";
      
        document.getElementById("b7").className = "clickable"; 
        document.getElementById("b7b").className = "clickable";
    })
  }
})

AFRAME.registerComponent("click-listener9", {
  init: function() {
    this.el.addEventListener("click", (e) => { 
        console.log("pulsando click-listener  9");    

        document.getElementById("sky8").setAttribute("visible",false);
        document.getElementById("sky3").setAttribute("visible",true);

        document.getElementById("b8").className = "not-clickable"; 
        document.getElementById("b8b").className = "not-clickable";
      
        document.getElementById("b3").className = "clickable"; 
        document.getElementById("b3b").className = "clickable";
        document.getElementById("b3bb").className = "clickable";
    })
  }
})
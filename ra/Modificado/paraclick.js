//const profileButton = document.querySelector("#profile-button");

//let clicador = document.getElementById("#img1");
//const elotro = document.querySelector("#imgLogo");

//clicador.onclick = function () {
   // location.href = "alpetea.html";}


//elotro.onclick = function () {
        //location.href = "alpetea.html";}



        const showInfo = () => {
            let y = 0;
            const profileButton = document.querySelector("#img1");
            const webButton = document.querySelector("#web-button");
            const emailButton = document.querySelector("#email-button");
            const locationButton = document.querySelector("#location-button");
            const text = document.querySelector("#text");
    
            profileButton.setAttribute("visible", true);
            setTimeout(() => {
              webButton.setAttribute("visible", true);
            }, 300);
            setTimeout(() => {
              emailButton.setAttribute("visible", true);
            }, 600);
            setTimeout(() => {
              locationButton.setAttribute("visible", true);
            }, 900);
    
            let currentTab = '';
            webButton.addEventListener('click', function (evt) {
              text.setAttribute("value", "https://softmind.tech");
              currentTab = 'web';
            });
            emailButton.addEventListener('click', function (evt) {
              text.setAttribute("value", "hello@softmind.tech");
              currentTab = 'email';
            });
            profileButton.addEventListener('click', function (evt) {
              text.setAttribute("value", "AR, alpetea.html");
              currentTab = 'profile';
            });
            locationButton.addEventListener('click', function (evt) {
              console.log("loc");
              text.setAttribute("value", "Vancouver, Canada | Hong Kong");
              currentTab = 'location';
            });
    
            text.addEventListener('click', function (evt) {
              if (currentTab === 'web') {
                window.location.href="https://softmind.tech";
              }
            });
          }
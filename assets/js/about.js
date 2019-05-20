/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
var partJson = {
	/*
	 Your config JSON goes here.
	 ...
	 
	 */
    
        "particles": {
          "number": {
            "value": 80,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 2,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 80,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 300,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 2
          },
          "move": {
            "enable": true,
            "speed": 12,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": false,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 800,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 800,
              "size": 80,
              "duration": 2,
              "opacity": 0.8,
              "speed": 3
            },
            "repulse": {
              "distance": 400,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      
};
var jsonUri = "data:text/plain;base64,"+window.btoa(JSON.stringify(partJson));


particlesJS.load('particles-js', jsonUri, function() {
    console.log('callback - particles.js config loaded');
  });


var about = document.querySelector("#about");  
var hobbies = document.querySelector("#hobbies"); 
var about_me_text = document.querySelector(".about_me");
var my_hobbies_text = document.querySelector(".my_hobbies"); 
my_hobbies_text.classList.add("display_none");
about_me_text.classList.add("display_none");

about.addEventListener("click",function(){
      about_me_text.classList.remove("display_none");
      my_hobbies_text.classList.add("display_none");
})

hobbies.addEventListener("click",function(){
    about_me_text.classList.add("display_none");
    my_hobbies_text.classList.remove("display_none");
})

var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}



// mind-map click full-screen
function openContentOne() {
    document.getElementById("mindmap-content-1").style.width = "100%";
  }

  function openContentTwo() {
    document.getElementById("mindmap-content-2").style.width = "100%";

  }

  function openContentThree() {
    document.getElementById("mindmap-content-3").style.width = "100%";

  } 
  

function closeContentOne() {
    document.getElementById("mindmap-content-1").style.width = "0%";
  }

  function closeContentTwo() {
    document.getElementById("mindmap-content-2").style.width = "0%";
  }

  function closeContentThree() {
    document.getElementById("mindmap-content-3").style.width = "0%";
  }

  // music play/pause
  const music = document.getElementById("myMusic");
  const playSvg = document.querySelector(".play-svg");
  const pauseSvg = document.querySelector(".pause-svg");
 

  function turnOnMusic(){
    music.play();
    playSvg.classList.add('d-none');
    pauseSvg.style.visibility = "visible";
  }

  function turnOffMusic(){
    music.pause();
    playSvg.classList.remove('d-none');
    pauseSvg.style.visibility = "hidden";
    
  }




  // countdown

  var countDownDate = new Date("july 5, 2022 15:37:25").getTime();


var x = setInterval(function() {

  
  var now = new Date().getTime();
    
  
  var distance = countDownDate - now;
    
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);
window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0)
});
function myFunction(){
    var x = document.getElementById("src_section");

       if(x.style.display == "block")
       {
           x.style.display = "none";
       }
       else{
           x.style.display = "block"
       }
};

function openCity(evt, abouttittle) {
  var i, aboutTxt, aboutlink;
  aboutTxt = document.getElementsByClassName("aboutTxt");
  for (i = 0; i < aboutTxt.length; i++) {
    aboutTxt[i].style.display = "none";
  }
  aboutlink = document.getElementsByClassName("aboutlink");
  for (i = 0; i < aboutlink.length; i++) {
    aboutlink[i].className = aboutlink[i].className.replace(" opened", "");
  }
  document.getElementById(abouttittle).style.display = "block";
  evt.currentTarget.className += " opened";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("autoOpen").click();





filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("rwList");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("rwBtn_container");
var btns = btnContainer.getElementsByClassName("rwBtn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("openito");
    current[0].className = current[0].className.replace(" openito", "");
    this.className += " openito";
  });
};

function aboutsrvc(evt, workName) {
  var i, serviceTxt, serviceLink;
  serviceTxt = document.getElementsByClassName("serviceTxt");
  for (i = 0; i < serviceTxt.length; i++) {
    serviceTxt[i].style.display = "none";
  }
  serviceLink = document.getElementsByClassName("serviceLink");
  for (i = 0; i < serviceLink.length; i++) {
    serviceLink[i].className = serviceLink[i].className.replace("serviceOpen", "");
  }
  document.getElementById(workName).style.display = "block";
  evt.currentTarget.className += "serviceOpen";
}

// Get the element with id="refresh_open" and click on it
document.getElementById("refresh_open").click();

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:0,
  dots:false,
  nav:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
});

var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.nextBTN').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.prevBTN').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
});
owl.owlCarousel({
  dotsContainer: '#carousel-custom-dots'
});
$('.owl-dot').click(function () {
  owl.trigger('to.owl.carousel', [$(this).index(), 300]);
});

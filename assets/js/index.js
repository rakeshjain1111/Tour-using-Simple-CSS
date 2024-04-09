// let counts = setInterval(updated);
// let upto = 0;
// function updated() {
//     let count = document.getElementById("trano");
//     count.innerHTML = ++upto;
//     if (upto === 9313) {
//         clearInterval(counts);
//     }
// }

var typed=new Typed("#retype",{
  strings:["New Zealand.","Maui.","Paris.", "San Francisco."],
  typeSpeed:200,
  backSpeed:150,
  loop:true
});

setInterval(function(){
  if(document.getElementsByClassName("slide")[0].classList.contains("active")){
      document.getElementsByClassName("slide")[1].classList.add("active");
      document.getElementsByClassName("slide")[0].classList.remove("active");
  }
 else if(document.getElementsByClassName("slide")[1].classList.contains("active")){
      document.getElementsByClassName("slide")[2].classList.add("active");
      document.getElementsByClassName("slide")[1].classList.remove("active");
  }
  else if(document.getElementsByClassName("slide")[2].classList.contains("active")){
      document.getElementsByClassName("slide")[3].classList.add("active");
      document.getElementsByClassName("slide")[2].classList.remove("active");
  }
  else if(document.getElementsByClassName("slide")[3].classList.contains("active")){
      document.getElementsByClassName("slide")[4].classList.add("active");
      document.getElementsByClassName("slide")[3].classList.remove("active");
  }
  else if(document.getElementsByClassName("slide")[4].classList.contains("active")){
      document.getElementsByClassName("slide")[0].classList.add("active");
      document.getElementsByClassName("slide")[4].classList.remove("active");
  }
  
},6000);


const counters = document.querySelectorAll('.count');
const speed = 100;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = parseInt(counter.getAttribute('data-target'));
    console.log(target);
    const count = parseInt(counter.innerText);
    console.log(count);
    const increment = Math.trunc(target / speed);
    console.log(increment);

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});



$(document).ready(function(){
  $('.owl-dest').owlCarousel({
    loop:true,
    autoplay:true,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
  })
});


$(document).ready(function(){
  $('.owl-test').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      dots:true,
      items:3,
      autoplay:true,
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
  })
});



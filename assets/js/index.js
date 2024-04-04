// let counts = setInterval(updated);
// let upto = 0;
// function updated() {
//     let count = document.getElementById("trano");
//     count.innerHTML = ++upto;
//     if (upto === 9313) {
//         clearInterval(counts);
//     }
// }


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

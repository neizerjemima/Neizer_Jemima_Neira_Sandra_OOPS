
export function scroll () {
    let clicked = document.querySelectorAll('.emotionimg');
    function view() {
      gsap.to(window, { scrollTo:".bobaCon", duration:.3 });
    } 
    clicked.forEach(item => {
      item.addEventListener('click', view);
    });

    let start = document.querySelector('#start');
    function review() {
      gsap.to(window, { scrollTo:".all", duration:.3 });
    } 
    start.addEventListener('click', review);
}


// const count = 5;
// const tl = gsap.timeline({ onUpdate: updateCount });
// tl.to({count: 0}, {
//   count: 1,
//   duration: count,
//   onUpdate: function() {
//     document.getElementById(".bobaCon").innerText = Math.ceil(this.targets()[0].count);
//   },
//   onComplete: function() {
//     alert("Countdown completed!");
//   }
// });

    
let typed = new Typed(".typing", {
  strings: ["","Web developer", "Frondend developer"],
  typeSpeed: 100,
  BackSpeed:60,
  loop: true,
});


let header = document.getElementById("nav");
let leftmanu = header.getElementsByClassName("left-manu");
for (let i = 0; i < leftmanu.length; i++) {
  leftmanu[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
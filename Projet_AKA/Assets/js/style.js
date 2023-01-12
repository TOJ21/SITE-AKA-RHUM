//diaporama
const diapo = document.querySelectorAll(".images");
const nextimage = 1000;
// counter
let image = 0;
diapo[image].style.display="block";
setInterval(slidesimage,nextimage);
function slidesimage(){
    diapo[image].style.display="none";
    image = (image + 1) % diapo.length;
    diapo[image].style.display="block";
}

//const arr = ["love", "YOU" ];//
//arr.slice (1, 2);//

//const myString = " love YOU "//
//console.log( myString.length)//

$(".hover").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );
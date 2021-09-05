function mouseHover(x){
x.style.transition = "all 300ms ease-out";
x.style.paddingBottom = "4rem";

document.getElementById('learnMore').style.transition = "all 500ms ease";
document.getElementById('learnMore').style.visibility = "visible";

}
function mouseUnHover(x){
x.style.transition = "all 500ms ease-out";
x.style.paddingBottom = "2rem";
document.getElementById('learnMore').style.visibility = "hidden";
document.getElementById('learnMore').style.transition = "all 500ms ease";

}
function likeBtn(x){
x.style.transition = "all 500ms ease-out";
x.style.color = "white";
x.style.backgroundColor = "red";
x.style.padding = "7px";
x.style.width = "25px";
x.style.height = "25px";
}
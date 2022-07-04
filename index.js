alert("Welcome to My Drum Kit");
document.querySelector("button").addEventListener("click",handleclick);
function handleclick()
{
    // alert("You Clicked ME");
}
var buttonarray=document.querySelectorAll("button").length;
console.log(buttonarray);
for(var i=0;i<buttonarray;i++){
    document.querySelectorAll("button")[i].addEventListener("click",handleclick);
function handleclick()    {
    // alert("You Clicked ME");
    console.log(this.innerHTML);
    }}
   
//    To play sound on a website
    // var audio=new Audio("sounds/tom-1.mp3");
    // audio.play();

var buttonarray=document.querySelectorAll("button").length;
console.log(buttonarray);
for(var i=0;i<buttonarray;i++){
document.querySelectorAll("button")[i].addEventListener("click",handleclick);
function handleclick()    {
    var buttonValue=this.innerHTML;
    makeSound(buttonValue);
    // switch (buttonValue) {
    //     case 'w':
    // var audio=new Audio("sounds/crash.mp3");
    // audio.play();
         
    //         break;
    //         case 'a':
    // var audio=new Audio("sounds/kick-bass.mp3");
    // audio.play();
         
    //         break;
    //         case 's':
    // var audio=new Audio("sounds/snare.mp3");
    // audio.play();
         
    //         break;
    //         case 'd':
    // var audio=new Audio("sounds/tom-1.mp3");
    // audio.play();
         
    //         break;
    //         case 'j':
    // var audio=new Audio("sounds/tom-2.mp3");
    // audio.play();
         
    //         break;
    //         case 'k':
    // var audio=new Audio("sounds/tom-3.mp3");
    // audio.play();
         
    //         break;
    //         case 'l':
    // var audio=new Audio("sounds/tom-4.mp3");
    // audio.play();
         
    //         break;
            
    
    //     default:
    //         break;
    // }
// console.log(this.style.color="white");    
}}
// On adding keypress event on whole document will include keyboard events also
document.addEventListener("keypress", function(event){
console.log(event);
makeSound(event.key)
    // alert("Key was pressed");
})  

function makeSound(key)
{
    switch (key) {
        case 'w':
    var audio=new Audio("sounds/crash.mp3");
    audio.play();
         
            break;
            case 'a':
    var audio=new Audio("sounds/kick-bass.mp3");
    audio.play();
         
            break;
            case 's':
    var audio=new Audio("sounds/snare.mp3");
    audio.play();
         
            break;
            case 'd':
    var audio=new Audio("sounds/tom-1.mp3");
    audio.play();
         
            break;
            case 'j':
    var audio=new Audio("sounds/tom-2.mp3");
    audio.play();
         
            break;
            case 'k':
    var audio=new Audio("sounds/tom-3.mp3");
    audio.play();
         
            break;
            case 'l':
    var audio=new Audio("sounds/tom-4.mp3");
    audio.play();
         
            break;
            
    
        default:
            break;
    }
}

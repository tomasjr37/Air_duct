
const airduct = document.getElementById('head') ; 
const clean = document.getElementById('clean') ; 
const myanimation =document.getElementById('myanimation');


const colors = ["#40E0D0", "#0000CD", "#20B2AA", "#6495ED", "black"];




function changeColor() {
    // Generate a random index to pick a color from the array
    const randomIndex = Math.floor(Math.random() * colors.length);

    // Get the color at the random index
    const randomColor = colors[randomIndex];
    const randomclean = colors[randomIndex - 1 ];
    // Set the text color to the random color
    airduct.style.color = randomColor;
    clean.style.color = randomclean ; 
    airduct.style.transform = scale(1.6);
}

// Call the changeColor function every one second
setInterval(changeColor, 500);



//delay

/*
function animation(){

 for(let i=0 ;i<=2 ;i++) {
  myanimation.src = `images/Capture${i}.jpg` ;
 }  



}

setInterval(animation , 500); */





   
function changeimage(){

   myanimation.src = 'images/Capture2.jpg' ;

}
function pureimage(){

    myanimation.src = 'images/Capture1.jpg' ;
 
 }

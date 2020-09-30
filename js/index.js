// Here you can access the colors variable
// have fun
var Btn = document.getElementsByTagName('button');
var PaintMe=document.getElementById('pallete');
var MyH1 =document.getElementsByTagName('h1');
var UserInput =document.getElementById('color');
let IntervalReturn;

// ------------------------------ function to change color and input value ------------
const ElementsColor =() =>{
    let RandNum =randomIndex();
    Btn[0].style.background=colors[RandNum];
    PaintMe.style.background=colors[RandNum];
    MyH1[0].style.background=colors[RandNum];
    UserInput.value=colors[RandNum];
    console.log(RandNum);
};

// ------------------------------ function to get random index ---------------------------
var randomIndex = () =>{
    return Math.floor(Math.random() * 280);
};

// ------------------------------- function to add event listener -------------------------
var Start =() =>{
        Btn[0].addEventListener('mouseenter', () =>{
            IntervalReturn=setInterval(ElementsColor, 500);
})
};

//-------------------------------- function to change color as user needs -----------------
var UserInputFunc =()=>{
    PaintMe.style.background=UserInput.value;
}
//--------------------------- function to stop after leave mouse over button ---------------
var Stop =() =>{
    Btn[0].addEventListener('mouseleave', () =>{
        clearInterval(IntervalReturn);
    });
};


//---------------------------------------------------------------------------------------------

console.log(colors.length);
Start();
Stop();
UserInputFunc();
//change();*/
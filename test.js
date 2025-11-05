const box1=document.getElementById("box-1");
function click1(){
    box1.style.backgroundColor="red";
}

const box2 = document.getElementById("box-2");
box2.addEventListener("click", () => {
    box2.style.backgroundColor = "blue";
});
const box3=document.getElementById("box-3");
box3.addEventListener("click",()=>{
    box3.style.backgroundColor="green";
});
const box4=document.getElementById("box-4");
box4.addEventListener("click",() => {
    box4.style.backgroundColor="yellow";
});

const button = document.getElementById("btn");
button.addEventListener("click",() =>{
    const greetingText = document.getElementById("greeting");
    const input = document.getElementById("nameInput").value;
    if(input==""){
        greetingText.innerText="Hello";
    }else{
        greetingText.innerText = "Hello ," + input;
    }
});



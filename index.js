let randomnum1=Math.floor(Math.random()*6)+1;
let randomdiceimg1="dice"+ randomnum1 +".png";
let randomdiceimgsour1="images/"+ randomdiceimg1;
let image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomdiceimgsour1);
let randomnum2=Math.floor(Math.random()*6)+1;
let randomdiceimg2="dice" + randomnum2 + ".png";
let randomdiceimgsour2="images/"+ randomdiceimg2;
let image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomdiceimgsour2);

if(randomnum1>randomnum2){
    document.querySelector("h1").innerHTML="🚩 Player 1 Win";
}
else if(randomnum2>randomnum1){
    document.querySelector("h1").innerHTML="🚩Player 2 Win";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}

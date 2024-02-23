
const button  = document.getElementById("answer");
let text = document.getElementById("ask");
let same =  document.getElementById("incenter");

 
function ASK() {
    var answers = ['It is certain','Reply hazy','try again','Don’t count on it',    'It is decidedly so','Ask again later","My reply is no',
    'Without a doubt','My sources say no',
    'Yes definitely','Cannot predict now','Outlook not so good',
    'You may rely on it','Concentrate and ask again',
    'Very doubtfu','As I see it',
    'Most likely','Outlook good','Yes','Signs point to yes'];

    var image = document.getElementById("bals");
    image.style.animation = "shake 0.5s";
    setTimeout(function() {
        image.style.animation = ""; 
    } , 500);

    if(text.value.trim() !== ""){
        var wrongText= document.getElementById("wrongtexts");
        sametext = answers[Math.floor(Math.random() * answers.length)];
        same.style.display ="block";
        same.innerHTML = sametext;
        image.src="obals.jpg" ;
        wrongText.style.display ="none";

       

    }
    else{
        var wrongText= document.getElementById("wrongtexts");
        wrongText.innerHTML = "Zadaj otazku";
        wrongText.style.display="block";
        same.style.display ="none";
        image.src="ball.jpg"
    }
}


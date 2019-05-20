function checkTheForm() {
    var numOfGuest, textGuest;
    var phone, text, textForEmail;
    var x = document.getElementById("inputMail").value;
    var atposition = x.indexOf("@");
    var dotposition = x.lastIndexOf(".");
    var prePhone = document.getElementById("inputPre").value;

    var fullNameCheck = document.getElementById("FullName").value;
    if (fullNameCheck.length == 0 ){
        document.getElementById("demoFullName").innerHTML = "!אנא הכנס אותיות באנגלית או בעברית בלבד";

    }

    /*mail*/
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
        textForEmail = "!כתובת אימייל לא חוקית";

    } else {
        textForEmail = "";
    }
    document.getElementById("eemail").innerHTML = textForEmail;


    numOfGuest = document.getElementById("guests").value;
    phone = document.getElementById("inputZip").value;

    //Guests
    if (numOfGuest <= 0) {
        textGuest = "!מספר אורחים שגוי"
    } else {
        textGuest = ""
    }
    document.getElementById("demoGuest").innerHTML = textGuest;

    //Phone
    if (isNaN(phone) || phone.length < 7 || phone.length > 7) {
        text = "!מספר טלפון שגוי";
    } else {
        text = ""
    }
    document.getElementById("demoPhone").innerHTML = text;

    //bus
    var textOfTheBus = "";

    var BusBus = document.getElementById("road").value;
    if(BusBus == ""){
        textOfTheBus = "!אנא בחר דרך הגעה";
    }
    else {
        textOfTheBus = "";
    }
    document.getElementById("demoBuss").innerHTML = textOfTheBus;



    //prePhone inputPre

    var textOfPrePhone = "";

    var prePhone = document.getElementById("inputPre").value;
    if(prePhone == ""){
        textOfPrePhone = "!אנא בחר קידומת";
    }
    else {
        textOfPrePhone = "";
    }
    document.getElementById("demoFirst").innerHTML = textOfPrePhone;

}



var counter = 0;

function nextPhoto() {
    var srcArray = ["Pictures/picture1.jpg", "Pictures/picture2.jpg", "Pictures/picture3.jpg"];
    counter++;

    if (counter == 3) {
        counter = 0;
    }

    document.getElementById("currentImage").src = srcArray[counter];

}

function prevPhoto() {

    var srcArray = ["Pictures/picture1.jpg", "Pictures/picture2.jpg", "Pictures/picture3.jpg"];

    counter--;
    if (counter == -1) {
        counter = 2;
    }

    document.getElementById("currentImage").src = srcArray[counter];

}

var countBye = 0;

function bye() {
    if (countBye == 0) {
        alert("תודה שהשתתפת!")
        countBye++;
    }

}

function over() {
    document.getElementById("details").style.fontSize = "20px";
}

function out() {
    document.getElementById("details").style.fontSize = "15px";
}




/*Modal*/

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("conus");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


myTdTable = document.getElementsByTagName("td");
myThTable = document.getElementsByTagName("th");
for(let i=0; i<myThTable.length; i++){

    myThTable[i].addEventListener("mouseover", function () {
        myThTable[i].style.background = "#fcffe8";
    });
    myThTable[i].addEventListener("mouseout", function () {
        myThTable[i].style.background = "#FBFFFF";
    });

}
for(let i=0; i<myTdTable.length; i++){

    myTdTable[i].addEventListener("mouseover", function () {
        myTdTable[i].style.background = "#fcffe8";
    });
    myTdTable[i].addEventListener("mouseout", function () {
        myTdTable[i].style.background = "#FBFFFF";

    });

}


document.getElementById("info").onkeyup = function () {
    document.getElementById("left").innerHTML = (200 - this.value.length) + " :מספר תווים שנותרו "
};

var textForTheName="";
function OnlyLetters(inputL)
{

    var letters = /^[א-תA-Za-z ]+$/;
    if(inputL.value.match(letters))
    {
        textForTheName="";
        document.getElementById("demoFullName").innerHTML = textForTheName;
        return true;

    }
    else
    {
        textForTheName="!אנא הכנס אותיות באנגלית או בעברית בלבד";
        document.getElementById("demoFullName").innerHTML = textForTheName;
        return false;
    }
}










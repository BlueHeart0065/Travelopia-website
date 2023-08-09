var TravelDiv = document.getElementsByClassName("To")[3];
var DD = document.getElementById("TravellersandClassDropdown");
TravelDiv.onclick = () => {
    if (DD.style.display == "flex")
    {
        DD.style.display = "none";
    }
    else 
    {
        DD.style.display = "flex";
    }
}

var cancel = document.querySelectorAll(".Cancel p")[0];
cancel.onclick = () => {
    window.alert(canc);
}


const Hamburger = document.getElementById("Hamburger");
const HideSideBar = document.getElementById("HideSideBar");
const SideBar = document.getElementsByClassName("SideBar")[0];

Hamburger.onclick = function () {
    SideBar.style.width = "25vw";
    SideBar.style.right = "0vw";
}

HideSideBar.onclick = function () {
    // SideBar.style.right = "-27vw";
    SideBar.style.width = "0vw";

}

document.addEventListener('DOMContentLoaded', function () {
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');

    if (username != "" || email != "") {
        document.getElementsByClassName("Profile-name")[0].innerHTML = username;
        document.getElementsByClassName("Profile-email")[0].innerHTML = email;
    }
});

const LogOut = document.getElementById("Log-out");

LogOut.onclick = function () {
    window.location.href = 'index.html';
}


function ChangeTheme() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}

const Theme = document.getElementsByClassName("switch-container")[0];
Theme.addEventListener('change', ChangeTheme);

function toggleDropdown() {
    var dropdownMenu = document.getElementById('Dropdown-menu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}

function toggleDropdownForTo() {
    var dropdownMenu = document.getElementById('Dropdown-menu-to');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}

function selectLocation(cityname, airportname) {
    var startCity = document.querySelector('#From .Start-city');
    var airport = document.querySelector('#From .Airport');
    
    startCity.textContent = cityname;
    airport.textContent = airportname;
    // Hide the dropdown menu after selecting a city
    // var dropdownMenu = document.getElementById('Dropdown-menu');
    // dropdownMenu.style.display = 'none';
}

function selectLocationForTo(cityname, airportname) {
    var endCity = document.querySelector('#To .Start-city');
    var endairport = document.querySelector('#To .Airport');
    endCity.textContent = cityname;
    endairport.textContent = airportname;
    // Hide the dropdown menu after selecting a city
    // const dropdownMenuto = document.getElementById('Dropdown-menu-to');
    // dropdownMenuto.style.display = 'none';
}

function PassengersNumber(){
    var num1 = document.getElementById("number1");
    var num2 = document.getElementById("number2");
    var num3 = document.getElementById("number3");
    var box = document.getElementById("TravellersandClassDropdown");
    
    num1Val = parseInt(num1.innerText,10);
    num2Val = parseInt(num2.innerText,10);
    num3Val = parseInt(num3.innerText,10);
    
    var total = num1Val + num2Val + num3Val;
    
    var totalVal = document.getElementById("Total");
    totalVal.innerText = total;
    // box.style.height = "0vw";
    document.getElementById("TravellersandClassDropdown").style.display = "none";

}


var dropdownMenu = document.getElementById('TravellersandClassDropdown');
var done = document.getElementById("Done");
function toggleDropdownForClass() {
    if(dropdownMenu.style.display != "flex")
    {
        dropdownMenu.style.display = "flex";
    }
    else{
        dropdownMenu.style.display = "none";
    }
}

// const TravelDropdown = document.getElementById("TravellersandClassDropdown");
// const doneButton = document.getElementById("Done");

// TravelDiv.onclick = function(){
//     if(TravelDropdown.style.height != "fit-content"){
//         TravelDropdown.style.height = "fit-content";
//     }
// }

// doneButton.onclick = function(){
//     TravelDropdown.style.height = "0vw";
// }

function subtract(ID){
    var number = document.getElementById(ID);
    var numberValue = parseInt(number.innerText,10);
    if(numberValue > 0){
        numberValue -= 1;
    }
    number.innerText = numberValue;
}

function add(ID){
    var number = document.getElementById(ID);
    var numberValue = parseInt(number.innerText,10);
    // console.log(numberValue);
    numberValue += 1;
    number.innerText = numberValue;
}



function selectClass(ID){
    var Class = document.getElementById(ID);
    if(Class.style.borderColor != "rgb(80, 155, 254)")
    {
        Class.style.border = "2px solid rgb(80, 155, 254)";
        Class.style.color = "rgb(80, 155, 254)";
        var selectedClass = document.getElementById("Selected-class-type");
        // var selectedClassVal = Class.val;
        selectedClass.innerHTML = "Class : " + Class.innerText ;
    }
    else{
        Class.style.border = "1px solid rgb(182, 182, 182)";
        Class.style.color = "black";
    }
    
}

function deselectClass(ID){
    var Class = document.getElementById(ID);
    Class.style.border = "1px solid rgb(182, 182, 182)";
    Class.style.color = "black";
}

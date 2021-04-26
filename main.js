//window.open(pathString, target);
function DonateTab() {
	window.open("./donate.html", "_blank");
};





//For opening and closing of side menu-nav bar in the different pages
function openSlide1() {
	document.getElementById("side-menu1").style.width="250px";
};

function closeSlide1() {
	document.getElementById("side-menu1").style.width="0";
};

function openSlide2() {
	document.getElementById("side-menu2").style.width="250px";
};

function closeSlide2() {
	document.getElementById("side-menu2").style.width="0";
};

function openSlide3() {
	document.getElementById("side-menu3").style.width="250px";
};

function closeSlide3() {
	document.getElementById("side-menu3").style.width="0";
};





//For alert message and resetting the given values
if (typeof window === 'object'){
const name=document.getElementById("namein");
const mail=document.getElementById("mailin");
const text=document.getElementById("msgin");
function onSubmit() {
	if (name.value==""||mail.value==""||text.value==""){
		alert("Inputs Missing!");
	}else{
		alert("Form has been submitted successfully!");
	}
	name.value="";
	mail.value="";
	text.value="";
};
}





//For toggling between light and dark mode
if (typeof window === 'object'){
var checkbox = document.getElementById("checkbox");

checkbox.addEventListener('change',function(){
	document.getElementById('aboutbody').classList.toggle('dark');
	document.getElementById('abouthead').classList.toggle('themehead');
});
}
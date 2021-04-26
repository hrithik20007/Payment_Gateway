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





//For toggling between light and dark mode
if (typeof window === 'object'){
var checkbox = document.getElementById("checkbox");

checkbox.addEventListener('change',function(){
	document.getElementById('aboutbody').classList.toggle('dark');
	document.getElementById('abouthead').classList.toggle('themehead');
});
}





/*
if (typeof window==='object'){
const form = document.getElementById("contactform");

form.addEventListener('submit', (e)=>{
	e.preventDefault();
	console.log("Form Submitted!");
});
}
*/
/*
const toggleSwitch = document.querySelector('#theme input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.aboutbody.setAttribute('class', 'darktext');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

const check=document.getElementById('checkbox');
check.addEventListener('change', ()=>{
	document.classList.toggle('darkbg');
});

function check() {
	document.getElementById('aboutbody').classList.toggle('darkbg');
};
*/

/*
//For alert message and resetting the given values
if (typeof window === 'object'){
const name=document.getElementById("namein");
const mail=document.getElementById("mailin");
const text=document.getElementById("msgin");

const emailIsValid = mail => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
}

function onSubmit() {
	if (name.value==null||mail.value==null||text.value==null){
		alert("Inputs Missing!");
	}
	if(!emailIsValid(mail.value)){
		alert("Your Email Format is wrong!");
	}else{
		alert("Form has been submitted successfully!");
	}
	name.value="";
	mail.value="";
	text.value="";
};
}
*/
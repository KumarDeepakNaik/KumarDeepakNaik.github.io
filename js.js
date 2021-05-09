
function navbarOpen(){

var head_table=document.getElementById("head-table");
head_table.style.marginTop="20vh";
var head_div_open=document.getElementById("head-div-open");
head_div_open.style.display="none";
var head_div_close=document.getElementById("head-div-close");
head_div_close.style.display="block";
}
function navbarClose(){
var head_table=document.getElementById("head-table");
head_table.style.marginTop="100vh";
var head_div_open=document.getElementById("head-div-open");
head_div_open.style.display="block";
var head_div_close=document.getElementById("head-div-close");
head_div_close.style.display="none";
}

function darkTheme(){
	var body=document.getElementById("body");
	body.style.backgroundColor="rgba(0,0,0,1)";
	body.style.color="rgba(255,255,255,1)";
	var body_theme_dark=document.getElementById("body-theme-dark");
	body_theme_dark.style.display="none";
	var body_theme_dark=document.getElementById("body-theme-light");
	body_theme_dark.style.display="inline";
}

function lightTheme(){
		var body=document.getElementById("body");
	body.style.backgroundColor="rgba(255,255,255,1)";
	body.style.color="rgba(0,0,0,1)";
	var body_theme_dark=document.getElementById("body-theme-dark");
	body_theme_dark.style.display="inline";
	var body_theme_dark=document.getElementById("body-theme-light");
	body_theme_dark.style.display="none";
	
}
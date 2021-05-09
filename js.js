
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
	body_theme_dark.style.display="inline-block";
	
}

function lightTheme(){
		var body=document.getElementById("body");
	body.style.backgroundColor="rgba(255,255,255,1)";
	body.style.color="rgba(0,0,0,1)";
	var body_theme_dark=document.getElementById("body-theme-dark");
	body_theme_dark.style.display="inline-block";
	var body_theme_dark=document.getElementById("body-theme-light");
	body_theme_dark.style.display="none";
	
}


/*font size ---------------------------------------------*/

function increaseFontSize(){
	var body= document.getElementById("body");
	body.style.fontSize="large";
	//alert("Font Size Set as Large");
	
	var head_table_tr_td_plus_2=document.getElementById("head-table-tr-td-plus-2");
	head_table_tr_td_plus_2.style.color="rgba(0,255,0,1)";
	var head_table_tr_td_plus_1=document.getElementById("head-table-tr-td-plus-1");
	head_table_tr_td_plus_1.style.color="rgba(255,0,0,1)";
}

function decreaseFontSize(){
	var body= document.getElementById("body");
	body.style.fontSize="medium";
		//alert("Font Size Set as Normal");
		var head_table_tr_td_plus_1=document.getElementById("head-table-tr-td-plus-1");
	head_table_tr_td_plus_1.style.color="rgba(0,255,0,1)";
	
	var head_table_tr_td_plus_2=document.getElementById("head-table-tr-td-plus-2");
	head_table_tr_td_plus_2.style.color="rgba(255,0,0,1)";
		
}
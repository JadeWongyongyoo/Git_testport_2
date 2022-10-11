const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const Username = urlParams.get('username');
console.log(Username)
const Password = urlParams.get('password1'); 
console.log(Password)

window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin");
	form.onsubmit = checkLogin;
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	var username = document.forms["myLogin"]["username"];
	var password = document.forms["myLogin"]["password"];

	if(username.value != Username || password.value != Password)
	{
		alert("error");
		return false;
	}
	else
	{
		alert("complete");
	}
}

			
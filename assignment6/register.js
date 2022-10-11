window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var password1 = document.getElementById("password1");
    var password2 = document.getElementById("password2");
    if(password1.value == password2.value)
    {
        alert("Register complete");
    }
    else if(password1.value != password2.value)
    {
        var errormsg = document.getElementById("errormsg");
        errormsg.innerHTML = "Incorrect Password"
        return false;
}
}
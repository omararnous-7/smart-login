var signUpName = document.getElementById('signName')
var signEmail = document.getElementById('signEmail')
var signPassword = document.getElementById('signPassword')
var user = []
if(localStorage.getItem('user') != null){
    user =JSON.parse(localStorage.getItem('user'))
}else{
    user = [];
}

function add() {
    if (signUpName.value == "" || signEmail.value == "" || signPassword.value == "") {
        document.getElementById('message').innerHTML = `<p class = "text-center">
        all inputs is required</p>`
    }else{
         var obj = {
            name :signUpName.value,
            email :signEmail.value,
            paassword :signPassword.value,
         }
         user.push(obj);
         location.href='../../login/index.html'
         localStorage.setItem('user',JSON.stringify(user));
    }
}
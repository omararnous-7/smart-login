var singInEmail = document.getElementById ("signEmail")
var singInPassword = document.getElementById ("signPassword")
var user =[];
user = JSON .parse(localStorage.getItem('user'))

document.getElementById ('login').addEventListener('click',function(){
    if(singInEmail.value == "" || singInPassword.value == ""){
        document.getElementById('message').innerHTML = `<p class = "text-center">
        all inputs is required</p>`
    }else{
         checkUser();
    }
})

function checkUser (){
    for(var i =0 ;i < user.length ;i++){
        if(singInEmail.value == user [i].email &&  singInPassword.value == user[i].password){
            var y = user[i].name
            localStorage.setItem ("userName",y);
            location.href='../../home/index.html'
            break;
        }
    }
}
const pass =document.getElementById("password");
const icon =document.getElementById("icon");

function showPass(){
    if(password.type === 'password'){
        password.setAttribute('type','text');
        icon.classList.add('hide');
    }
    else {
        password.setAttribute('type','password');
        icon.classList.remove('hide');
    }
}
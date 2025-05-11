function mostrarEsconder(){
    const password = document.getElementById('password', 'confirmPassword');
    const icon = document.getElementById('icon', 'iconn');

    if(password.type === 'password'){
        password.setAttribute('type', 'text');
        icon.classList.add('esconder')
    }
    else{
        password.setAttribute('type', 'password');
        icon.classList.remove('esconder')
    }
}

function esconderMostrar(){
    const cpassword = document.getElementById('confirmPassword');
    const cicon = document.getElementById('iconc');

    if(cpassword.type === 'password'){
        cpassword.setAttribute('type', 'text');
        cicon.classList.add('mostrar')
    }
    else{
        cpassword.setAttribute('type', 'password');
        cicon.classList.remove('mostrar')
    }
}
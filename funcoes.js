function fazerlogin(){
    let login = document.getElementById('login').value
    let senha = document.getElementById('senha').value

    if(login === 'cenep' && senha === 'cenep123'){
        window.location.href = 'pagina2.html'
    }else{
        alert('Login ou senha Incorretos')
    }

}
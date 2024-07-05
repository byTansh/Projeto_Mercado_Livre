/*Girar login/Criar*/
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});
/*Fim Girar login/Criar*/

/*Validação de login*/
function logar() {

    var usuario = document.getElementById('usuario').value
    var senha = document.getElementById('senha').value

    if (usuario == "usuario123@gmail.com" && senha == "usuario123") {
        alert('Bem vindo de volta ' + + usuario);
        location.href = "../Pcompras/dever.html";
        /**2 pontos antes da pasta serve para sair da pasta atual para entrar em outra*/
    } else {
        alert('Usuario ou senha incorretos!');
    }
}
/*Fim Validação de login*/
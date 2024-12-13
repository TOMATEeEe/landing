const menu=document.querySelector('ul')
const menu_botao=document.querySelector('.button')
const titulo=document.querySelector('h1')

let classe=menu.className

menu_botao.addEventListener('click',()=>{
    adicionaOUremove()
    console.log('fsefew')
})



function adicionaOUremove(){
    console.log(classe)
    if(menu.classList.contains('desativa')){
         menu.classList.remove('desativa')
            menu.classList.add('ativa')
            titulo.classList.add('distancia')
    }else{
         menu.classList.remove('ativa')
            menu.classList.add('desativa')
            titulo.classList.remove('distancia')
    }
}
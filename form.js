const nome=document.querySelector('#nome')
const telefone=document.querySelector('#telefone')
const email=document.querySelector('#email')

const marquee_invalidoEmail=document.querySelector('#marquee_invalidoEmail')
const marquee_invalidoNome=document.querySelector("#marquee_invalidoNome")
const marquee_invalidoTelefone=document.querySelector('#marquee_invalidoTelefone')

const main =document.querySelector('main')
const header=document.querySelector('header')


const enviar=document.querySelector('#enviar')

let alert=document.querySelector("#alert")

enviar.addEventListener('click',verifica_campos)

function verifica_campos(){
    let email_value=email.value
    let telefone_value=telefone.value
    let nome_value=nome.value

    let length_email=email_value.replace(/\s+/g, '').length
    let length_telefone=email_value.replace(/\s+/g, '').length
    let length_nome=email_value.replace(/\s+/g, '').length

    console.log(length_email)

    let array_validação=[]
    //se constatado que o campo seguiu os critérios,será acrescentado a informação "valido" nessa array

    if(email.value!=null && length_email>2){
        console.log('nos conformes')
        array_validação.push('valido')
    }else{
        marquee_invalidoEmail.classList.add("invalido")
    }
    if(nome.value!=null && length_nome>2){
        console.log('nos conformes')
        array_validação.push('valido')
    }else{
        marquee_invalidoNome.classList.add("invalido")
    }
    if(telefone.value!=null && length_telefone>2){
        console.log('nos conformes')
        array_validação.push('valido')
    }else{
        marquee_invalidoTelefone.classList.add("invalido")
    }

    camposCheios(array_validação)
}

function camposCheios(validacoes){

    let validação_conjunto=0
    //a cada validação referente a um campo do input,ou seja,constatado que foi preenchido da forma correta,será acrescentado um ponto a essa variavel,e se certificado que todos 3 campos estão nos conformes,então será chamado a function.

    validacoes.forEach((validacao)=>{
        if(validacao==='valido'){
            validação_conjunto+=1
        }
    })

    if(validação_conjunto==3){
        chama_alert()
    }

    console.log(email.value)
    
}

function chama_alert(){
    alert.classList.add('aparece')
    alert.classList.remove('none')
    main.classList.add('escurece_main')
    header.classList.add('escurece_header')
    console.log('gdfg')
}

    






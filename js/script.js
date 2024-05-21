let firstV= document.querySelector('.C')
let secondV = document.querySelector('.F')
let converter = document.querySelector('#converter')
let result = document.querySelector('.result')
let  convertbtn= document.querySelector('.convertButton')
let  resetbtn= document.querySelector('.resetButton')
let changebtn = document.querySelector('.changeButton')


convertbtn.addEventListener('click', ()=>{
    if(converter.value ===''){
        result.innerHTML = 'Insert correct value'
        result.style.color = 'red'
    }else{
        result.style.color='rgb(255,255, 102'
        if (firstV.innerHTML ==='°C') {
           result.innerHTML=  ((converter.value * 9/5) + 32).toFixed(2) ;
        }else{
            result.innerHTML= ( (converter.value - 32) * 5/9).toFixed(2);
        }
    }
})
resetbtn.addEventListener('click',()=>{
    result.innerHTML=''
    converter.value= '';
})
changebtn.addEventListener('click',()=>{
if(firstV.innerHTML === '°C'){
    firstV.innerHTML='°F'
    secondV.innerHTML='°C'
    converter.setAttribute('placeholder','°F')
    document.title = '°F to °C'

}else{
    firstV.innerHTML='°C'
    secondV.innerHTML='°F'
    converter.setAttribute('placeholder','°C')
    document.title = '°C to °F'
}
})


function count(celToFr, temp) { 
    if(celToFr){
       return 
    }else if(!celToFr) {
        return (temp * 9/5) +32;
    } else {
        return 'invalid'
    }
}
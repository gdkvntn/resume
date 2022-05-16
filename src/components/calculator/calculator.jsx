import './calc.css'


function Calculator ( ){
  

    return (
        
        <div className="container">
        <div className="result"  >
            0
        </div>
        <div  id ='panel'className="panel-wrapper">
            <button className="panel-button action">C</button>
            <button className="panel-button action">%</button>
            <button className="panel-button action">/</button>
            <button className="panel-button number" value="7">7</button>
            <button className="panel-button number" value="8">8</button>
            <button className="panel-button number" value="9">9</button>
            <button className="panel-button action">x</button>
            <button className="panel-button number" value="4">4</button>
            <button className="panel-button number" value="5">5</button>
            <button className="panel-button number" value="6">6</button>
            <button className="panel-button action">-</button>
            <button className="panel-button number" value="1">1</button>
            <button className="panel-button number" value="2">2</button>
            <button className="panel-button number" value="3">3</button>
            <button className="panel-button action">+</button>
            <button className="panel-button zero number" value="0">0</button>
            <button className="panel-button  number" value=".">.</button>
            <button className="panel-button action">=</button>
        </div>
    </div>
    )
}

export default Calculator

let a=''
let b =''
let sym =''
let number =['1','2','3','4','5','6','7','8','9','0','.']
let active =['+','-','x','/']
const panel = document.querySelector('.panel-wrapper')
const out = document.querySelector('.result')


function clear(){
    a=''
    b=''
    sym=''
}

panel.addEventListener('click',(event)=>{
    const key = event.target.innerText

    if(key==='C'){
       out.innerText='0'
       return clear()
    }

    if(event.target === panel){
        return 
    }else if(number.includes(key) && sym===''){
        a+=event.target.innerText
       out.innerText=a
        
    }else if(active.includes(key)){
        
        sym=event.target.innerText
        out.innerText=sym
        
    }else if(number.includes(key) && sym!=='' && a!==''){
        b+=event.target.innerText
        out.innerText=b
    }
    

    if(key==='='){
        if(b===''){
            b=a
        }
        if(sym==='+'){
           a= +a + (+b)
            b=''
            sym=''
            
        }
        if(sym === '-'){
           a = a - b
            b=''
            sym=''
            
        }
        if(sym==='/'){
            if(b==='0') 
            {out.innerText='ошибка'
            a=''
            b=''
            sym=''
            return
        }
           a = a / b
            b=''
            sym=''
            
        }
        if(sym==='x'){
           a =a * b
            b=''
            sym=''
        }
        out.innerText=a
        
    }
    
    if(event.target.innerText==='%'){
        
       out.innerText= a/100
        a=out.innerText
         b=''
         sym=''
     }

})
import './style.css';
import './App.css';
import { useEffect, useState } from 'react';


function App() {

  const [inputNum,setInputNum] = useState(0); 
  const [calculatedNum,setCalculatedNum] = useState(0); 
  const [isDecimal,setIsDecimal] = useState(false); 
  const [decimalCount,setDecimalCount] = useState(1); 
  const [operator,setOperator] = useState(''); 
  const [monitor,setMonitor]= useState('');


  useEffect(()=>{
    setMonitor(inputNum);
  },[inputNum]);

  useEffect(()=>{
    setMonitor(calculatedNum);

  },[calculatedNum])

  // Taking input numbers from keyboard
  const TakeInputNum =  (num) =>{
  
      if(isDecimal){
        num =num/Math.pow(10,decimalCount);
        setDecimalCount(decimalCount+1);
        setInputNum(parseFloat((inputNum+num).toFixed(decimalCount)));
      }
      else{
        setInputNum(inputNum*10+num);
      }
    
  }

  // Taking operator in keyboard
  const TakeOperator = (operator)=>{
    setOperator(operator);
    Calculate();
    setInputNum(0)
  }

  //Calculation Process
  const Calculate = () =>{
    setIsDecimal(false);
    setDecimalCount(1);
    if(operator==='/' && inputNum ===0){
      setCalculatedNum(NaN);
      setInputNum(0)
      return;
    }
    if(calculatedNum===0 && inputNum===0){
      return;
    }
    switch(operator){
      case '+':
          setCalculatedNum(calculatedNum+inputNum);
      break;
      
      case '-':
          setCalculatedNum(calculatedNum-inputNum);
      break;
      
      case '*':
          setCalculatedNum(calculatedNum*inputNum);
      break;
      
      case '/':
          setCalculatedNum(calculatedNum/inputNum);
      break;

      
    }
    if(operator===''){
      setCalculatedNum(inputNum);   
    }
    else{
      setInputNum(0);
    }

    return;

  }

  const Clear = () =>{
    setInputNum(0);
    setCalculatedNum(0);
    setMonitor('0');
    setOperator('');
  }

  const MinusPlus=()=>{
    
    var input = inputNum.toString();
    if(input.charAt(0)==="-"){
      var value = input.substring(1);
      setInputNum(parseFloat(value));
    }
    else{
      setInputNum(parseFloat("-"+input));
    }
  }

  const Percentage = () =>{
    setInputNum(parseFloat(inputNum)/100);
  }

  //Getting the equation
  const Equals = () =>{
    Calculate();
    setOperator();
  }

  return (
    <div className="calculatorApp">

      <section className="monitor">
        <p className="out-put">{monitor}</p>
      </section>

      <section className='keyboard'>
        <div className='grid-container'>
        
        <div onClick={()=>{Clear()}} className="grid-item one-block blue">AC</div>
        <div  onClick={()=>{MinusPlus()}} className="grid-item one-block blue"> -/+ </div>
        <div  onClick={()=>{Percentage()}} className="grid-item one-block blue"> % </div>
        <div onClick={()=>{TakeOperator('/')}} className="grid-item one-block red">/</div>  
           
        </div>
        
        <div className='grid-container'>
          <div onClick={()=>{TakeInputNum(7)}} className='grid-item one-block'>7</div>
          <div onClick={()=>{TakeInputNum(8)}} className='grid-item one-block'>8</div>
          <div onClick={()=>{TakeInputNum(9)}} className='grid-item one-block'>9</div>
          <div onClick={()=>{TakeOperator('*')}} className='grid-item one-block red'>*</div>
        </div>

        
        
        <div className='grid-container'> 
          <div onClick={()=>{TakeInputNum(4)}} className='grid-item one-block'>4</div>
          <div onClick={()=>{TakeInputNum(5)}} className='grid-item one-block'>5</div>
          <div onClick={()=>{TakeInputNum(6)}} className='grid-item one-block'>6</div>
          <div onClick={()=>{TakeOperator('-')}} className='grid-item one-block red'>-</div>
        </div>

        
        
        <div className='grid-container'>
          <div onClick={()=>{TakeInputNum(1)}} className='grid-item one-block'>1</div>
          <div onClick={()=>{TakeInputNum(2)}} className='grid-item one-block'>2</div>
          <div onClick={()=>{TakeInputNum(3)}} className='grid-item one-block'>3</div>
          <div onClick={()=>{TakeOperator('+')}} className='grid-item one-block red'> + </div>
        </div>

        
        <div className='grid-container'>
          <div onClick={()=>{TakeInputNum(0)}} className='grid-item two-block'>0</div>
          <div onClick={()=>{setIsDecimal(true)}} className='grid-item one-block'> . </div>
          <div onClick={()=>{Equals()}} className='grid-item one-block red'> = </div>
        </div>


      </section>



    </div>
  );
}

export default App;

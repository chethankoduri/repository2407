import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <button
       onClick ={()=>{
     let engMarks = 80;
     if (engMarks >= 35) {
     console.log("Passed in English");
     } 
      }}   
    >
      If
      </button>
      <button
       onClick ={()=>{
     let hindiMarks = 67;
     while (hindiMarks >= 35) {
     console.log("${hindiMarks}");
     } 
      }}   
    >
      while
      </button>
      <button onClick={() => {
        let telMarks = 20;
        do{
          console.log(telMarks);
        }while(telMarks >=35)
        
          }}
        >
          Do While </button>
          <button onClick={()=>{
            for(let i=1;i<=123;i++){
              console.log(i);
            }
          }}
          >for</button>
        <button onClick={()=>{
          for(let i=1;i<=1000;i++){
         console.log(i);
         for(let j=1;j<=10; j++){
          console.log(`${i} * ${j} =${i*j}`);

         }
          }
        }}>Nested Loops</button>
      </div>
  );
}
  export default App;    
    
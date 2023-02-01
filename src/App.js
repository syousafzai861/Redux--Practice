
import { useSelector,useDispatch } from 'react-redux';
import './App.css';

function App() {
let dispatch = useDispatch();
let state = useSelector(state=>state);
console.log(state)
  return (

    <div className="App">
      <h1>Hello Redux</h1>
    {state.name}
    {state.value}
    
    <button onClick={()=>{dispatch({type: "ADD", payload: 2} )}}>ADD</button>
    <button onClick={()=>{dispatch({type: "SUB", payload: 2} )}}>Subtract</button>
    </div>
  );
}

export default App;

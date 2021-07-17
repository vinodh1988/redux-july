import logo from './logo.svg';
import './App.css';
import Raw from './components/Raw'
import {RawHoc} from './Redux/Hoc/RawHoc'
const App  =()=>{
  return(
    <div>
      <h1>React-Redux Demo</h1>
      <RawHoc></RawHoc>
    </div>
  )
}

export default App;

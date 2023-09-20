import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import './App.css'
import { useState } from "react";
function App() {
  // const items = ["Baku", "New York", "Istanbul","London","Boston"];
  // const handleSelectItem=(item: string)=> {
  //   console.log(item);

  // }
const [visibility, setVisibility] = useState(false);

  return (
    <div>
     
      {visibility && (<Alert onClose={()=>setVisibility(false)}>My alert
         </Alert>)}
<Button classNameBtn="btn btn-primary" onClick={()=>setVisibility(true)
      }
      > Click me</Button>

    </div>
  );
}

export default App;

import './App.css';
import axios from 'axios';
import {useState} from "react";

function App(){
  const [data,setData] = useState([]);
  axios.get("http://52.170.17.9:80/movies/573a1390f29313caabcd413b/comments/?count=1").then((response)=>{
    setData(response.data);
  });        
  console.log(data);

  return (
    <>
      <p>{data.message}</p>
    </>
  )
}

export default App;
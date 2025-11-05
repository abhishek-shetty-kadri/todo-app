import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [data, setData] = useState<any>([])
  console.log('API U','API I' ,process.env.REACT_APP_API_URL)

  useEffect(()=>{
axios.get("https://localhost:7298/api/todo/list").then((dt)=>setData(dt.data));
  },[])

  return (
    <>
 {data.map((dt:any)=><><p>{dt.taskId}</p><p>{dt.taskName}</p></>)}
    </>
  )
}

export default App

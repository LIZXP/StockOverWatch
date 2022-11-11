import { useState,useEffect } from 'react';
import './App.css';
import {db} from './firebase-config';
import {collection, getDocs} from 'firebase/firestore'

function App() {
  const [users, setUsers] = useState([]);
    const userCollectionRef = collection(db, "users" )
    
    useEffect(() => {
      const getUser= async ()=>{
        try {const data = await getDocs(userCollectionRef)
        setUsers(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
      } catch(err){console.log(err)}}

      getUser();
    },[]);
  return (
    
   <div className="App">
    {users.map((user)=>{
      return(
<div key={user.id}>
<h1>Name: {user.name}</h1>
<h1>Phone: {user.phone}</h1>
</div>
      )
    })}
    </div>
  )}

export default App;

import { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import Card from "./Components/Header/Card/Card";
import axios from "axios";



function App() {
  const [state, setstate] = useState([])
  const [item, setitem] = useState()

  

  

  const countrysearch = () => {
    
    {
      const getdata = async () => {

        let res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`)
        let final=res.data.meals
        setstate(final)       
        console.log(state)
      } 

      if (item.trim() === '') {
        alert('Enter a food name to search')
      } else {
        getdata()
      }


      if (state === null) {
        alert('no food found')
      } else {
        getdata()
      }
     
    }
  
  }



  


  return <> 
    <div className="Container">
      <Header />
    
        <div className="navbox">
      <div className="navbar"> 
        <span><i class="fa-solid fa-magnifying-glass"></i></span>
          <span><input className="nav_input" name="navbar" placeholder="Search your food" onChange={(e)=>setitem(e.target.value)} value={item}/></span>
         
        </div>    
        <div className="nav_btn">
          <button onClick={() => {
            {
              countrysearch();
              setitem("");
          }}}>Search</button>
        </div>
        </div>
      
      <div className="cardcomponent">
      {
            (state == null) ?
            'not found'
              :
              state.map((e, i) => {
                return (<Card food={e} key={i}/>)
              })
      }
        </div>
        
      
    </div>
  </>
}

export default App;

import { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import Card from "./Components/Header/Card/Card";
import axios from "axios";



function App() {
  const [state, setstate] = useState([])
  const [item, setitem] = useState([])
  const[Null,setNull]=useState(false)

  const confirmdata = () => {

    if (item.length == 0) {
      alert('Enter a food name to search')

    } else {
      countrysearch();
      setitem("");
  
    }
  }
    


   

  const countrysearch = () => {
    
    {
      const getdata = async () => {

        let res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`)
        let final = (res.data.meals)
        if (final == null) {
          alert('no food found')
          setNull(true)
        } else {
          setstate(final)   
        }
      } 
      getdata()

    }
   
  }



  


  return <> 
    <div className="Container">
      <Header />
    
        <div className="navbox">
      <div className="navbar"> 
        <span><i className="fa-solid fa-magnifying-glass"></i></span>
          <span><input className="nav_input" name="navbar" placeholder="Search your food" onChange={(e)=>setitem(e.target.value)} value={item}/></span>
         
        </div>    
        <div className="nav_btn">
          <button onClick={() => {
            {
              confirmdata()
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

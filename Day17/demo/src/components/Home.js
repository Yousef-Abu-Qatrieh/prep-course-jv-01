import Login from "./Login";
import { useState } from "react";

function Home (){
   const [isLoggedIn, setLoggedin] = useState(false);
   const [userName, setUserName]= useState("");

   // when the user click on the buuton I want to change the state from false to true 
   const handleLoggin = () =>{

    setLoggedin(!isLoggedIn) // inside the pracketes I will add the new state value 
    
 }


    return(
        <>
        <main>
            <h2>
                Welcome {userName} to the Home page ;
            </h2>
           <Login isLoggedIn={isLoggedIn} handleLoggin={handleLoggin} />
        </main>
     </>
    )

}

export default Home;
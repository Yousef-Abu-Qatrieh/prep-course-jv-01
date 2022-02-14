function Login (props){
 
    console.log(props);

    // if(props.isLoggedIn){
    //     return(

    //         <>
    //           <button onClick={props.handleLoggin}>Logout</button>
        
    //         </>
    //         );
    // }else{
    //     return(

    //         <>
    //           <button onClick={props.handleLoggin}>Login</button>
        
    //         </>
    //         );
    // }

    return props.isLoggedIn ?   <button onClick={props.handleLoggin}>Logout</button> :   <button onClick={props.handleLoggin}>Login</button>


}

export default Login;
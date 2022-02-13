import '../App.css';

function Header(props) {
    return (

        <>
            <h1 className="App-header" >Hello  {props.fName}   {props.lName} </h1>
            <p style={{ color: props.color }}>I'm inside the Header component </p>
        </>

    );
}

export default Header;
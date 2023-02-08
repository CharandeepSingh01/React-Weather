import classes from "./NavBar.module.css";

function NavBar(){
    return(
        <nav className={classes.nav}>
            <div>
                <h1>Weather App</h1>
            
                <img src="https://icons8.com/icon/iz13IdTXrqLN/weather.jpg" alt=""/>
                
            </div>
            
        </nav>
    )
}

export default NavBar;
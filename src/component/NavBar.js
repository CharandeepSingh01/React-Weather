import classes from "./NavBar.module.css";

function NavBar(){
    return(
        <nav className={classes.nav}>
            <div>
                <h1>Weather App</h1>
            </div>
            <div className={classes.nav}>
                <img src="wea.png" alt="weather icon" />
            </div>
            
        </nav>
    )
}

export default NavBar;
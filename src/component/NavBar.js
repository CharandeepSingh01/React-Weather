import classes from "./NavBar.module.css";

function NavBar(){
    return(
        <nav className={classes.nav}>
            <div>
            
                <img className={classes.img} src="https://cdn4.iconfinder.com/data/icons/weatherful/72/Cloudy_Sunny-512.png" alt=""/>
                
            </div>
            
        </nav>
    )
}

export default NavBar;
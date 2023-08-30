// This page will render a Log in button if your not logged in, upon clicking will lead you to a login page.
// If you're logged in, it will render a Log out button with your email address.

import React from "react"
import { useNavigate } from "react-router-dom";
import Login from "../../components/auth/login";
import "../styles"; //Import the SCSS file

const Home = (props) => {   // passing data from one api to another
    const { loggedIn, email } = props
    const navigate = useNavigate();
    
    const onButtonClick = () => {
        // I'll update this function later
    }



    return <div className="mainContainer">
        <div className={"titleContainer"}>
            <div>Welcome Back!</div>
        </div>
        <div>

            This is the home page.
            
        </div>
        <div className={"buttonContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value={loggedIn ? "Log out" : "Log in"} />
            {(loggedIn ? <div>
                Your email address is {email}
            </div> : <div/>)}
        </div>


    </div>
}

export default Home
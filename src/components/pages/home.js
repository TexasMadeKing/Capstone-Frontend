// This page will render a Log in button if your not logged in, upon clicking will lead you to a login page.
// If you're logged in, it will render a Log out button with your email address.

import React from "react"
// import { useNavigate } from "react-router-dom";
// import Login from "../../components/auth/login";
// import "..//..//components/"
import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 12px 24px;
    margin: 8px;
    background-color: cornflowerblue;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
`;

const StyledInput = styled.input`
    padding: 10px;
    margin: 10px;
    width: 80%;
    transition: background-color 0.7s ease;
`;

const StyledDiv = styled.div`
    padding: 12px 24px;
    margin: 8px;
    font-style: 40px
`;

function App() {
    return <StyledButton>Click Me</StyledButton>;
}



const Home = (props) => {   // passing data from one api to another
    const { loggedIn, email } = props
    // const navigate = useNavigate();
    
    const onButtonClick = () => {
        // I'll update this function later
    };

    
        return(
            <StyledDiv>
            <div className="mainContainer">
            <div className={"titleContainer"}>
                <div>Welcom!</div>
            </div>
            This is the home page

            <StyledButton type="submit">Login</StyledButton>
            <div>

            </div>
            </div>
            </StyledDiv>
        );
    }


export default Home;
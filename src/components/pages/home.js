import React from "react";
import styled from 'styled-components';

// Styled components
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
    font-size: 24px;
`;

// Home component
const Home = (props) => {
    const { loggedIn, email } = props;

    const onButtonClick = () => {
        // I'll update this function later
        console.log("Button clicked");
    };

    return (
        <StyledDiv>
            <div className="mainContainer">
                <div className="titleContainer">
                    <div>Welcome!</div>
                </div>
                This is the home page

                {loggedIn ? (
                    <>
                        <div>Email: {email}</div>
                        <StyledButton onClick={onButtonClick}>Logout</StyledButton>
                    </>
                ) : (
                    <StyledButton onClick={onButtonClick}>Login</StyledButton>
                )}
            </div>
        </StyledDiv>
    );
}

export default Home;

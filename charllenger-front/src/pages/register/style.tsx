import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #191919;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;

  @keyframes slideLeftIn {
    from {
      margin-left: 30%;
      opacity: 10%;
    }

    to {
      margin-left: 0%;
      opacity: 100%;
    }
  }

  @keyframes slideRightIn {
    from {
      margin-right: 30%;
      opacity: 10%;
    }

    to {
      margin-right: 0%;
      opacity: 100%;
    }
  }

  section {
  }
  .div_details {
    display: none;
  }

  .div_login {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .div_login form {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 10vh;
    animation-name: slideLeftIn;
    animation-duration: 0.3s;
  }

  .div_login form h2 {
    font-size: 2em;
    color: #938d8d;
  }

  .div_login form input {
    height: 50px;
    width: calc(100% - 5px);
    border: none;
    border-radius: 15px;
    margin: 0 0 1.5em 0;
    padding-left: 5px;
    font-family: "Poppins", sans-serif;
  }
  .div_login form span {
    color: red;
    height: 20px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .div_login_buttons {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
  .div_login_buttons button {
    height: 50px;
    width: 45%;
    border: none;
    border-radius: 15px;
    margin: 0 0 1.5em 0;
    padding-left: 5px;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
  }
  .div_login_buttons button:hover {
    cursor: pointer;
    background-color: #d9d9d950;
    transition: 0.3s;
  }

  @media (min-width: 600px) {
    section {
      height: 80%;
      width: 80%;
      max-width: 1200px;
      background-color: #ffffff;
      border-radius: 15px;
      display: flex;
      flex-direction: row;
      overflow: hidden;
    }
    .div_details {
      display: flex;
      width: 50%;
      height: 100%;
      align-items: center;
      justify-content: center;
    }
    .div_details img {
      height: 50%;
      animation-name: slideRightIn;
      animation-duration: 0.3s;
    }
    .div_login {
      width: 50%;
      height: 100%;
      background-color: #d9d9d9;
    }
    .div_login form {
      position: initial;
      width: 60%;
      height: 70%;
    }
  }
`;

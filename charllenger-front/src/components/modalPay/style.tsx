import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  z-index: 1;
  background-color: #1a1a1a90;
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;

  @keyframes slidein {
    from {
      margin-bottom: 100%;
      width: 300%;
    }

    to {
      margin-bottom: 0%;
      width: 100%;
    }
  }

  section {
    width: 80%;
    height: 35vh;
    background-color: #d9d9d9;
    border-radius: 15px;
    max-width: 350px;
    animation-name: slidein;
    animation-duration: 0.5s;
  }
  h2 {
    margin: 10px auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  form {
    height: 80%;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
  }

  form input {
    height: 50px;
    width: calc(100% - 10px);
    border: none;
    padding: 0 5px 0 5px;
    margin-bottom: 10px;
    border-radius: 15px;
  }
  form span {
    color: red;
    margin: 0;
    height: 20px;
  }

  .buttons_form {
    display: flex;
    flex-direction: row;
    width: 90%;
    justify-content: space-around;
  }

  button {
    height: 5em;
    width: 5em;
    border-radius: 100%;
    border: none;
    color: #1a1a1a;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  button svg {
    width: 2.5em;
    height: 2.5em;
  }
  .button_cancel:hover {
    background-color: #771212b0;
    transition: 0.3s;
    cursor: pointer;
  }
  .button_send:hover {
    background-color: #d3c121ae;
    transition: 0.3s;
    cursor: pointer;
  }
`;

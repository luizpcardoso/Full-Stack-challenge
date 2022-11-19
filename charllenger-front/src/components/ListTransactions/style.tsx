import styled from "styled-components";

export const Container = styled.div`
  background-color: #d9d9d9;
  height: 50%;
  width: 90%;
  max-width: 800px;
  border-radius: 15px;

  .transaction_filter {
    height: 15%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
  ul {
    padding: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: scroll;
    height: 70%;
  }

  .transaction_filter button {
    border-radius: 15px;
    border: none;
    height: 35px;
    width: 30%;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    color: #ffffff;
  }

  .transaction_filter_in {
    background-color: #237210;
  }
  .transaction_filter_in:hover {
    cursor: pointer;
    background-color: #23721090;
    transition: 0.3s;
  }

  .transaction_filter_out {
    background-color: #7b1010;
  }
  .transaction_filter_out:hover {
    cursor: pointer;
    background-color: #7b101090;
    transition: 0.3s;
  }

  .input_date_filter {
    border-radius: 15px;
    border: none;
    height: 35px;
    width: calc(20% - 2em);
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    color: #000000;
    padding-left: 2em;
  }
  .input_date_filter {
    cursor: pointer;
  }

  ul::-webkit-scrollbar {
  width: 6px;               /* width of the entire scrollbar */
}

ul::-webkit-scrollbar-track {
  background: #ffffff00;        /* color of the tracking area */
}

ul::-webkit-scrollbar-thumb {
  background-color: #21212c;    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
  border: 1px solid #ffffff;  /* creates padding around scroll thumb */
}

  @media (min-width: 600px) {
  }
`;

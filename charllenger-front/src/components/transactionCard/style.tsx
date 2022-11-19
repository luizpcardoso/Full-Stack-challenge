import styled from "styled-components";

export const Container = styled.li`
  height: 50px;
  width: calc(90% - 10px);
  list-style: none;
  padding: 0;
  background-color: #ffffff;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  margin: 10px 0 0 0;
  justify-content: space-around;
  padding: 0 5px 0 5px;

  p {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .saida {
    color: #7b1010;
  }
  .entrada {
    color: #237210;
  }
`;

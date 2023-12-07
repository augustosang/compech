import { styled } from "styled-components"

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #231e39;
  border-radius: 6px;
  border: 3px solid #03bfcb;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
  position: relative;
  width: 400px;
  height: 400px;
  text-align: center;

  label {
    margin-top: 10px;
    margin-bottom: 8px;
    color: #DDD;
    width: 300px;

    input {
      width: 300px;
      padding: 8px;
      margin-top: 4px;
      margin-bottom: 16px;
      border: 3px solid #03bfcb;
      border-radius: 6px;
      box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
      font-size: 18px;
    }
  }

  button {
    margin: 20px 10px;
    width: 240px;
    height: 50px;
    background-color: #008000;
    border: 3px solid #03bfcb;
    border-radius: 6px;
    color: #b3b8cd;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
  }
`
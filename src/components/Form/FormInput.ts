import styled from "styled-components";

export const FormContainer = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  justify-content: flex-start;
  margin: 50px 25px;
`;

export const FormInput = styled.input`
  color: #757575;
  text-align: center;
  background-color: #151b17;
  width: 400px;
  font-size: 1.2rem;
  padding: 5px;
  margin: 5px;
  border: transparent;
  &:focus {
    box-shadow: 0px 0px 5px rgba(56, 169, 240, 0.95);
    outline: 0;
  }
`;

import styled from "styled-components";
import { FcFullTrash, FcCheckmark } from "react-icons/fc";

export const Container = styled.div`
  background: linear-gradient(90deg, #383838 0%, #000 81.25%);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ToDoList = styled.div`
  border-radius: 5px;
  background: #fff;
  padding: 30px 20px;
  max-width: 80%;

  ul {
    padding: 0;
    margin-top: 60px;
  }

  h3 {
    display: flex;
    justify-content: center;
    color: #8052ec;
  }
`;

export const Input = styled.input`
  border-radius: 5px;
  border: 2px solid rgba(209, 211, 212, 0.4);
  height: 40px;
  width: 100%;
  padding-left: 10px;
`;

export const Button = styled.button`
  border-radius: 5px;
  background: #8052ec;
  border: none;
  color: #fff;
  text-align: center;
  font-size: 17px;
  font-weight: 900;
  line-height: 2.5px;
  height: 35px;
  width: 130px;
  margin-top: 8px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;

export const ListItem = styled.div`
  border-radius: 5px;
  background: ${(props) => (props.$isFinished ? "#E8FF8B" : "#e4e4e4")};
  box-shadow: 1px 4px 10px 0px rgba(0, 0, 0, 0.2);
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 0 10px;

  li {
    list-style: none;
  }
`;

export const Trash = styled(FcFullTrash)`
  cursor: pointer;
`;

export const Check = styled(FcCheckmark)`
  cursor: pointer;
`;

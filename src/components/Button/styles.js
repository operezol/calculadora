import styled from "@emotion/styled";

const SCButton = styled.button`
  outline: none;
  border: 0;
  padding: 16px;
  font-size: 20px;
  line-height: 1;
  background-color: transparent;
  color: #ffce5c;
  transition: all 300ms;
  border: 1px solid #0001;
  width: 80px;
  height: 80px;
  &:hover {
    color: #00a3f5;
    border: 1px solid #ffce5c22;
  }
  ${(props) => {
    if (props.type === "expression") {
      return "color: black; &:hover { color: darkgrey; } &:last-child{width:100%;}";
    } else if (props.section === "function") {
      return "color:darkgrey; &:hover { color: black; }";
    }
  }}
`;

SCButton.displayName = "SCButton";
export default SCButton;

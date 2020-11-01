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
  &:hover {
    color: #00a3f5;
    border: 1px solid #ffce5c22;
  }
  ${(props) => {
    if (props.section === "functions" || props.section === "operators") {
      return "display: inline-block; width: 80px; height: 80px; color: #d63c6b; &:hover { color: #b696a0; }";
    } else if (props.section === "numbers") {
      return "display: block; position: relative; width: 80px; height: 80px; float: left; &:last-child { width: 100%; }";
    }
  }}
`;

SCButton.displayName = "SCButton";
export default SCButton;

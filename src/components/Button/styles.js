import styled from "@emotion/styled";

const SCButton = styled.button`
  outline: none;
  padding: 16px;
  font-size: 20px;
  line-height: 1;
  transition: all 300ms;
  border: 1px solid #000;
  width: 80px;
  height: 80px;
  &:last-child {
    width: 100%;
  }
  ${(props) =>
    props.type === "number"
      ? "background-color:white;color: grey; &:hover { color: black; background-color:lightgrey;} "
      : "color:black;background-color:lightgrey; &:hover { color: grey; background-color:#eee;}"}
`;

SCButton.displayName = "SCButton";
export default SCButton;

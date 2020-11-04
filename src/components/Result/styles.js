import styled from "@emotion/styled";

const SCResult = styled.div`
  position: relative;
  width: 320px;
  height: 80px;
  padding: 8px;
  overflow: hidden;
  font-size: 32px;
  line-height: 2;
  text-align: right;
  direction: rtl;
  white-space: nowrap;
  box-sizing: border-box;
  border: 1px solid black;
`;
SCResult.displayName = "SCResult";
export default SCResult;

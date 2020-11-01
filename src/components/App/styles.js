import styled from "@emotion/styled";

const SCApp = styled.div`
  position: relative;
  margin: 0 auto;
  width: 320px;
  background-color: #292f36;
  box-shadow: 0 19px 38px rgba(19, 19, 19, 0.24),
    0 15px 12px rgba(19, 19, 19, 0.12);
  float: left;
`;
SCApp.displayName = "SCApp";

const SCNumbers = styled.div`
  width: 240px;
  float: left;
`;
SCNumbers.displayName = "SCNumbers";

const SCFunctions = styled.div`
  width: 240px;
  float: left;
`;
SCFunctions.displayName = "SCFunctions";

const SCOperators = styled.div`
  width: 80px;
  float: left;
`;
SCOperators.displayName = "SCOperators";

export { SCApp, SCNumbers, SCFunctions, SCOperators };

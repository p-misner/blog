import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;

export const OutsideInputLabel = styled.label`
  font-size: 14px;
  color: #585858;
  font-weight: 400;
`;
export const InInputLabel = styled.p<DOMRect>`
  font-size: 14px;
  position: absolute;
  top: ${(props) => `${(1 * props.height) / 2}px`};
  left: 8px;
  font-weight: 600;
  opacity: 0.5;
  &:hover {
    cursor: ew-resize;
  }
`;

export const NumberInput = styled.input<DOMRect>`
  padding-left: ${(props) => `${props.width + 12}px`} !important;
  padding-right: 4px !important;
  /* padding-left: 50px !important; */
  height: 20px;
  border: 1px solid #b1b1b1;
  border-radius: 4px;
  padding: 2px;
  width: 64px;
  background-color: rgba(255, 255, 255, 0.3);
  /* Chrome, Safari, Edge, Opera */
  &::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
    margin: 0;
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

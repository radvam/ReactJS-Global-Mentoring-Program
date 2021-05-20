import { styled, theme } from "../../../theme";

import { ButtonPrimary, ButtonSecondary } from "../Button/Button.style";

import { Modal } from "antd";

export const ModalWrapper = styled.div``;

export const ModalWindow = styled(Modal)`
  .ant-modal-content {
    border-radius: 3px;
    background-color: ${theme.colors.dark};
    padding: 0;
  }

  .ant-modal-body {
    border-radius: 3px;
    padding: 40px 50px 40px 50px;
  }

  .ant-modal-footer {
    display: none;
  }

  .ant-modal-close {
    top: 15px;
    right: 16px;
  }

  .ant-modal-close-x {
    width: max-content;
    height: max-content;
  }
`;

export const ModalTitle = styled.p`
  align-self: flex-start;
  font-family: "Lato-Light", sans-serif;
  font-size: 30px;
  letter-spacing: 0.7px;
  color: ${theme.colors.white};
  text-transform: uppercase;
  margin: 0;
  padding-bottom: 40px;
`;

export const ButtonGroup = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: flex-end;

  & > div:first-child {
    margin-right: 10px;
  }
`;

export const Submit = styled(ButtonPrimary)``;

export const Reset = styled(ButtonSecondary)``;

export const Form = styled.div`
  width: 100%;
  height: 300px;
`;

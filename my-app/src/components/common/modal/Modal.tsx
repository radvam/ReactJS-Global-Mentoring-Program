import React, { FC } from "react";

import { theme } from "../../../theme";

import { ModalProps } from "./Modal.interface";

import { Cross } from "../Cross/Cross";

import { MODAL_WIDTH } from "../../../constants/mainPageConstants";

import {
  ModalWrapper,
  ModalWindow,
  ButtonGroup,
  Submit,
  Reset,
  ModalTitle,
} from "./Modal.style";

export const Modal: FC<ModalProps> = (props): React.ReactElement => {
  const {
    openModal,
    setOpenModal,
    title,
    okButtonText,
    cancelButtonText,
    onOk,
  } = props;

  return (
    <ModalWrapper>
      <ModalWindow
        onCancel={() => setOpenModal(false)}
        maskStyle={{
          background: theme.colors.lightGrey + theme.transparency["50"],
        }}
        visible={openModal}
        width={MODAL_WIDTH}
        closeIcon={<Cross />}
      >
        <ModalTitle>{title}</ModalTitle>
        {props.children}
        <ButtonGroup>
          {cancelButtonText && <Reset>{cancelButtonText}</Reset>}
          <Submit onClick={onOk}>{okButtonText}</Submit>
        </ButtonGroup>
      </ModalWindow>
    </ModalWrapper>
  );
};

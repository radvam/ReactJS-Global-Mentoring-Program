import React, { FC, useState } from "react";

import { Modal } from "../../common/modal/Modal";
import { FormEdit } from "../form-edit/FormEdit";

import {
  BUTTON_EDIT,
  BUTTON_DELETE,
  BUTTON_CLOSE,
  MODAL_EDIT_MOVIE_TITLE,
  MODAL_EDIT_BUTTON_OK,
  MODAL_EDIT_BUTTON_CANCEL,
  MODAL_DELETE_MOVIE_TITLE,
  MODAL_DELETE_BUTTON_OK,
  MODAL_DELETE_TEXT,
} from "../../../constants/mainPageConstants";

import { CardEditPanelProps } from "./CardEditPanel.interface";

import {
  EditPanelWrapper,
  ButtonCLose,
  ButtonEdit,
  ButtonDelete,
  DeleteModalParagraph,
} from "./CardEditPanel.style";

export const CardEditPanel: FC<CardEditPanelProps> = ({
  card,
  showPanel,
  toggleShowPanel,
}): React.ReactElement => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const onClickEditHandler = (): void => {
    setOpenEditModal(true);
    toggleShowPanel();
  };

  const onClickDeleteHandler = (): void => {
    setOpenDeleteModal(true);
    toggleShowPanel();
  };

  return (
    <EditPanelWrapper showPanel={showPanel}>
      <Modal
        openModal={openEditModal}
        setOpenModal={setOpenEditModal}
        title={MODAL_EDIT_MOVIE_TITLE}
        okButtonText={MODAL_EDIT_BUTTON_OK}
        cancelButtonText={MODAL_EDIT_BUTTON_CANCEL}
      >
        <FormEdit card={card} />
      </Modal>
      <Modal
        openModal={openDeleteModal}
        setOpenModal={setOpenDeleteModal}
        title={MODAL_DELETE_MOVIE_TITLE}
        okButtonText={MODAL_DELETE_BUTTON_OK}
      >
        <DeleteModalParagraph>{MODAL_DELETE_TEXT}</DeleteModalParagraph>
      </Modal>
      <ButtonCLose onClick={toggleShowPanel}>{BUTTON_CLOSE}</ButtonCLose>
      <ButtonEdit onClick={onClickEditHandler}>{BUTTON_EDIT}</ButtonEdit>
      <ButtonDelete onClick={onClickDeleteHandler}>
        {BUTTON_DELETE}
      </ButtonDelete>
    </EditPanelWrapper>
  );
};

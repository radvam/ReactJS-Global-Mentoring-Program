import React, { FC, useState } from "react";
import { useHistory } from "react-router-dom";

import { Modal } from "../../common/modal/Modal";
import { FormEditConnected } from "../../../pages/main-page/MainPageConnectors";

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
  deleteMovieRequest,
  putMovieRequest,
  card,
  showPanel,
  toggleShowPanel,
  saveSelectedMovie,
  resetMovieForm,
}): React.ReactElement => {
  const history = useHistory();
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const onClickEditHandler = (): void => {
    setOpenEditModal(true);
    toggleShowPanel();
    saveSelectedMovie(card);
  };

  const onClickDeleteHandler = (): void => {
    setOpenDeleteModal(true);
    toggleShowPanel();
  };

  const onOkModalEditHandler = (): void => {
    putMovieRequest();
    setOpenEditModal(false);
    resetMovieForm();
  };

  const onCancelModalEditHandler = (): void => {
    resetMovieForm();
  };

  const onOkModalDeleteHandler = (): void => {
    deleteMovieRequest(card.id);
    setOpenDeleteModal(false);
    history.push("/");
  };

  return (
    <EditPanelWrapper showPanel={showPanel}>
      <Modal
        openModal={openEditModal}
        setOpenModal={setOpenEditModal}
        title={MODAL_EDIT_MOVIE_TITLE}
        okButtonText={MODAL_EDIT_BUTTON_OK}
        cancelButtonText={MODAL_EDIT_BUTTON_CANCEL}
        onOk={onOkModalEditHandler}
        onCancel={onCancelModalEditHandler}
      >
        <FormEditConnected card={card} />
      </Modal>
      <Modal
        openModal={openDeleteModal}
        setOpenModal={setOpenDeleteModal}
        title={MODAL_DELETE_MOVIE_TITLE}
        okButtonText={MODAL_DELETE_BUTTON_OK}
        onOk={onOkModalDeleteHandler}
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

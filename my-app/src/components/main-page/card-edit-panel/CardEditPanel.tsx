import React, { FC, useState, useMemo, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Modal } from "../../common/modal/Modal";
import { FormEditConnected } from "../../../pages/main-page/MainPageConnectors";

import {
  BUTTON_EDIT,
  BUTTON_DELETE,
  BUTTON_CLOSE,
  MODAL_EDIT_MOVIE_TITLE,
  MODAL_DELETE_MOVIE_TITLE,
  MODAL_DELETE_BUTTON_OK,
  MODAL_DELETE_TEXT,
  MODAL_EDIT_BUTTON_SUBMIT,
  MODAL_EDIT_BUTTON_RESET,
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
  card,
  showPanel,
  toggleShowPanel,
  saveSelectedMovie,
}): React.ReactElement => {
  useEffect(() => {
    console.log(getFormEditInitialValues);
  });

  const history = useHistory();
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const {
    id,
    title,
    release_date,
    poster_path,
    overview,
    genres,
    runtime,
  } = card;

  const getFormEditInitialValues = useMemo(() => {
    return {
      title,
      release_date,
      poster_path,
      overview,
      genres,
      runtime: runtime || 90,
    };
  }, [title, release_date, poster_path, overview, genres, runtime]);

  const onClickEditHandler = (): void => {
    setOpenEditModal(true);
    toggleShowPanel();
    saveSelectedMovie(card);
  };

  const onClickDeleteHandler = (): void => {
    setOpenDeleteModal(true);
    toggleShowPanel();
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
      >
        <FormEditConnected
          id={id}
          resetButtonText={MODAL_EDIT_BUTTON_RESET}
          submitButtonText={MODAL_EDIT_BUTTON_SUBMIT}
          setOpenModal={setOpenEditModal}
          formInitialValues={getFormEditInitialValues}
        />
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

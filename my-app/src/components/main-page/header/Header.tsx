import React, { useState, FC } from "react";

import { FormAddConnected } from "../../../pages/main-page/MainPageConnectors";
import { Logo } from "../../common/logo/Logo";
import { SearchPanel } from "../search-panel/SearchPanel";

import {
  ADD_MOVIE_BUTTON_NAME,
  MODAL_ADD_MOVIE_TITLE,
  MODAL_ADD_BUTTON_OK,
  MODAL_ADD_BUTTON_CANCEL,
} from "../../../constants/mainPageConstants";

import { Modal } from "../../common/modal/Modal";

import { HeaderProps } from "./Header.interface";

import {
  HeaderWrapper,
  HeaderContainer,
  HeaderTop,
  ButtonAddMovies,
} from "./Header.style";

export const Header: FC<HeaderProps> = ({
  getMoviesDataRequest,
  postMovieRequest,
  resetMovieForm,
}): React.ReactElement => {
  const [openModal, setOpenModal] = useState(false);

  const onOkModalAddHandler = (): void => {
    postMovieRequest();
    setOpenModal(false);
    resetMovieForm();
  };

  const onCancelModalAddHandler = (): void => {
    resetMovieForm();
  };

  return (
    <HeaderWrapper>
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        title={MODAL_ADD_MOVIE_TITLE}
        okButtonText={MODAL_ADD_BUTTON_OK}
        cancelButtonText={MODAL_ADD_BUTTON_CANCEL}
        onOk={onOkModalAddHandler}
        onCancel={onCancelModalAddHandler}
      >
        <FormAddConnected />
      </Modal>
      <HeaderContainer>
        <HeaderTop>
          <Logo />
          <ButtonAddMovies onClick={() => setOpenModal(true)}>
            {ADD_MOVIE_BUTTON_NAME}
          </ButtonAddMovies>
        </HeaderTop>
        <SearchPanel getMoviesDataRequest={getMoviesDataRequest} />
      </HeaderContainer>
    </HeaderWrapper>
  );
};

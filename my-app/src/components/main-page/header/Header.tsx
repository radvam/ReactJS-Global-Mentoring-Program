import React, { useState, FC } from "react";

import { FormAddConnected } from "../../../pages/main-page/MainPageConnectors";
import { Logo } from "../../common/logo/Logo";
import { SearchPanel } from "../search-panel/SearchPanel";

import { formAddInitialValues } from "../../common/Form/form-movie/utils/FormMovieUtils";
import {
  ADD_MOVIE_BUTTON_NAME,
  MODAL_ADD_MOVIE_TITLE,
  MODAL_ADD_BUTTON_SUBMIT,
  MODAL_ADD_BUTTON_RESET,
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
}): React.ReactElement => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <HeaderWrapper>
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        title={MODAL_ADD_MOVIE_TITLE}
      >
        <FormAddConnected
          resetButtonText={MODAL_ADD_BUTTON_RESET}
          submitButtonText={MODAL_ADD_BUTTON_SUBMIT}
          setOpenModal={setOpenModal}
          formInitialValues={formAddInitialValues}
        />
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

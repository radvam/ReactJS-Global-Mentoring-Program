import React, { useState } from "react";

import { FormAdd } from "../form-add/FormAdd";
import { Logo } from "../../common/logo/Logo";
import { SearchPanel } from "../search-panel/SearchPanel";

import {
  ADD_MOVIE_BUTTON_NAME,
  MODAL_ADD_MOVIE_TITLE,
  MODAL_ADD_BUTTON_OK,
  MODAL_ADD_BUTTON_CANCEL,
} from "../../../constants/mainPageConstants";

import { Modal } from "../../common/modal/Modal";

import {
  HeaderWrapper,
  HeaderContainer,
  HeaderTop,
  ButtonAddMovies,
} from "./Header.style";

export const Header = (): React.ReactElement => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <HeaderWrapper>
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        title={MODAL_ADD_MOVIE_TITLE}
        okButtonText={MODAL_ADD_BUTTON_OK}
        cancelButtonText={MODAL_ADD_BUTTON_CANCEL}
      >
        <FormAdd />
      </Modal>
      <HeaderContainer>
        <HeaderTop>
          <Logo />
          <ButtonAddMovies onClick={() => setOpenModal(true)}>
            {ADD_MOVIE_BUTTON_NAME}
          </ButtonAddMovies>
        </HeaderTop>
        <SearchPanel />
      </HeaderContainer>
    </HeaderWrapper>
  );
};

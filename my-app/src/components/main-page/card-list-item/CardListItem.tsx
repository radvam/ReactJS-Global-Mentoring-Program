import React, { FC, useState } from "react";

import { CardListItemProps } from "./CardListItem.interface";

import {
  BUTTON_EDIT,
  BUTTON_DELETE,
  BUTTON_OPEN,
  BUTTON_CLOSE,
} from "../../../constants/mainPageConstants";

import {
  CardListItemWrapper,
  CardImageBlock,
  CardImage,
  CardTitle,
  CardGenre,
  CardName,
  CardDate,
  CardEditPanel,
  ButtonCLose,
  ButtonEdit,
  ButtonDelete,
  ButtonOpen,
} from "./CardListItem.style";

export const CardListItem: FC<CardListItemProps> = ({
  name,
  date,
  genres,
  imageSrc,
}): React.ReactElement => {
  const [showOpen, setShowOpen] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  const onMouseOverPosterHandler = (): void => {
    setShowOpen(true);
  };

  const onMouseOutPosterHandler = (): void => {
    setShowOpen(false);
  };

  const onClickCloseHandler = (): void => {
    setShowPanel(false);
  };

  const onClickOpenHandler = (): void => {
    setShowPanel(true);
  };

  return (
    <CardListItemWrapper>
      <CardImageBlock
        onMouseOver={onMouseOverPosterHandler}
        onMouseOut={onMouseOutPosterHandler}
      >
        <ButtonOpen showOpen={showOpen} onClick={onClickOpenHandler}>
          {BUTTON_OPEN}
        </ButtonOpen>
        <CardEditPanel showPanel={showPanel}>
          <ButtonCLose onClick={onClickCloseHandler}>
            {BUTTON_CLOSE}
          </ButtonCLose>
          <ButtonEdit>{BUTTON_EDIT}</ButtonEdit>
          <ButtonDelete>{BUTTON_DELETE}</ButtonDelete>
        </CardEditPanel>
        <CardImage src={imageSrc} alt="image" />
      </CardImageBlock>
      <CardTitle>
        <CardName>{name}</CardName>
        <CardDate>{date}</CardDate>
      </CardTitle>
      <CardGenre>{genres}</CardGenre>
    </CardListItemWrapper>
  );
};

import React, { FC, useState } from "react";

import { CardEditPanel } from "../card-edit-panel/CardEditPanel";

import { CardListItemProps } from "./CardListItem.interface";

import {
  BUTTON_OPEN,
} from "../../../constants/mainPageConstants";

import {
  CardListItemWrapper,
  CardImageBlock,
  CardImage,
  CardTitle,
  CardGenre,
  CardName,
  CardDate,
  ButtonOpen,
} from "./CardListItem.style";

export const CardListItem: FC<CardListItemProps> = ({
  id,
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
    <>
      <CardListItemWrapper>
        <CardImageBlock
          onMouseOver={onMouseOverPosterHandler}
          onMouseOut={onMouseOutPosterHandler}
        >
          <ButtonOpen showOpen={showOpen} onClick={onClickOpenHandler}>
            {BUTTON_OPEN}
          </ButtonOpen>
          <CardEditPanel
            id={id}
            name={name}
            showPanel={showPanel}
            onClickCloseHandler={onClickCloseHandler}
          />
          <CardImage src={imageSrc} alt="image" />
        </CardImageBlock>
        <CardTitle>
          <CardName>{name}</CardName>
          <CardDate>{date}</CardDate>
        </CardTitle>
        <CardGenre>{genres}</CardGenre>
      </CardListItemWrapper>
    </>
  );
};

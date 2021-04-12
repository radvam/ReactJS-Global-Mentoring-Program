import React, { FC, useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";

import { CardEditPanelConnected } from "../../../pages/main-page/MainPageConnectors";

import { transformArrayToString } from "../../../commonUtils/transformArrayToString";

import { CardListItemProps } from "./CardListItem.interface";

import {
  BUTTON_OPEN,
  DEFAULT_POSTER_URL,
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
  card,
}): React.ReactElement => {
  const { id, title, release_date, genres, poster_path } = card;
  const [showOpen, setShowOpen] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  const movieGenres = useMemo(() => transformArrayToString(genres), [genres]);
  const movieRealiseDate = useMemo(() => release_date?.slice(0, 4), [
    release_date,
  ]);

  const toggleShowPanel = useCallback(() => {
    setShowPanel(!showPanel);
  }, [showPanel]);

  const onMouseOverPosterHandler = (): void => {
    setShowOpen(true);
  };

  const onMouseOutPosterHandler = (): void => {
    setShowOpen(false);
  };

  const onErrorImgHandler = (e: React.BaseSyntheticEvent): void => {
    e.target.src = DEFAULT_POSTER_URL;
  };

  return (
    <CardListItemWrapper>
      <CardImageBlock
        onMouseOver={onMouseOverPosterHandler}
        onMouseOut={onMouseOutPosterHandler}
      >
        <ButtonOpen showOpen={showOpen} onClick={toggleShowPanel}>
          {BUTTON_OPEN}
        </ButtonOpen>
        <CardEditPanelConnected
          card={card}
          showPanel={showPanel}
          toggleShowPanel={toggleShowPanel}
        />
        <Link to={`/movie/${id}`}>
          <CardImage
            src={poster_path || DEFAULT_POSTER_URL}
            alt="image"
            onError={onErrorImgHandler}
          />
        </Link>
      </CardImageBlock>
      <CardTitle>
        <Link to={`/movie/${id}`}>
          <CardName>{title}</CardName>
        </Link>
        <CardDate>{movieRealiseDate}</CardDate>
      </CardTitle>
      <CardGenre>{movieGenres}</CardGenre>
    </CardListItemWrapper>
  );
};

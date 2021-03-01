import React, { FC } from "react";

import { CardListItem } from "../card-list-item/CardListItem";

import { CardListProps } from "./CardList.interface";

import { CardListWrapper } from "./CardList.style";

export const CardList: FC<CardListProps> = ({ cardListData }) => (
  <CardListWrapper>
    {cardListData.map(({ id, name, date, imageSrc, genres }) => (
      <CardListItem
        key={id}
        name={name}
        date={date}
        genres={genres}
        imageSrc={imageSrc}
      />
    ))}
  </CardListWrapper>
);

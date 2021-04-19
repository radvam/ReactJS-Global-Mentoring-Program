import React, { FC } from "react";

import { CardListItem } from "../card-list-item/CardListItem";

import { CardListProps } from "./CardList.interface";

import { CardListWrapper } from "./CardList.style";

export const CardList: FC<CardListProps> = ({
  cardListData,
}): React.ReactElement => (
  <CardListWrapper>
    {cardListData.map((card) => (
      <CardListItem key={card.id} card={card} />
    ))}
  </CardListWrapper>
);

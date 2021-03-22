import React, { FC } from "react";

import selectData from "./utils/SortPanelUtils";

import { SORT_PANEL_TITLE } from "../../../constants/mainPageConstants";

import { SortPanelProps } from "./SortPanel.interface";

import {
  SortPanelWrapper,
  SortPanelTitle,
  SortPanelSelect,
  SelectOption,
  Arrow,
} from "./SortPanel.style";

export const SortPanel: FC<SortPanelProps> = ({
  saveSortValue,
  toggleSortArrow,
  sortDescending,
}): React.ReactElement => {
  const onClickArrowHandler = (): void => {
    toggleSortArrow();
  };

  const sortPanelSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortByValue = e.target.value.toLowerCase();
    saveSortValue(sortByValue);
  };

  return (
    <SortPanelWrapper>
      <SortPanelTitle>{SORT_PANEL_TITLE}</SortPanelTitle>
      <SortPanelSelect
        defaultValue={selectData[0].value}
        onChange={sortPanelSelectHandler}
      >
        {selectData.map(({ id, value }) => (
          <SelectOption key={id} value={value}>
            {value}
          </SelectOption>
        ))}
      </SortPanelSelect>
      <Arrow topArrow={sortDescending} onClick={onClickArrowHandler} />
    </SortPanelWrapper>
  );
};

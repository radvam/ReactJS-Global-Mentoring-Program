import React, { useState, FC } from "react";

import { filterData } from "./utils/FilterPanelUtils";

import { FilterPanelProps } from "./FilterPanel.interface";

import { FilterPanelWrapper, FilterItem } from "./FilterPanel.style";

export const FilterPanel: FC<FilterPanelProps> = ({
  saveFilterValue,
}): React.ReactElement => {
  const [currentTab, setCurrentTab] = useState("1");

  const onClickFilterItemHandler = (e: Record<string, any>): void => {
    setCurrentTab(e.target.id);
    saveFilterValue(e.target.innerHTML.toLowerCase());
  };

  return (
    <FilterPanelWrapper>
      {filterData.map(({ id, name }) => (
        <FilterItem
          key={id}
          id={id}
          onClick={onClickFilterItemHandler}
          active={id === currentTab}
        >
          {name}
        </FilterItem>
      ))}
    </FilterPanelWrapper>
  );
};

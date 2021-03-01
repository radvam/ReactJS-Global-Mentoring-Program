import React, { useState } from "react";

import filterData from "./utils/FilterPanelUtils";

import { FilterPanelWrapper, FilterItem } from "./FilterPanel.style";

export const FilterPanel = (): React.ReactElement => {
  const [currentTab, setCurrentTab] = useState("1");

  const onClickFilterItem = (e: Record<string, any>): void => {
    setCurrentTab(e.target.id);
  };

  return (
    <FilterPanelWrapper>
      {filterData.map(({ id, name }) => (
        <FilterItem
          key={id}
          id={id}
          onClick={onClickFilterItem}
          active={id === currentTab}
        >
          {name}
        </FilterItem>
      ))}
    </FilterPanelWrapper>
  );
};

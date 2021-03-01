import React, { useState } from "react";

import selectData from "./utils/SortPanelUtils";

import { SORT_PANEL_TITLE } from "../../../constants/mainPageConstants";

import {
  SortPanelWrapper,
  SortPanelTitle,
  SortPanelSelect,
  SelectOption,
} from "./SortPanel.style";

export const SortPanel = (): React.ReactElement => {
  const [topArrow, setTopArrow] = useState(true);

  const onClickSelect = (): void => {
    setTopArrow(!topArrow);
  };

  return (
    <SortPanelWrapper topArrow={topArrow}>
      <SortPanelTitle>{SORT_PANEL_TITLE}</SortPanelTitle>
      <SortPanelSelect
        defaultValue={selectData[0].value}
        onClick={onClickSelect}
      >
        {selectData.map(({ id, value }) => (
          <SelectOption key={id} value={value}>
            {value}
          </SelectOption>
        ))}
      </SortPanelSelect>
    </SortPanelWrapper>
  );
};

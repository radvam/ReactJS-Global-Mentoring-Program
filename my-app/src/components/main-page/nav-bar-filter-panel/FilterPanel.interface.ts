export interface FilterItemProps {
  id: string;
  active?: boolean;
}

export interface FilterDataItem {
  id: string;
  name: string;
}

export interface FilterPanelProps {
  saveFilterValue: (value: string) => void;
}

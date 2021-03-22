export interface SelectDataItem {
  id: string;
  value: string;
}
export interface ArrowProps {
  topArrow: boolean;
}
export interface SortPanelProps {
  saveSortValue: (value: string) => void;
  toggleSortArrow: () => void;
  sortDescending: boolean;
}

import { Card } from "../main-content/MainContent.interface";
export interface CardEditPanelProps {
  showPanel: boolean;
  toggleShowPanel: () => void;
  card: Card;
}

export interface EditPanelWrapperProps {
  showPanel: boolean;
}

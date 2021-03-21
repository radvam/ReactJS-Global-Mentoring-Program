import { Movie } from "../../../store/mainPage/state";

export interface CardEditPanelProps {
  showPanel: boolean;
  toggleShowPanel: () => void;
  card: Movie;
}

export interface EditPanelWrapperProps {
  showPanel: boolean;
}

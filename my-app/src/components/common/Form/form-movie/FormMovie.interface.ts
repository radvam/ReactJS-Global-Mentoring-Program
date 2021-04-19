import { MovieForm } from "../../../../store/mainPage/state";

export interface FormMovieProps {
  setOpenModal: (openModal: boolean) => void;
  onSubmit: (movieForm: MovieForm) => Promise<void>;
  resetButtonText: string;
  submitButtonText: string;
  formInitialValues: MovieForm;
  id?: number;
}

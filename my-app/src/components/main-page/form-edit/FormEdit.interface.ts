import { Movie } from "../../../store/mainPage/state";

export interface FormEditProps {
  card: Movie;
  setFormTitle: (title: string) => void;
  setFormDate: (date: string) => void;
  setFormUrl: (url: string) => void;
  setFormGenres: (genres: string[]) => void;
  setFormOverview: (overview: string) => void;
  setFormRuntime: (runtime: number) => void;
}

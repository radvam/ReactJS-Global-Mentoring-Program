export interface FormAddProps {
  setFormTitle: (title: string) => void;
  setFormDate: (date: string) => void;
  setFormUrl: (url: string) => void;
  setFormGenres: (genres: string[]) => void;
  setFormOverview: (overview: string) => void;
  setFormRuntime: (runtime: number) => void;
}

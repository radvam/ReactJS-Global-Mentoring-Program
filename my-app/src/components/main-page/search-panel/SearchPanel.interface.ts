export interface SearchPanelProps {
  getMoviesDataRequest: (
    params?: Record<string, string | number | boolean> | undefined
  ) => Promise<void>;
}

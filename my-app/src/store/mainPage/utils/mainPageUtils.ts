import { MainPageState } from "../state";

export const prepareParamsObject = (mainPageState: MainPageState) => {
  const { filter, sortBy, sortDescending } = mainPageState;

  return {
    filter: filter === "all" ? "" : filter,
    sortBy: defineSortByValue(sortBy),
    sortOrder: sortDescending ? "desc" : "asc",
  };
};

const defineSortByValue = (sortBy: string): string => {
  switch (sortBy) {
    case "release date":
      return "release_date";
    case "rating":
      return "vote_average";
    case "id":
      return "id";
    default:
      return "";
  }
};

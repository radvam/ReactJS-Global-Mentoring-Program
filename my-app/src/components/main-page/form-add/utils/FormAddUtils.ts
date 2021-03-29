export const selectGenresData = [
  { value: "gold", label: "Crime" },
  { value: "lime", label: "Documentary" },
  { value: "green", label: "Horror" },
  { value: "cyan", label: "Comedy" },
  { value: "red", label: "Fantasy" },
  { value: "blue", label: "Animation" },
  { value: "lightSalmon", label: "Family" },
  { value: "brown", label: "Science Fiction" },
  { value: "crimson", label: "Action" },
  { value: "lightCoral", label: "Drama" },
  { value: "teal", label: "Romance" },
  { value: "silver", label: "Thriller" },
  { value: "slateGray", label: "Adventure" },
  { value: "darkSlateGrey", label: "History" },
  { value: "yellow", label: "Mystery" },
  { value: "rosyBrown", label: "Music" },
  { value: "bisque", label: "War" },
];

export const defineColorsByGenres = (genres: string[]): string[] => {
  const result: string[] = [];
  genres.forEach((item) => {
    selectGenresData.forEach(({ label, value }) => {
      if (label === item) {
        result.push(value);
      }
    });
  });
  return result;
};

export const defineGenresByColors = (array: string[]): string[] => {
  const result: string[] = [];
  array.forEach((item) => {
    selectGenresData.forEach(({ label, value }) => {
      if (value === item) {
        result.push(label);
      }
    });
  });
  return result;
};

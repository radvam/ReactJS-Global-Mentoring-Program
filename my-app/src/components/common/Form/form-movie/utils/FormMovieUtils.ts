import * as yup from "yup";

export const genresData = [
  { value: "Crime", id: 1 },
  { value: "Documentary", id: 2 },
  { value: "Horror", id: 3 },
  { value: "Comedy", id: 4 },
  { value: "Fantasy", id: 5 },
  { value: "Animation", id: 6 },
  { value: "Family", id: 7 },
  { value: "Science Fiction", id: 8 },
  { value: "Action", id: 9 },
  { value: "Drama", id: 10 },
  { value: "Romance", id: 11 },
  { value: "Thriller", id: 12 },
  { value: "Adventure", id: 13 },
  { value: "History", id: 14 },
  { value: "Mystery", id: 15 },
  { value: "Music", id: 16 },
  { value: "War", id: 17 },
];

export const formAddInitialValues = {
  title: "",
  release_date: "",
  poster_path: "",
  genres: [],
  overview: "",
  runtime: 0,
};

export const validationSchema = yup.object().shape({
  title: yup.string().required(),
  release_date: yup.date().required(),
  poster_path: yup.string().url().required(),
  genres: yup.array().defined().min(1).required(),
  overview: yup.string().required(),
  runtime: yup.number().min(1).required().integer(),
  id: yup.number(),
});

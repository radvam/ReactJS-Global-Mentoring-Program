import * as yup from "yup";

export const genresData = [
  { value: "Crime" },
  { value: "Documentary" },
  { value: "Horror" },
  { value: "Comedy" },
  { value: "Fantasy" },
  { value: "Animation" },
  { value: "Family" },
  { value: "Science Fiction" },
  { value: "Action" },
  { value: "Drama" },
  { value: "Romance" },
  { value: "Thriller" },
  { value: "Adventure" },
  { value: "History" },
  { value: "Mystery" },
  { value: "Music" },
  { value: "War" },
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

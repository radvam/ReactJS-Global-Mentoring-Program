import React, { FC } from "react";
import { useFormik } from "formik";

import { genresData, validationSchema } from "./utils/FormMovieUtils";

import { FormMovieProps } from "./FormMovie.interface";

import {
  ID_LABEL,
  TITLE_LABEL,
  DATE_LABEL,
  URL_LABEL,
  GENRE_LABEL,
  OVERVIEW_LABEL,
  RUNTIME_LABEL,
} from "../../../../constants/mainPageConstants";

import {
  FormMovieWrapper,
  FormItem,
  Title,
  Error,
  ButtonGroup,
  Submit,
  Reset,
  MovieId,
} from "./FormMovie.style";

export const FormMovie: FC<FormMovieProps> = ({
  setOpenModal,
  onSubmit,
  formInitialValues,
  resetButtonText,
  submitButtonText,
  id,
}): React.ReactElement => {
  const formik = useFormik({
    initialValues: formInitialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setOpenModal(false);
      onSubmit(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <FormMovieWrapper>
        {id && (
          <FormItem>
            <Title>{ID_LABEL}</Title>
            <MovieId>{id}</MovieId>
          </FormItem>
        )}
        <FormItem>
          <Title>{TITLE_LABEL}</Title>
          {formik.errors.title && formik.touched.title && (
            <Error>{formik.errors.title}</Error>
          )}
          <input
            type="text"
            name="title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            placeholder={"Title here"}
          />
        </FormItem>
        <FormItem>
          <Title>{DATE_LABEL}</Title>
          {formik.errors.release_date && formik.touched.release_date && (
            <Error>{formik.errors.release_date}</Error>
          )}
          <input
            type="date"
            name="release_date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.release_date}
          />
        </FormItem>
        <FormItem>
          <Title>{URL_LABEL}</Title>
          {formik.errors.poster_path && formik.touched.poster_path && (
            <Error>{formik.errors.poster_path}</Error>
          )}
          <input
            type="text"
            name="poster_path"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.poster_path}
            placeholder={"Movie URL here"}
          />
        </FormItem>
        <FormItem>
          <Title>{GENRE_LABEL}</Title>
          {formik.errors.genres && formik.touched.genres && (
            <Error>{formik.errors.genres}</Error>
          )}
          <select
            name="genres"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.genres}
            multiple
          >
            {genresData.map(({ value }) => (
              <option value={value}>{value}</option>
            ))}
          </select>
        </FormItem>
        <FormItem>
          <Title>{OVERVIEW_LABEL}</Title>
          {formik.errors.overview && formik.touched.overview && (
            <Error>{formik.errors.overview}</Error>
          )}
          <input
            type="text"
            name="overview"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.overview}
            placeholder={"Overview here"}
          />
        </FormItem>
        <FormItem>
          <Title>{RUNTIME_LABEL}</Title>
          {formik.errors.runtime && formik.touched.runtime && (
            <Error>{formik.errors.runtime}</Error>
          )}
          <input
            type="number"
            name="runtime"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.runtime}
            min={0}
          />
        </FormItem>
        <ButtonGroup>
          <Reset type="reset" onClick={formik.handleReset}>
            {resetButtonText}
          </Reset>
          <Submit type="submit" disabled={formik.isSubmitting}>
            {submitButtonText}
          </Submit>
        </ButtonGroup>
      </FormMovieWrapper>
    </form>
  );
};

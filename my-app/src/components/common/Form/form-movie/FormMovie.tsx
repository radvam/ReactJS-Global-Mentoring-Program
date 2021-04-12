import React, { FC } from "react";
import { Formik } from "formik";

import { genresData } from "./utils/FormMovieUtils";

import { FormMovieProps } from "./FormMovie.interface";

import {
  REQUIRED,
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
  return (
    <Formik
      initialValues={formInitialValues}
      validate={(values) => {
        const errors: Record<string, any> = {};
        if (!values.title) {
          errors.title = REQUIRED;
        }
        if (!values.release_date) {
          errors.release_date = REQUIRED;
        }
        if (!values.poster_path) {
          errors.poster_path = REQUIRED;
        }
        if (!values.genres.length) {
          errors.genres = REQUIRED;
        }
        if (!values.overview) {
          errors.overview = REQUIRED;
        }
        if (!values.overview) {
          errors.runtime = REQUIRED;
        }
        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm({});
        setOpenModal(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleReset,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <FormMovieWrapper>
            {id && (
              <FormItem>
                <Title>{ID_LABEL}</Title>
                <MovieId>{id}</MovieId>
              </FormItem>
            )}
            <FormItem>
              <Title>{TITLE_LABEL}</Title>
              {errors.title && touched.title && <Error>{errors.title}</Error>}
              <input
                type="text"
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
                placeholder={"Title here"}
              />
            </FormItem>
            <FormItem>
              <Title>{DATE_LABEL}</Title>
              {errors.release_date && touched.release_date && (
                <Error>{errors.release_date}</Error>
              )}
              <input
                type="date"
                name="release_date"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.release_date}
              />
            </FormItem>
            <FormItem>
              <Title>{URL_LABEL}</Title>
              {errors.poster_path && touched.poster_path && (
                <Error>{errors.poster_path}</Error>
              )}
              <input
                type="text"
                name="poster_path"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.poster_path}
                placeholder={"Movie URL here"}
              />
            </FormItem>
            <FormItem>
              <Title>{GENRE_LABEL}</Title>
              {errors.genres && touched.genres && (
                <Error>{errors.genres}</Error>
              )}
              <select
                name="genres"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.genres}
                multiple
              >
                {genresData.map(({ value }) => (
                  <option value={value}>{value}</option>
                ))}
              </select>
            </FormItem>
            <FormItem>
              <Title>{OVERVIEW_LABEL}</Title>
              {errors.overview && touched.overview && (
                <Error>{errors.overview}</Error>
              )}
              <input
                type="text"
                name="overview"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.overview}
                placeholder={"Overview here"}
              />
            </FormItem>
            <FormItem>
              <Title>{RUNTIME_LABEL}</Title>
              {errors.runtime && touched.runtime && (
                <Error>{errors.runtime}</Error>
              )}
              <input
                type="number"
                name="runtime"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.runtime}
                min={0}
              />
            </FormItem>
            <ButtonGroup>
              <Reset type="reset" onClick={handleReset}>
                {resetButtonText}
              </Reset>
              <Submit type="submit" disabled={isSubmitting}>
                {submitButtonText}
              </Submit>
            </ButtonGroup>
          </FormMovieWrapper>
        </form>
      )}
    </Formik>
  );
};

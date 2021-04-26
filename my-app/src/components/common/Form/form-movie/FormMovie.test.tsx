import * as React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import { FormMovie } from "./FormMovie";
import { formAddInitialValues } from "./utils/FormMovieUtils";

import { ID_LABEL } from "../../../../constants/mainPageConstants";

const newMovie = {
  title: "Tomb Raider 5",
  release_date: "2021-26-04",
  poster_path:
    "https://image.tmdb.org/t/p/w500/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg",
  overview:
    "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
  genres: ["Action", "Adventure"],
  runtime: 118,
};

const onSubmit = jest.fn();
const setOpenModal = jest.fn();
const submitButtonText = "Submit";
const resetButtonText = "Reset";

describe("FormMovie:", () => {
  test("should initialize", () => {
    const { asFragment } = render(
      <FormMovie
        setOpenModal={setOpenModal}
        onSubmit={onSubmit}
        formInitialValues={formAddInitialValues}
        submitButtonText={submitButtonText}
        resetButtonText={resetButtonText}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("should be reset form when click Reset button", () => {
    render(
      <FormMovie
        setOpenModal={setOpenModal}
        onSubmit={onSubmit}
        formInitialValues={formAddInitialValues}
        submitButtonText={submitButtonText}
        resetButtonText={resetButtonText}
      />
    );

    const nameTextField = screen.getByTestId("title");
    const resetButton = screen.getByTestId("reset");
    const changeTitle = "change title";

    fireEvent.change(nameTextField, {
      target: {
        value: changeTitle,
      },
    });

    expect(nameTextField.getAttribute("value")).toEqual(changeTitle);

    fireEvent.click(resetButton);

    expect(nameTextField.getAttribute("value")).toEqual(
      formAddInitialValues.title
    );
  });

  test("should be validate form when slick Submit button", async () => {
    render(
      <FormMovie
        setOpenModal={setOpenModal}
        onSubmit={onSubmit}
        formInitialValues={formAddInitialValues}
        submitButtonText={submitButtonText}
        resetButtonText={resetButtonText}
      />
    );
    const submitButton = screen.getByTestId("submit");

    fireEvent.click(submitButton);

    await waitFor(async () => {
      const message = await screen.findByText("title is a required field");
      expect(message).toBeTruthy();
    });
  });

  test("should be render id form item", async () => {
    render(
      <FormMovie
        setOpenModal={setOpenModal}
        onSubmit={onSubmit}
        formInitialValues={formAddInitialValues}
        submitButtonText={submitButtonText}
        resetButtonText={resetButtonText}
        id={12345}
      />
    );

    const expectedItem = screen.getByText(ID_LABEL);

    expect(expectedItem).toBeInTheDocument();
  });

  test("should be called functions by Submit", async () => {
    render(
      <FormMovie
        setOpenModal={setOpenModal}
        onSubmit={onSubmit}
        formInitialValues={newMovie}
        submitButtonText={submitButtonText}
        resetButtonText={resetButtonText}
      />
    );

    const handleSubmit = () => {
      setOpenModal();
      onSubmit();
    };

    const form = screen.getByTestId("form");
    form.onsubmit = handleSubmit;

    fireEvent.submit(form);

    expect(setOpenModal).toHaveBeenCalled();
    expect(onSubmit).toHaveBeenCalled();
  });
});

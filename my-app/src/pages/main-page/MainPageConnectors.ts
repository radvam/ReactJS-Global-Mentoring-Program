import { connect } from "react-redux";
import { AppState } from "../../store/appState";

import { MainContent } from "../../components/main-page/main-content/MainContent";
import { Header } from "../../components/main-page/header/Header";
import { FilterPanel } from "../../components/main-page/nav-bar-filter-panel/FilterPanel";
import { SortPanel } from "../../components/main-page/nav-bar-sort-panel/SortPanel";
import { CardEditPanel } from "../../components/main-page/card-edit-panel/CardEditPanel";
import { FormAdd } from "../../components/main-page/form-add/FormAdd";
import { FormEdit } from "../../components/main-page/form-edit/FormEdit";

import {
  getMoviesDataSelector,
  getMovieLoadingSelector,
  getFilterValueSelector,
  sortDescValueSelector,
  getSortValueSelector,
} from "../../store/mainPage/selectors";

import {
  getMoviesDataRequest,
  saveFilterValue,
  toggleSortArrow,
  saveSortValue,
  deleteMovieRequest,
  setFormTitle,
  setFormDate,
  setFormUrl,
  setFormGenres,
  setFormOverview,
  setFormRuntime,
  postMovieRequest,
  saveSelectedMovie,
  putMovieRequest,
  resetMovieForm,
} from "../../store/mainPage/actions";

export const MainContentConnected = connect(
  (state: AppState) => ({
    movies: getMoviesDataSelector(state),
    loading: getMovieLoadingSelector(state),
    filterValue: getFilterValueSelector(state),
    sortValue: getSortValueSelector(state),
    sortOrder: sortDescValueSelector(state),
  }),
  {
    getMoviesDataRequest,
  }
)(MainContent);

export const HeaderConnected = connect(null, {
  getMoviesDataRequest,
  postMovieRequest,
  resetMovieForm,
})(Header);

export const FilterPanelConnected = connect(null, {
  saveFilterValue,
})(FilterPanel);

export const SortPanelConnected = connect(
  (state: AppState) => ({
    sortDescending: sortDescValueSelector(state),
  }),
  { toggleSortArrow, saveSortValue }
)(SortPanel);

export const CardEditPanelConnected = connect(null, {
  deleteMovieRequest,
  saveSelectedMovie,
  putMovieRequest,
  resetMovieForm,
})(CardEditPanel);

export const FormAddConnected = connect(
  null,
  {
    setFormTitle,
    setFormDate,
    setFormUrl,
    setFormGenres,
    setFormOverview,
    setFormRuntime,
  }
)(FormAdd);

export const FormEditConnected = connect(null, {
  setFormTitle,
  setFormDate,
  setFormUrl,
  setFormGenres,
  setFormOverview,
  setFormRuntime,
})(FormEdit);

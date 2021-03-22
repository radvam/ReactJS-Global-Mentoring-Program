import React, { FC, useEffect } from "react";
import { Spin } from "antd";

import { NavBar } from "../nav-bar/NavBar";
import { FilmsCounter } from "../films-counter/FilmsCounter";
import { CardList } from "../card-list/CardList";
import { Spinner } from "../../common/Spinner/Spinner.style";

import { MainContentProps } from "./MainContent.interface";

import { MainContentWrapper } from "./MainContent.style";

export const MainContent: FC<MainContentProps> = ({
  getMoviesDataRequest,
  loading,
  movies,
  filterValue,
  sortValue,
  sortOrder,
}): React.ReactElement => {
  useEffect(() => {
    getMoviesDataRequest();
  }, [
    getMoviesDataRequest,
    filterValue,
    sortValue,
    sortOrder,
  ]);

  return (
    <Spin spinning={loading} indicator={<Spinner />}>
      <MainContentWrapper>
        <NavBar />
        <FilmsCounter count={movies.length} />
        {movies && <CardList cardListData={movies} />}
      </MainContentWrapper>
    </Spin>
  );
};

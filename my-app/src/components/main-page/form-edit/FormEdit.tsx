import React, { FC, useMemo } from "react";
import moment from "moment";
import { Input, InputNumber, Select, DatePicker } from "antd";

import {
  selectGenresData,
  defineColorsByGenres,
} from "../form-add/utils/FormAddUtils";
import { TagRender } from "../form-add/utils/TagRender";

import { FormEditProps } from "./FormEdit.interface";

import { FormAddWrapper, FormItem, Title } from "../form-add/FormAdd.style";
import { MovieId } from "./FormEdit.style";

export const FormEdit: FC<FormEditProps> = ({ card }): React.ReactElement => {
  const {
    id,
    title,
    release_date,
    poster_path,
    overview,
    genres,
    runtime,
  } = card;
  const defaultDate = useMemo(() => moment(release_date, "YYYY-MM-DD"), [
    release_date,
  ]);
  const defaultGenres = useMemo(() => defineColorsByGenres(genres), [genres]);

  return (
    <FormAddWrapper>
      <FormItem>
        <Title>Movie id</Title>
        <MovieId>{id}</MovieId>
      </FormItem>
      <FormItem>
        <Title>Title</Title>
        <Input
          placeholder="Enter a title"
          defaultValue={title}
          size={"large"}
        />
      </FormItem>
      <FormItem>
        <Title>Release date</Title>
        <DatePicker
          style={{ width: "100%" }}
          size={"large"}
          defaultValue={defaultDate}
        />
      </FormItem>
      <FormItem>
        <Title>Movie url</Title>
        <Input
          placeholder="Movie URL here"
          size={"large"}
          defaultValue={poster_path}
        />
      </FormItem>
      <FormItem>
        <Title>Genre</Title>
        <Select
          mode="multiple"
          placeholder="Select Genre"
          showArrow
          tagRender={TagRender}
          style={{ width: "100%" }}
          options={selectGenresData}
          defaultValue={defaultGenres}
          size={"large"}
        />
      </FormItem>
      <FormItem>
        <Title>Overview</Title>
        <Input.TextArea
          placeholder="Overview here"
          size={"large"}
          defaultValue={overview}
          autoSize
          maxLength={500}
        />
      </FormItem>
      <FormItem>
        <Title>Runtime</Title>
        <InputNumber size={"large"} defaultValue={runtime} min={0} />
      </FormItem>
    </FormAddWrapper>
  );
};

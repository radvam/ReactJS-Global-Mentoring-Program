import React, { FC } from "react";
import moment from "moment";

import { Input, InputNumber, Select, DatePicker } from "antd";

import { selectGenresData, defineGenresByColors } from "./utils/FormAddUtils";
import { TagRender } from "./utils/TagRender";

import { FormAddProps } from "./FormAdd.interface";

import { FormAddWrapper, FormItem, Title } from "./FormAdd.style";

export const FormAdd: FC<FormAddProps> = ({
  setFormTitle,
  setFormDate,
  setFormUrl,
  setFormGenres,
  setFormOverview,
  setFormRuntime,
}): React.ReactElement => {
  const onChangeTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormTitle(e.target.value);
  };
  const onChangeDateHandler = (e: any) => {
    const date: string = moment(e, "YYYY-MM-DD").format("YYYY-MM-DD");
    setFormDate(date);
  };
  const onChangeUrlHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormUrl(e.target.value);
  };
  const onChangeGenresHandler = (genres: string[]) => {
    const genre = defineGenresByColors(genres);
    setFormGenres(genre);
  };
  const onChangeOverviewHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormOverview(e.target.value);
  };
  const onChangeRuntimeHandler = (n: number) => {
    setFormRuntime(n);
  };

  return (
    <FormAddWrapper>
      <FormItem>
        <Title>Title</Title>
        <Input
          placeholder="Enter a title"
          size={"large"}
          onChange={onChangeTitleHandler}
        />
      </FormItem>
      <FormItem>
        <Title>Release date</Title>
        <DatePicker
          style={{ width: "100%" }}
          size={"large"}
          onChange={onChangeDateHandler}
        />
      </FormItem>
      <FormItem>
        <Title>Movie url</Title>
        <Input
          placeholder="Movie URL here"
          size={"large"}
          onChange={onChangeUrlHandler}
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
          size={"large"}
          onChange={onChangeGenresHandler}
        />
      </FormItem>
      <FormItem>
        <Title>Overview</Title>
        <Input.TextArea
          placeholder="Overview here"
          size={"large"}
          rows={1}
          maxLength={500}
          onChange={onChangeOverviewHandler}
        />
      </FormItem>
      <FormItem>
        <Title>Runtime</Title>
        <InputNumber
          placeholder="Runtime here"
          size={"large"}
          min={0}
          onChange={onChangeRuntimeHandler}
        />
      </FormItem>
    </FormAddWrapper>
  );
};

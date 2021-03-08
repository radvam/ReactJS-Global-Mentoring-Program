import React from "react";

import { Input, Select, DatePicker } from "antd";

import { SelectGenresData } from "./utils/FormAddUtils";
import { TagRender } from "./utils/TagRender";

import { FormAddWrapper, FormItem, Title } from "./FormAdd.style";

export const FormAdd = (): React.ReactElement => {
  return (
    <FormAddWrapper>
      <FormItem>
        <Title>Title</Title>
        <Input placeholder="Enter a title" />
      </FormItem>
      <FormItem>
        <Title>Release date</Title>
        <DatePicker style={{ width: "100%" }} />
      </FormItem>
      <FormItem>
        <Title>Movie url</Title>
        <Input placeholder="Movie URL here" />
      </FormItem>
      <FormItem>
        <Title>Genre</Title>
        <Select
          mode="multiple"
          placeholder="Select Genre"
          showArrow
          tagRender={TagRender}
          style={{ width: "100%" }}
          options={SelectGenresData}
        />
      </FormItem>
      <FormItem>
        <Title>Overview</Title>
        <Input placeholder="Overview here" />
      </FormItem>
      <FormItem>
        <Title>Runtime</Title>
        <Input placeholder="Runtime here" />
      </FormItem>
    </FormAddWrapper>
  );
};

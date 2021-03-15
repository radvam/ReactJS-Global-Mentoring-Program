import React from "react";

import { Input, InputNumber, Select, DatePicker } from "antd";

import { selectGenresData } from "./utils/FormAddUtils";
import { TagRender } from "./utils/TagRender";

import { FormAddWrapper, FormItem, Title } from "./FormAdd.style";

export const FormAdd = (): React.ReactElement => {
  return (
    <FormAddWrapper>
      <FormItem>
        <Title>Title</Title>
        <Input placeholder="Enter a title" size={"large"} />
      </FormItem>
      <FormItem>
        <Title>Release date</Title>
        <DatePicker style={{ width: "100%" }} size={"large"} />
      </FormItem>
      <FormItem>
        <Title>Movie url</Title>
        <Input placeholder="Movie URL here" size={"large"} />
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
        />
      </FormItem>
      <FormItem>
        <Title>Overview</Title>
        <Input.TextArea
          placeholder="Overview here"
          size={"large"}
          rows={1}
          maxLength={500}
        />
      </FormItem>
      <FormItem>
        <Title>Runtime</Title>
        <InputNumber placeholder="Runtime here" size={"large"} min={0} />
      </FormItem>
    </FormAddWrapper>
  );
};

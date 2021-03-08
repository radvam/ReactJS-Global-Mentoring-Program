import React from "react";

import { Input, Select, DatePicker } from "antd";

import { SelectGenresData } from "../form-add/utils/FormAddUtils";
import { TagRender } from "../form-add/utils/TagRender";

import { FormEditProps } from "./FormEdit.interface";

import { FormAddWrapper, FormItem, Title } from "../form-add/FormAdd.style";
import { MovieId } from "./FormEdit.style";

export default class FormEdit extends React.Component<FormEditProps> {
  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render(): React.ReactElement {
    return (
      <FormAddWrapper>
        <FormItem>
          <Title>Movie id</Title>
          <MovieId>{this.props.id}</MovieId>
        </FormItem>
        <FormItem>
          <Title>Title</Title>
          <Input placeholder="Enter a title" defaultValue={this.props.name} />
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
  }
}

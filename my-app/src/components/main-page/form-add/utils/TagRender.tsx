import React from "react";
import { Tag } from "antd";


export const TagRender = (props: Record<string, any>): React.ReactElement => {
  const { label, value, closable, onClose } = props;

  return (
    <Tag
      color={value}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 3 }}
    >
      {label}
    </Tag>
  );
};

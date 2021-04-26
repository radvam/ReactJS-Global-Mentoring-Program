import * as React from "react";

import { composeQueryString } from "./composeQueryString";

const params: Record<string, any> = {
  a: 1,
  b: 2,
  c: 3,
};

describe("ComposeQueryString hook:", () => {
  const hook = (values: Record<string, any>) => composeQueryString(values);

  test("it should compose params string", () => {
    const expectedString = hook(params);

    expect(expectedString).toStrictEqual("?a=1&b=2&c=3");
  });

  test("it should compose empty string", () => {
    const expectedString = hook({});

    expect(expectedString).toStrictEqual("");
  });
});

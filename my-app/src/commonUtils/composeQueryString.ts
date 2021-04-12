export const composeQueryString = (
  params: Record<string, any> | undefined
): string => {
  const parts: string[] = [];

  const add = (key: string, value: string) => {
    parts.push(`${key}=${value}`);
  };

  for (const key in params) {
    if (!params.hasOwnProperty(key)) {
      continue;
    }
    const obj = params[key];

    if (Array.isArray(obj)) {
      obj.forEach((value) => add(key, value));
    } else {
      add(key, obj);
    }
  }
  return parts.length ? `?${parts.join("&")}` : "";
};

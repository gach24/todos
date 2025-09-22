export const getIntParam = (searchParams: URLSearchParams, key: string) => {
  const value = searchParams.get(key);
  return value ? parseInt(value) : undefined;
};

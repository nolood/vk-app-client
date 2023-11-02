export const checkRequired = () => {
  return {
    name: "required",
    validator: (value: string | any[]) => !!value.length,
  };
};

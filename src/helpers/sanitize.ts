export const sanitize = <T extends Object>(onSubmit: (data: T) => void) => {
  return (data: any) => {
    Object.keys(data).forEach((k) => {
      if (data[k] === '') {
        //@ts-ignore
        data[k] = undefined;
      }
    });
    onSubmit(data);
  };
};

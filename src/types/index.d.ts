export type TreeAddress = {
  name: String;
  count?: Number;
  uri?: String;
  children?: TreeAddress[];
};

export type Address = {
  name: String;
  uri: String;
  province: String;
  city: String;
};

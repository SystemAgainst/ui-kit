import { OrderEnum, LabelType, OrderType, ValueType } from "../types";

const MockData = {
  labels: [
    {
      value: "name",
      label: "Name",
      noSort: false
    },
    {
      value: "age",
      label: "Age",
      noSort: false
    },
    {
      value: "location",
      label: "Location",
      noSort: true
    }
  ] as LabelType[],

  values: [
    {
      name: "Alice",
      age: 29,
      location: "New York"
    },
    {
      name: "Bob",
      age: 35,
      location: "San Francisco"
    },
    {
      name: "Charlie",
      age: 42,
      location: "Boston"
    }
  ] as ValueType[],

  orderObj: {
    order: OrderEnum.asc,
    orderBy: "name",
    setOrder: (order: OrderEnum) => {
      console.log(`Set order to: ${order}`);
    },
    setOrderBy: (orderBy: string) => {
      console.log(`Set orderBy to: ${orderBy}`);
    }
  } as OrderType
};

export default MockData;

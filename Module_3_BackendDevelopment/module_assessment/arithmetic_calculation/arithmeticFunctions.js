const add = (value_1, value_2) => {
  return Number(value_1) + Number(value_2);
};

const sub = (value_1, value_2) => {
  return Number(value_1) - Number(value_2);
};

const multiply = (value_1, value_2) => {
  return Number(value_1) * Number(value_2);
};

const divide = (value_1, value_2) => {
  return Number(value_1) / Number(value_2);
};

module.exports = {
  add,
  sub,
  multiply,
  divide,
};

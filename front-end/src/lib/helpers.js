import moment from "moment";

// Function to get the last 12 months
export const getLast12Months = () => {
  let months = [];
  for (let i = 11; i >= 0; i--) {
    months.push(moment().subtract(i, "months").format("YYYY-MM"));
  }

  return months;
};

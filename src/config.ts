const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

const Config = {
  baseApiUrl: BASE_API_URL,
};

const currencyFormatter = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export default Config;
export { currencyFormatter };
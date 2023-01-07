const Config = {
  baseApiUrl: "https://api.codefest.com/hbapi",
};

const currencyFormatter = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export default Config;
export { currencyFormatter };
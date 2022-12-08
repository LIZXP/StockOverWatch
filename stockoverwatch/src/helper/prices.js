import { stocksPriceDataFinn, monthStockPriceFinn } from "./helperFunctions";
/**
 * returns an array.
 * first item is stock prices.
 * second item is monthly prices.
 */
const getPrices = async () => {
  const timeNow = Date.now();
  const prevTime = window.localStorage.getItem("time") || 0;
  const timeDiff = timeNow - prevTime;
  let stocksData = window.localStorage.getItem("stocks");
  let monthlyPriceData = window.localStorage.getItem("monthlyPrice");
  const needsRefresh = (
    !stocksData
    || stocksData[0] === null
    || !monthlyPriceData
    || monthlyPriceData[0] === null
    || timeDiff > 61000
  );
  if (needsRefresh) {
    await Promise.all(stocksPriceDataFinn()).then((res) => {
      window.localStorage.setItem("stocks", JSON.stringify(res));
      window.localStorage.setItem("time", Date.now());
    });
    await Promise.all(monthStockPriceFinn()).then((res) => {
      window.localStorage.setItem("monthlyPrice", JSON.stringify(res));
      window.localStorage.setItem("time", Date.now());
    });
    stocksData = window.localStorage.getItem("stocks");
    monthlyPriceData = window.localStorage.getItem("monthlyPrice");
  }
  return [
    JSON.parse(stocksData),
    JSON.parse(monthlyPriceData)
  ];
}

export { getPrices }

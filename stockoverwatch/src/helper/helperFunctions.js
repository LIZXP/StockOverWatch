/* eslint-disable */
import axios from "axios";
export const stocksPriceDataFinn = () => {
  const stocksSymbols = [
    {
      name: "AAPL",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Apple_Computer_Logo_rainbow.svg/879px-Apple_Computer_Logo_rainbow.svg.png",
    },
    {
      name: "META",
      img: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/meta-icon.png",
    },
    {
      name: "GOOGL",
      img: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
    },
    {
      name: "NFLX",
      img: "https://cdn.iconscout.com/icon/free/png-256/netflix-3521600-2945044.png",
    },
    {
      name: "AMZN",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2048px-Amazon_icon.svg.png",
    },
    {
      name: "TSLA",
      img: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
    },
    { name: "MSFT", img: "https://logodix.com/logo/522161.png" },
    {
      name: "MMM",
      img: "https://freepngimg.com/thumb/logo/128379-logo-3m-free-download-image.png",
    },
    {
      name: "NVDA",
      img: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/02-nvidia-logo-color-grn-500x200-4c25-p@2x.png",
    },
    {
      name: "AMD",
      img: "https://w7.pngwing.com/pngs/503/644/png-transparent-advanced-micro-devices-logo-graphics-cards-video-adapters-central-processing-unit-amd-turion-computer-angle-text-trademark-thumbnail.png",
    },
    {
      name: "EA",
      img: "https://www.pngmart.com/files/22/EA-Logo-PNG-Clipart.png",
    },
    {
      name: "KO",
      img: "https://seeklogo.com/images/C/coca-cola-circle-logo-A9EBD3B00A-seeklogo.com.png",
    },

    {
      name: "ADP",
      img: "https://1000logos.net/wp-content/uploads/2021/04/ADP-logo.png",
    },
    {
      name: "PYPL",
      img: "https://img.favpng.com/23/1/16/logo-paypal-x-com-image-brand-png-favpng-W8rZ0i6YCFWBRzeeqxHVrh465.jpg",
    },
    {
      name: "ZBRA",
      img: "https://w7.pngwing.com/pngs/57/317/png-transparent-zebra-technologies-label-printer-thermal-transfer-printing-zebra-white-mammal-animals.png",
    },
  ];
  // const fulllist = [
  //   "AAPL",
  //   "META",
  //   "GOOGL",
  //   "NFLX",
  //   "AMZN",
  //   "TSLA",
  // "MSFT",
  // "JNJ",
  // "MMM",
  // "NVDA",
  // "AMD",
  // "EA",
  // "KO",
  // "ORCL",
  // "INTC",
  // "IBM",
  // "ADP",
  // "PYPL",
  // "ZBRA",
  // "BABA",
  // ];

  const baseUrl = "https://finnhub.io/api/v1/quote";
  const token = "cdmjq6aad3ibvooj3ue0cdmjq6aad3ibvooj3ueg";

  const allPromise = [];
  const getStocksData = (stock) => {
    return axios
      .get(`${baseUrl}?symbol=${stock}&token=${token}`)
      .catch((error) => {
        console.error("FinnError", error.message);
      });
  };
  stocksSymbols.map((ssymb) => {
    allPromise.push(
      getStocksData(ssymb.name)
        .then((res) => {
          return { ...res.data, symbol: ssymb.name, img: ssymb.img };
        })
        .catch((e) => console.log(e))
    );
  });
  return allPromise;
};

export const monthStockPriceFinn = () => {
  const stocksSymbols = [
    {
      name: "AAPL",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Apple_Computer_Logo_rainbow.svg/879px-Apple_Computer_Logo_rainbow.svg.png",
    },
    {
      name: "META",
      img: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/meta-icon.png",
    },
    {
      name: "GOOGL",
      img: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
    },
    {
      name: "NFLX",
      img: "https://cdn.iconscout.com/icon/free/png-256/netflix-3521600-2945044.png",
    },
    {
      name: "AMZN",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2048px-Amazon_icon.svg.png",
    },
    {
      name: "TSLA",
      img: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
    },
    { name: "MSFT", img: "https://logodix.com/logo/522161.png" },

    {
      name: "MMM",
      img: "https://freepngimg.com/thumb/logo/128379-logo-3m-free-download-image.png",
    },
    {
      name: "NVDA",
      img: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/02-nvidia-logo-color-grn-500x200-4c25-p@2x.png",
    },
    {
      name: "AMD",
      img: "https://w7.pngwing.com/pngs/503/644/png-transparent-advanced-micro-devices-logo-graphics-cards-video-adapters-central-processing-unit-amd-turion-computer-angle-text-trademark-thumbnail.png",
    },
    {
      name: "EA",
      img: "https://www.pngmart.com/files/22/EA-Logo-PNG-Clipart.png",
    },
    {
      name: "KO",
      img: "https://seeklogo.com/images/C/coca-cola-circle-logo-A9EBD3B00A-seeklogo.com.png",
    },
    {
      name: "ADP",
      img: "https://1000logos.net/wp-content/uploads/2021/04/ADP-logo.png",
    },
    {
      name: "PYPL",
      img: "https://img.favpng.com/23/1/16/logo-paypal-x-com-image-brand-png-favpng-W8rZ0i6YCFWBRzeeqxHVrh465.jpg",
    },
    {
      name: "ZBRA",
      img: "https://w7.pngwing.com/pngs/57/317/png-transparent-zebra-technologies-label-printer-thermal-transfer-printing-zebra-white-mammal-animals.png",
    },
  ];
  const baseUrl = "https://finnhub.io/api/v1/stock/candle";
  const token = "cdmjq6aad3ibvooj3ue0cdmjq6aad3ibvooj3ueg";
  const UNIXtsFrom = "1639590164";
  const UNIXtsTo = "1670089364";
  const allPromiseCandle = [];
  const getStockPriceData = (stock) => {
    return axios
      .get(
        `${baseUrl}?symbol=${stock}&resolution=D&from=${UNIXtsFrom}&to=${UNIXtsTo}&token=${token}`
      )
      .catch((error) => {
        console.error("FinnError", error.message);
      });
  };
  stocksSymbols.map((ssymb) => {
    allPromiseCandle.push(
      getStockPriceData(ssymb.name)
        .then((res) => {
          return { ...res.data, symbol: ssymb.name, img: ssymb.img };
        })
        .catch((e) => console.log(e))
    );
  });

  return allPromiseCandle;
};

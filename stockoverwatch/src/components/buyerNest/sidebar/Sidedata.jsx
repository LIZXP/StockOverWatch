import React from "react";
import CottageTwoToneIcon from "@mui/icons-material/CottageTwoTone";
import AccountBalanceWalletTwoToneIcon from "@mui/icons-material/AccountBalanceWalletTwoTone";
import ShowChartTwoToneIcon from "@mui/icons-material/ShowChartTwoTone";
import QueryStatsTwoToneIcon from "@mui/icons-material/QueryStatsTwoTone";
import ManageAccountsTwoToneIcon from "@mui/icons-material/ManageAccountsTwoTone";
export const Sidedata = [
  {
    title: "Home",
    icon: <CottageTwoToneIcon />,
    link: "/",
  },
  {
    title: "Account",
    icon: <AccountBalanceWalletTwoToneIcon />,
    link: "/",
  },
  {
    title: "Stocks",
    icon: <ShowChartTwoToneIcon />,
    link: "/buyernest/stocks",
  },
  {
    title: "Insights",
    icon: <QueryStatsTwoToneIcon />,
    link: "/",
  },
  {
    title: "Profile",
    icon: <ManageAccountsTwoToneIcon />,
    link: "/buyernest/profile",
  },
];

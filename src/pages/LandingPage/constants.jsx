import React from "react";
import { Girl, Sip, TrendingUp, Wallet } from "@mui/icons-material";

export const AVAILABLE_CALCULATORS = [
  {
    path: "",
    title: "SIP",
    subTitle:
      "Unlock the power of financial planning with our SIP Calculator. Easily estimate potential returns on your investments through Systematic Investment Plans.",
    icon: <Sip sx={{ fontSize: 80, color: '#00B386' }} />,
  },
  {
    path: "",
    title: "Lumpsum",
    subTitle:
      "Empower your financial decisions with our Lumpsum Calculator. Gain insights into potential returns on your investments with a one-time contribution.",
    icon: <Wallet sx={{ fontSize: 80, color: '#00B386' }} />,
  },
  {
    path: "",
    title: "Mutual Funds (MF)",
    subTitle:
      "Explore a world of investment opportunities designed to suit your goals. Invest wisely, diversify your portfolio, and watch your wealth flourish.",
      icon: <TrendingUp sx={{ fontSize: 80, color: '#00B386' }} />,
  },
  {
    path: "",
    title: "Sukanya Samriddhi Yojana (SSY)",
    subTitle: `Invest in your daughter's future with Sukanya Samriddhi Yojana – a secure path to financial empowerment, education, and marriage goals.`,
    icon: <Girl sx={{ fontSize: 80, color: '#00B386' }} />,
  },
];

import React from "react";
import {
  Balance,
  CalendarMonth,
  ContentCut,
  CurrencyRupee,
  Elderly,
  Girl,
  Loop,
  Moving,
  Percent,
  Receipt,
  Sip,
  TrendingUp,
  Wallet,
  Work,
} from "@mui/icons-material";

export const AVAILABLE_CALCULATORS = [
  {
    path: "",
    title: "SIP",
    subTitle:
      "Unlock the power of financial planning with our SIP Calculator. Easily estimate potential returns on your investments through Systematic Investment Plans.",
    icon: <Sip sx={{ fontSize: 80, color: "#00B386" }} />,
  },
  {
    path: "",
    title: "Lumpsum",
    subTitle:
      "Empower your financial decisions with our Lumpsum Calculator. Gain insights into potential returns on your investments with a one-time contribution.",
    icon: <Wallet sx={{ fontSize: 80, color: "#00B386" }} />,
  },
  {
    path: "",
    title: "Mutual Funds (MF)",
    subTitle:
      "Explore a world of investment opportunities designed to suit your goals. Invest wisely, diversify your portfolio, and watch your wealth flourish.",
    icon: <TrendingUp sx={{ fontSize: 80, color: "#00B386" }} />,
  },
  {
    path: "",
    title: "Sukanya Samriddhi Yojana (SSY)",
    subTitle: `Invest in your daughter's future with Sukanya Samriddhi Yojana – a secure path to financial empowerment, education, and marriage goals.`,
    icon: <Girl sx={{ fontSize: 80, color: "#00B386" }} />,
  },
  {
    path: "",
    title: "Public Provident Fund (PPF)",
    subTitle: `Secure your financial future with Public Provident Fund (PPF). A trusted long-term investment avenue offering tax benefits and stable returns. Start building wealth and ensuring financial well-being with PPF today.`,
    icon: <Elderly sx={{ fontSize: 65, color: "#00B386" }} />,
  },
  {
    path: "",
    title: "Employee Provident Fund (EPF)",
    subTitle: `Ensure a stable future with Employee Provident Fund (EPF). A reliable retirement savings scheme that secures your financial well-being. Invest in your tomorrow, contribute to EPF today.`,
    icon: <Elderly sx={{ fontSize: 65, color: "#00B386" }} />,
  },
  {
    path: "",
    title: "National Pension Scheme (NPS)",
    subTitle: `Plan for a secure retirement with National Pension System (NPS). Enjoy flexibility, tax benefits, and a systematic approach to building a financial cushion for your future. Start investing in your retirement journey with NPS today.`,
    icon: <Elderly sx={{ fontSize: 65, color: "#00B386" }} />,
  },
  {
    path: "",
    title: "Recurring Deposit (RD)",
    subTitle: `Secure your financial goals with Recurring Deposit (RD). A disciplined savings scheme offering steady returns. Start building a strong financial foundation with regular contributions to RD and watch your savings grow.`,
    icon: <Loop sx={{ fontSize: 65, color: "#00B386" }} />,
  },
  {
    path: "",
    title: "Fixed Deposit (RD)",
    subTitle: `Grow your savings with Fixed Deposit (FD). A reliable and secure investment option providing stable returns. Invest with confidence and watch your money multiply. Start your journey to financial stability with FD today.`,
    icon: <CurrencyRupee sx={{ fontSize: 65, color: "#00B386" }} />,
  },
  {
    path: "",
    title: "EMI",
    subTitle: `Realize your dreams with EMI (Equated Monthly Installment). Transform aspirations into reality through manageable and structured payments. Make major purchases accessible and affordable. Step into the future, one EMI at a time.`,
    icon: <CalendarMonth sx={{ fontSize: 65, color: "#00B386" }} />,
  },
  {
    path: "",
    title: "Simple Interest",
    subTitle: `Experience financial simplicity with Simple Interest. A straightforward method of earning or paying interest on a principal amount. Explore the ease of calculations and transparency in your financial transactions with Simple Interest.`,
    icon: <Percent sx={{ fontSize: 65, color: "#00B386" }} />,
  },
  {
    path: "",
    title: "Compound Interest",
    subTitle: `Maximize your returns with Compound Interest. Watch your money grow exponentially over time as interest is calculated on both the principal and accumulated interest. Harness the power of compounding for a prosperous financial future.`,
    icon: <Percent sx={{ fontSize: 65, color: "#00B386" }} />,
  },
  {
    path: "",
    title: "National Savings Certificate (NSC)",
    subTitle: `Secure your savings with National Savings Certificate (NSC). A low-risk, government-backed investment option providing guaranteed returns. Invest in stability and watch your money grow. Start your journey to financial security with NSC today.`,
    icon: <Receipt sx={{ fontSize: 65, color: "#00B386" }} />,
  },
  {
    path: "",
    title: "Step Up SIP",
    subTitle: `Elevate your investment strategy with Step-Up SIP. A progressive approach to mutual fund investing, allowing gradual increases in contributions over time. Build wealth systematically and adapt to your evolving financial goals with Step-Up SIP.`,
    icon: <Moving sx={{ fontSize: 65, color: "#00B386" }} />,
  },
  {
    path: "",
    title: "Income Tax",
    subTitle: `Navigate the tax landscape with Income Tax. Fulfill your civic responsibility while contributing to nation-building. Explore deductions, exemptions, and stay tax-smart for a secure financial future. File your returns diligently and shape your financial narrative.`,
    icon: <ContentCut sx={{ fontSize: 65, color: "#00B386" }} />,
  },
  {
    path: "",
    title: "Gratuity",
    subTitle: `Secure your future with Gratuity. A significant employee benefit providing financial support upon retirement or resignation. Invest in your workforce's well-being and ensure a rewarding journey beyond the workplace. Plan ahead with Gratuity for a prosperous tomorrow.`,
    icon: <Balance sx={{ fontSize: 65, color: "#00B386" }} />,
  },
  {
    path: "",
    title: "Atal Pension Yojna (APY)",
    subTitle: `Empower your pension planning with the Atal Pension Yojana (APY) Calculator. Easily estimate contributions and potential benefits. Secure your retirement with this government-backed scheme. Plan your financial future wisely using the APY Calculator.`,
    icon: <Elderly sx={{ fontSize: 65, color: "#00B386" }} />,
  },
  {
    path: "",
    title: "Take Home Salary",
    subTitle: `Calculate your net earnings with our Take-Home Salary Calculator. Easily determine your actual income after deductions. Plan your budget and financial goals with confidence, ensuring a clear understanding of your financial picture.`,
    icon: <Work sx={{ fontSize: 65, color: "#00B386" }} />,
  },
  {
    path: "",
    title: "Inflation",
    subTitle: `Navigate the impact of rising prices with Inflation Awareness. Understand how it erodes purchasing power over time. Plan and invest wisely to protect your wealth against the effects of inflation, ensuring a resilient and prosperous financial future.`,
    icon: <Moving sx={{ fontSize: 65, color: "#00B386" }} />,
  },
];

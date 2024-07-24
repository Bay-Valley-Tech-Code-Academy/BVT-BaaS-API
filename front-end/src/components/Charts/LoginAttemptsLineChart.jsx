import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { Target } from "lucide-react";
import { getLast12Months } from "../../lib/helpers";
import moment from "moment";
// import { Square3Stack3DIcon } from "@heroicons/react/24/outline";

const initializeData = (months) => {
  return months.map((month) => ({
    month,
    login_successful: 0,
    login_failed: 0,
  }));
};

const chartConfig = {
  type: "line",
  height: 240,
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#FF1654", "#247BA0"],
    stroke: {
      lineCap: "round",
      curve: "smooth",
    },
    markers: {
      size: 0,
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  },
};

const populateData = (data, attempts) => {
  attempts.forEach((attempt) => {
    const month = moment(attempt.date).format("YYYY-MM");
    const monthData = data.find((d) => d.month === month);
    if (monthData) {
      if (attempt.audit_type === "login_successful") {
        monthData.login_successful += 1;
      } else {
        monthData.login_failed += 1;
      }
    }
  });
};

export default function LoginAttemptsLineChart({ attempts }) {
  const months = getLast12Months();
  const loginData = initializeData(months);
  populateData(loginData, attempts);
  const failedAttempts = {
    name: "login_failed",
    data: loginData.map((login) => login.login_failed),
  };
  const successAttempts = {
    name: "login_successful",
    data: loginData.map((login) => login.login_successful),
  };
  chartConfig.options.xaxis.categories = months;
  chartConfig.series = [failedAttempts, successAttempts];

  return (
    <Card className="col-start-1 row-start-1">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
      >
        <div className="w-max rounded-lg bg-gray-900 p-5 text-white">
          <Target className="size-6" />
        </div>
        <div>
          <Typography variant="h6" color="blue-gray">
            Login Attempts
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="max-w-sm font-normal"
          >
            Detailed Insights into User Authentication Attempts
          </Typography>
        </div>
      </CardHeader>
      <CardBody className="px-2 pb-0">
        <Chart {...chartConfig} />
      </CardBody>
    </Card>
  );
}

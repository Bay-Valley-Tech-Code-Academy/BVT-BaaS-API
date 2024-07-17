import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { User } from "lucide-react";
import { getLast12Months } from "../../lib/helpers";
import moment from "moment";
// import { Square3Stack3DIcon } from "@heroicons/react/24/outline";

const chartConfig = {
  type: "bar",
  height: 240,
  series: [
    {
      name: "Sales",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
  ],
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
    colors: ["#020617"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 2,
      },
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
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
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

const populateData = (data, users) => {
  users.forEach((user) => {
    const month = moment(user.created_at).format("YYYY-MM");
    const monthData = data.find((d) => d.month === month);
    if (monthData) {
      monthData.users += 1;
    }
  });
};

const initializeData = (months) => {
  return months.map((month) => ({
    month,
    users: 0,
  }));
};

export default function UserSignupsLineChart({ users }) {
  const months = getLast12Months();
  const userData = initializeData(months);
  populateData(userData, users);

  chartConfig.options.xaxis.categories = months;

  chartConfig.series = [
    {
      name: "Users",
      data: userData.map((data) => data.users),
    },
  ];

  return (
    <Card className="col-start-1 row-start-2">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
      >
        <div className="w-max rounded-lg bg-gray-900 p-5 text-white">
          <User className="size-6" />
        </div>
        <div>
          <Typography variant="h6" color="blue-gray">
            User Signups
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="max-w-sm font-normal"
          >
            Insights into Monthly User Signup Activity
          </Typography>
        </div>
      </CardHeader>
      <CardBody className="px-2 pb-0">
        <Chart {...chartConfig} />
      </CardBody>
    </Card>
  );
}

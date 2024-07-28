import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { Clock } from "lucide-react";
import moment from "moment";

export default function RecentLoginsTable({ recentLogins }) {
  console.log(recentLogins);
  return (
    <Card className="col-start-2 row-span-2">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
      >
        <div className="w-max rounded-lg bg-gray-900 p-5 text-white">
          <Clock className="size-6" />
        </div>
        <div>
          <Typography variant="h6" color="blue-gray">
            Recent Logins
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="max-w-sm font-normal"
          >
            Insights into Login Activity
          </Typography>
        </div>
      </CardHeader>
      <CardBody className="px-4 pb-4">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
            <thead class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Project
                </th>
                <th scope="col" class="px-6 py-3">
                  Email
                </th>
                <th scope="col" class="px-6 py-3">
                  IP Address
                </th>
                <th scope="col" class="px-6 py-3">
                  Date
                </th>
                <th scope="col" class="px-6 py-3">
                  Time
                </th>
              </tr>
            </thead>
            <tbody>
              {recentLogins.map((login) => {
                const adjustedWithTimezone = moment.tz(
                  login.created_at,
                  "America/Los_Angeles",
                );
                const date = moment(adjustedWithTimezone).format("MM/DD/YYYY");
                const time = moment(adjustedWithTimezone).format("h:mma");
                return (
                  <tr class="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800">
                    <th
                      scope="row"
                      class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                    >
                      {login.projectName}
                    </th>
                    <td class="px-6 py-4">{login.email}</td>
                    <td class="px-6 py-4">{login.ip_address}</td>
                    <td class="px-6 py-4">{date}</td>
                    <td class="px-6 py-4">{time}</td>
                  </tr>
                );
              })}
              {recentLogins.length < 10 &&
                new Array(10 - recentLogins.length).fill(null).map((_, idx) => (
                  <tr
                    key={idx}
                    class="h-12 border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800"
                  >
                    <th
                      scope="row"
                      class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                    ></th>
                    <td class="px-6 py-4"></td>
                    <td class="px-6 py-4"></td>
                    <td class="px-6 py-4"></td>
                    <td class="px-6 py-4"></td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
}

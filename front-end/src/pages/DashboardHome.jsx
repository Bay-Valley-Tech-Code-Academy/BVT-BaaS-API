import React from "react";
import { useAudit, useUsers } from "../api/queries";
import LoginAttemptsBarChart from "../components/Charts/LoginAttemptsLineChart";
import PageHeaderNoSearch from "../components/PageHeaderNoSearch";

import UserSignupsLineChart from "../components/Charts/UserSignupsBarChart";
import moment from "moment";
import { Card } from "flowbite-react";
import { CardBody, CardHeader, Typography } from "@material-tailwind/react";

const sortLogins = (data) => {
  return data.sort((a, b) => {
    return moment(b.created_at).diff(moment(a.created_at));
  });
};

export default function DashboardHome() {
  const { data: projectAudits, status: auditStatus } = useAudit();
  const { data: projectUsers, status: userStatus } = useUsers();
  const [selectedProjectId, setSelectedProjectId] = React.useState(null);

  function handleProjectChange(projectId) {
    setSelectedProjectId(+projectId);
  }
  if (auditStatus === "pending" || userStatus === "pending") {
    return <p>loading...</p>;
  }
  if (auditStatus === "error" || userStatus === "error") {
    return <p>error...</p>;
  }

  const attempts = selectedProjectId
    ? projectAudits
        .filter((project) => project.project_id === selectedProjectId)
        .reduce((acc, project) => {
          return acc.concat(project.audits);
        }, [])
    : projectAudits.reduce((acc, project) => acc.concat(project.audits), []);

  const users = selectedProjectId
    ? projectUsers
        .filter((project) => project.project_id === selectedProjectId)
        .reduce((acc, project) => acc.concat(project.users), [])
    : projectUsers.reduce((acc, project) => acc.concat(project.users), []);

  const recentLogins = sortLogins(
    attempts.filter((attempt) => attempt.audit_type === "login_successful"),
  )
    .slice(0, 10)
    .map((login) => {
      console.log(login);
      console.log(users);
      const { email } = users.find((user) => user.user_id === login.user_id);
      return { ...login, email };
    });

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <PageHeaderNoSearch path="Dashboard" header="Home" />
        <ProjectSelect
          onProjectChange={handleProjectChange}
          options={projectUsers.map((project) => ({
            name: project.name,
            id: project.project_id,
          }))}
        />
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-8">
        <LoginAttemptsBarChart attempts={attempts} />
        <UserSignupsLineChart users={users} />
        <RecentLoginsTable recentLogins={recentLogins} />
      </div>
    </div>
  );
}

function RecentLoginsTable({ recentLogins }) {
  return (
    <Card className="col-start-2 row-span-2">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
      >
        <div className="w-max rounded-lg bg-gray-900 p-5 text-white">
          {/* <User className="size-6" /> */}
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
            Insights into Monthly User Signup Activity
          </Typography>
        </div>
      </CardHeader>
      <CardBody className="px-2 pb-0">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
            <thead class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
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
                const date = moment(login.created_at).format("MM/DD/YYYY");
                const time = moment(login.created_at).format("h:mma");
                return (
                  <tr class="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800">
                    <th
                      scope="row"
                      class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                    >
                      {login.email}
                    </th>
                    <td class="px-6 py-4">{login.ip_address}</td>
                    <td class="px-6 py-4">{date}</td>
                    <td class="px-6 py-4">{time}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
}

function ProjectSelect({ options, onProjectChange }) {
  return (
    <form className="max-w-sm">
      <label
        htmlFor="projects"
        className="mb-2 block text-sm font-medium text-gray-900"
      >
        Select a Project
      </label>
      <select
        onChange={(e) => onProjectChange(e.target.value)}
        id="projects"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
      >
        <option defaultValue>All</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </form>
  );
}

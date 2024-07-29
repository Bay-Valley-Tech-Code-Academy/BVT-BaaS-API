import React from "react";
import { useAudit, useProjectUsers } from "../api/queries";
import LoginAttemptsBarChart from "../components/Charts/LoginAttemptsLineChart";
import PageHeaderNoSearch from "../components/PageHeaderNoSearch";

import UserSignupsLineChart from "../components/Charts/UserSignupsBarChart";
import moment from "moment";

import RecentLoginsTable from "../components/RecentLoginsTable";

const sortLogins = (data) => {
  return data.sort((a, b) => {
    return moment(b.created_at).diff(moment(a.created_at));
  });
};

export default function DashboardHome() {
  const { data: projectAudits, status: auditStatus } = useAudit();
  const { data: projectUsers, status: userStatus } = useProjectUsers();
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
      const { name } = projectAudits.find(
        (project) => project.project_id === login.project_id,
      );
      const { email } = users.find((user) => user.user_id === login.user_id);
      return { ...login, email, projectName: name };
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
      <div className="grid grid-cols-2 grid-rows-2 items-start gap-8">
        <LoginAttemptsBarChart attempts={attempts} />
        <UserSignupsLineChart users={users} />
        <RecentLoginsTable recentLogins={recentLogins} />
      </div>
    </div>
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

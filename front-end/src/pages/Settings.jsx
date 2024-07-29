import SettingsUserStorage from "../components/SettingComponents/SettingsUserStorage";
import SettingsNotifications from "../components/SettingComponents/SettingsNotifications";
import SettingsDeleteAccount from "../components/SettingComponents/SettingsDeleteAccount";
import PageHeaderNoSearch from "../components/PageHeaderNoSearch";
import { useAccount, useProjectUsers } from "../api/queries";
import SettingsProjectStorage from "../components/SettingComponents/SettingProjectStorage";

export default function Settings() {
  const { data: account, status: accountStatus } = useAccount();
  const { data: projects, status: projectUserStatus } = useProjectUsers();
  if (accountStatus === "pending" || projectUserStatus === "pending") {
    return <p>Loading....</p>;
  }
  if (accountStatus === "error" || projectUserStatus === "error") {
    return <p>Error</p>;
  }
  const users = projects.reduce(
    (acc, project) => acc + project.users.length,
    0,
  );

  return (
    <>
      <PageHeaderNoSearch path="Dashboard / Settings" header="Settings" />
      <div className="flex">
        <SettingsUserStorage
          users={users}
          maxUsers={account.max_users * account.max_projects}
        />
        <SettingsProjectStorage
          projects={projects.length}
          maxProjects={account.max_projects}
        />
        <SettingsNotifications />
        <SettingsDeleteAccount />
      </div>
    </>
  );
}

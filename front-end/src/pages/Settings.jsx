import SettingsUserStorage from "../components/SettingComponents/SettingsUserStorage";
import SettingsNotifications from "../components/SettingComponents/SettingsNotifications";
import SettingsDeleteAccount from "../components/SettingComponents/SettingsDeleteAccount";
import PageHeaderNoSearch from "../components/PageHeaderNoSearch";

export default function Settings() {
  return (
    <>
      <PageHeaderNoSearch path="Dashboard / Settings" header="Settings" />
      <div className="flex">
        <SettingsUserStorage />
        <SettingsNotifications />
        <SettingsDeleteAccount />
      </div>
    </>
  );
}

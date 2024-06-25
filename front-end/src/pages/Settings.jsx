import SettingsUserStorage from "../components/SettingComponents/SettingsUserStorage";
import SettingsNotifications from "../components/SettingComponents/SettingsNotifications";
import PageHeaderNoSearch from "../components/PageHeaderNoSearch";

export default function Settings() {
  return (
    <>
      <SettingsUserStorage />
      <SettingsNotifications />
      <PageHeaderNoSearch path="Dashboard / Settings" header="Settings" />
    </>
  );
}

import SettingsUserStorage from "../components/SettingComponents/SettingsUserStorage";
import SettingsNotifications from "../components/SettingComponents/SettingsNotifications";
import SettingsDeleteAccount from "../components/SettingComponents/SettingsDeleteAccount";

export default function Settings() {
  return (
    <div className="flex">
      <SettingsUserStorage />
      <SettingsNotifications />
      <SettingsDeleteAccount />
    </div>
  );
}

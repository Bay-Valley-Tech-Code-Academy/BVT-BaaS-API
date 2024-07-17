import PageHeaderNoSearch from "../components/PageHeaderNoSearch";
import SuccessfulLogins from '../components/HomeComponents/SuccessfulLogins'

export default function DashboardHome() {
  return (
    <>
      <PageHeaderNoSearch path="Dashboard" header="Home" />

      <div id="home-components" className="flex">

        <SuccessfulLogins />
        <SuccessfulLogins />
      </div>

    </>
  );
}

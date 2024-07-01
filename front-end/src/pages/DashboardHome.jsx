import { ProjectModal } from "../components/ProjectModal";
import PageHeaderNoSearch from "../components/PageHeaderNoSearch";

export default function DashboardHome() {
  return (
    <>
      <PageHeaderNoSearch path="Dashboard" header="Home" />
      <div className="mt-14">
        <ProjectModal />
      </div>
    </>
  );
}

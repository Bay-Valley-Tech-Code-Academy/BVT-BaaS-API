import { useNavigate } from "react-router-dom";
import { useAuth } from "../api/queries";
import DashboardLoading from "./DashboardLoading";

export default function ProtectedRoute({ children }) {
  const { isError, isLoading } = useAuth();
  const navigate = useNavigate();
  if (isLoading) {
    return <DashboardLoading />;
  }
  if (isError) {
    navigate("/auth/login");
  }

  return children;
}

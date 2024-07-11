import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../api/queries";
import React from "react";
export default function AuthLayout() {
  const { data, isLoading, isError } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isLoading && !isError && data) {
      return navigate("/dashboard");
    }
  }, [data, isError, isLoading]);

  return (
    <div className="flex h-screen w-full flex-col lg:flex-row">
      <Outlet />
      <div className="bg-muted hidden items-center justify-center lg:flex lg:h-full lg:w-full">
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhvPAgeITaWtjCVgCp-dDyKHIn_oWoN5oBeIeVIVp7rAeiA4mLhaBETglp-7VeqcfWFzhOLmI4ptDwnkL1QqVuhowFIi5p4vfYKNtQDDXAWn962UihAwQZpvViYey3Eyvi5dv9GTUZjdOo/s0/cybersecurity.jpg"
          alt="image"
        />
      </div>
    </div>
  );
}

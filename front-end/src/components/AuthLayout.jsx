import { Outlet } from "react-router-dom";
export default function AuthLayout() {
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

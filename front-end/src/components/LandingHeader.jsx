import { Link } from "react-router-dom";
export default function LandingHeader() {
  return (
    <div className="relative h-screen pt-10">
      <div className="absolute inset-0 bg-landing-blue-100 [clip-path:polygon(0%_0%,100%_0%,100%_90%,0%_100%)]"></div>
      <div className="relative mx-auto max-w-7xl">
        <header className="flex justify-between">
          <Link className="flex items-center gap-3 text-white" to="/">
            <div className="size-12 rounded-full bg-gray-100"></div>
            <span className="text-base">BVTAuth</span>
          </Link>
          <nav className="flex gap-3">
            <Link
              to="/auth/login"
              className="grid h-12 w-32 place-content-center rounded-lg border border-white text-base text-white transition-colors hover:bg-landing-purple-200 hover:text-white"
            >
              Login
            </Link>
            <Link
              to="/auth/signup"
              className="grid h-12 w-32 place-content-center rounded-lg bg-white text-base text-landing-purple-200 transition-colors hover:bg-landing-purple-200 hover:text-white"
            >
              Sign up
            </Link>
          </nav>
        </header>
        <div className="mx-auto mt-32 max-w-3xl space-y-8 text-balance text-center text-white">
          <h1 className="text-6xl font-bold">
            <span className="text-landing-turquoise">Authentication</span> Made{" "}
            <br />
            Simple
          </h1>
          <p className="text-base">
            Our authentication service is dedicated to securing access with
            ease, providing robust protection without compromising user
            experience.
          </p>
        </div>
        <div className="mt-12">
          <img
            className="mx-auto h-[600px] w-[900px] rounded-xl object-cover object-top shadow-lg"
            src="/dashboard.png"
          />
        </div>
      </div>
    </div>
  );
}

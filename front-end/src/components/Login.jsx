import { Link, useNavigate } from "react-router-dom";
import { Mail, LockKeyhole } from "lucide-react";
import { useLoginOrganization } from "../api/mutations";
import FormButton from "./FormButton";

export default function Login() {
  const { mutate, isPending, isError } = useLoginOrganization();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = e.target.elements;
    mutate(
      { email: email.value, password: password.value },
      {
        onSuccess: () => {
          navigate("/dashboard");
        },
      },
    );
  }
  return (
    <div className="flex h-full items-center justify-center bg-landing-blue-100 px-6 py-12 xl:px-10">
      <div className="mx-auto grid w-[320px] gap-4 text-white md:w-[340px] xl:w-[360px]">
        <div className="mb-6 grid gap-2 text-center">
          <h1 className="text-3xl">BVTAuth</h1>
          <p className="text-muted-foreground text-balance font-medium">
            Login to your account
          </p>
        </div>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="relative grid gap-2">
            <label htmlFor="email" className="font-light">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="m@example.com"
              className="rounded px-3 py-1.5 text-black outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-landing-blue-100"
              required
            />
            <div className="absolute bottom-0 right-0 flex h-9 items-center justify-center rounded bg-landing-turquoise p-1 px-1.5">
              <Mail className="size-5 text-white" />
            </div>
          </div>
          <div className="relative grid gap-2">
            <label htmlFor="password" className="font-light">
              Password
            </label>
            <input
              className="rounded px-3 py-1.5 text-black outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-landing-blue-100"
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              required
            />
            <div className="absolute bottom-0 right-0 flex h-9 items-center justify-center rounded bg-landing-turquoise p-1 px-1.5">
              <LockKeyhole className="size-5 text-white" />
            </div>
          </div>
          <FormButton isPending={isPending}>Login</FormButton>
          <div className="relative h-4">
            <div className="text-muted absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 bg-landing-blue-100 px-2 text-xs text-landing-gray-50">
              OR
            </div>
            <div className="absolute top-[60%] h-[1px] w-full bg-landing-gray-50"></div>
          </div>
        </form>
        <Link
          to="/auth/signup"
          className="inline-flex w-full items-center justify-center rounded border border-landing-turquoise bg-transparent py-1.5 text-landing-turquoise outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-landing-blue-100"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}

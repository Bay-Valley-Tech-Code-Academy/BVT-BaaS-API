import {
  ArrowLeft,
  ArrowLeftCircle,
  ArrowRight,
  ArrowRightCircle,
  Check,
  CheckCircle2,
  Cloud,
  Fingerprint,
  Star,
  Target,
  UserCircle2,
  Waypoints,
} from "lucide-react";
import React from "react";

export default function LandingPage() {
  return (
    <div className="h-dvh">
      <div className="relative h-full bg-landing-blue-100">
        <LandingNav />
        <div className="mx-auto max-w-md space-y-6 px-4 pb-8 pt-44 text-center text-white">
          <h1 className="text-[calc(2.5rem+1vw)] font-bold">
            <span className="text-landing-turquoise">Authentication</span> Made
            Simple
          </h1>
          <p className="text-pretty leading-6">
            Our authentication service is dedicated to securing access with
            ease, providing robust protection without compromising user
            experience.
          </p>
        </div>
        <DashboardSnippet />
      </div>
      <div className="mx-auto max-w-screen-xl pt-40">
        <div className="md grid grid-cols-1 items-center gap-4 px-6 py-4 sm:grid-cols-2 md:grid-cols-8">
          <div className="col-span-1 h-16 w-full rounded-md bg-gray-500 md:col-span-2"></div>
          <div className="col-span-1 h-16 w-full rounded-md bg-gray-500 md:col-span-2"></div>
          <div className="col-span-1 h-16 w-full rounded-md bg-gray-500 md:col-span-2"></div>
          <div className="col-span-1 h-16 w-full rounded-md bg-gray-500 md:col-span-2"></div>
        </div>
        <div className="space-y-4 px-6 pb-8 pt-20 text-center">
          <h2 className="text-[calc(1.5rem+1vw)] font-bold text-landing-gray-300">
            Our Solution For Your Business
          </h2>
          <p className="text-sm text-landing-gray-50">
            We make it easy for users to user our platform, that's why we
            provide this benefit.
          </p>
        </div>
        <div className="grid grid-cols-1 justify-items-center gap-6 px-6 py-4 sm:grid-cols-2 sm:items-center lg:grid-cols-12">
          <div className="col-span-1 h-[276px] w-full max-w-[300px] space-y-2 rounded-md border px-6 pt-6 sm:justify-self-end lg:col-span-3">
            <div className="flex size-12 items-center justify-center rounded-md bg-landing-purple-100">
              <Fingerprint className="size-8 text-landing-purple-200" />
            </div>
            <h3 className="text-lg font-bold">Multifactor Auth</h3>
            <p className="text-sm text-landing-gray-50">
              All information and transactions will be well excrypted and double
              security in every activity. Safer transactions, calmer users.
            </p>
          </div>
          <div className="col-span-1 h-[276px] w-full max-w-[300px] space-y-2 rounded-md border px-6 pt-6 sm:justify-self-start lg:col-span-3">
            <div className="flex size-12 items-center justify-center rounded-md bg-landing-purple-100">
              <Waypoints className="size-8 text-landing-purple-200" />
            </div>
            <h3 className="text-lg font-bold">API Integration</h3>
            <p className="text-sm text-landing-gray-50">
              Seamlessly integrate with your existing systems through robust and
              secure APIs.
            </p>
          </div>
          <div className="col-span-1 h-[276px] w-full max-w-[300px] space-y-2 rounded-md border px-6 pt-6 sm:justify-self-end lg:col-span-3">
            <div className="flex size-12 items-center justify-center rounded-md bg-landing-purple-100">
              <Cloud className="size-8 text-landing-purple-200" />
            </div>
            <h3 className="text-lg font-bold">User Management</h3>
            <p className="text-sm text-landing-gray-50">
              Efficiently manage user roles, permissions, and access levels with
              intuitive administrative tools.
            </p>
          </div>
          <div className="col-span-1 h-[276px] w-full max-w-[300px] space-y-2 rounded-md border px-6 pt-6 sm:justify-self-start lg:col-span-3">
            <div className="flex size-12 items-center justify-center rounded-md bg-landing-purple-100">
              <Target className="size-8 text-landing-purple-200" />
            </div>
            <h3 className="text-lg font-bold">Real-Time Alerts</h3>
            <p className="text-sm text-landing-gray-50">
              Stay informed with real-time monitoring and alerts for suspicious
              activities and potential security threats.
            </p>
          </div>
        </div>
        <div className="space-y-6 px-6 pb-6 pt-12 text-center">
          <h2 className="text-[calc(1.5rem+1vw)] font-bold text-landing-gray-300">
            Our pricing
          </h2>
          <p className="text-sm text-landing-gray-50">
            Pay securely online and manage the booking via desktop or via the
            mobile app.
          </p>
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm font-medium">Monthly</span>
            <label className="btn-switch rounded-full has-[:focus]:ring-2 has-[:focus]:ring-landing-blue-200/80 has-[:focus]:ring-offset-2">
              <input type="checkbox" />
              <span className="btn-slider btn-round"></span>
            </label>
            <span className="text-sm font-medium">Anually</span>
          </div>
        </div>
        <div className="grid grid-cols-1 justify-items-center gap-4 lg:grid-cols-3 lg:justify-items-stretch lg:gap-6 lg:px-6">
          <div className="col-span-1 h-[580px] w-[300px] space-y-2 rounded-md px-4 pt-8 shadow-lg lg:w-full">
            <h2 className="text-center text-xl font-bold text-landing-gray-300">
              Standard
            </h2>
            <p className="text-center text-sm text-landing-gray-50">
              The national average of buying a cup of coffee
            </p>
            <div className="flex items-baseline justify-center gap-0.5 py-8">
              <span className="text-5xl font-bold text-landing-gray-300">
                $5
              </span>
              <span className="text-sm text-landing-gray-50">/month</span>
            </div>
            <button
              type="button"
              className="w-full rounded-md bg-landing-blue-100 py-2 text-white outline-none hover:bg-landing-blue-100/90 focus-visible:ring focus-visible:ring-landing-blue-200 focus-visible:ring-offset-2"
            >
              Select Plan
            </button>
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex size-4 items-center justify-center rounded-full bg-landing-gray-300 p-0.5">
                  <Check className="text-white" />
                </div>
                <p className="text-sm font-medium text-landing-gray-300">
                  5 collections
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex size-4 items-center justify-center rounded-full bg-landing-gray-300 p-0.5">
                  <Check className="text-white" />
                </div>
                <p className="text-sm font-medium text-landing-gray-300">
                  Worldwide accessibility
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex size-4 items-center justify-center rounded-full bg-landing-gray-300 p-0.5">
                  <Check className="text-white" />
                </div>
                <p className="text-sm font-medium text-landing-gray-300">
                  25 automation actions
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex size-4 items-center justify-center rounded-full bg-landing-gray-300 p-0.5">
                  <Check className="text-white" />
                </div>
                <p className="text-sm font-medium text-landing-gray-300">
                  Access all features
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex size-4 items-center justify-center rounded-full bg-landing-gray-300 p-0.5">
                  <Check className="text-white" />
                </div>
                <p className="text-sm font-medium text-landing-gray-300">
                  24/7 support
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex size-4 items-center justify-center rounded-full bg-landing-gray-100 p-0.5">
                  <Check className="text-white" />
                </div>
                <p className="text-sm font-medium text-landing-gray-300 line-through">
                  Sync accross devices
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex size-4 items-center justify-center rounded-full bg-landing-gray-100 p-0.5">
                  <Check className="text-white" />
                </div>
                <p className="text-sm font-medium text-landing-gray-300 line-through">
                  Share with more than 5 users
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1 h-[580px] w-[300px] space-y-2 rounded-md px-4 pt-8 shadow-lg lg:w-full">
            <h2 className="text-center text-xl font-bold text-landing-gray-300">
              Extended
            </h2>
            <p className="text-center text-sm text-landing-gray-50">
              The national average of buying a sandwich
            </p>
            <div className="flex items-baseline justify-center gap-0.5 py-8">
              <span className="text-5xl font-bold text-landing-gray-300">
                $12
              </span>
              <span className="text-sm text-landing-gray-50">/month</span>
            </div>
            <button
              type="button"
              className="w-full rounded-md bg-landing-blue-100 py-2 text-white outline-none hover:bg-landing-blue-100/90 focus-visible:ring focus-visible:ring-landing-blue-200 focus-visible:ring-offset-2"
            >
              Select Plan
            </button>
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex size-4 items-center justify-center rounded-full bg-landing-gray-300 p-0.5">
                  <Check className="text-white" />
                </div>
                <p className="text-sm font-medium text-landing-gray-300">
                  5 collections
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex size-4 items-center justify-center rounded-full bg-landing-gray-300 p-0.5">
                  <Check className="text-white" />
                </div>
                <p className="text-sm font-medium text-landing-gray-300">
                  Worldwide accessibility
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex size-4 items-center justify-center rounded-full bg-landing-gray-300 p-0.5">
                  <Check className="text-white" />
                </div>
                <p className="text-sm font-medium text-landing-gray-300">
                  25 automation actions
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex size-4 items-center justify-center rounded-full bg-landing-gray-300 p-0.5">
                  <Check className="text-white" />
                </div>
                <p className="text-sm font-medium text-landing-gray-300">
                  Access all features
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex size-4 items-center justify-center rounded-full bg-landing-gray-300 p-0.5">
                  <Check className="text-white" />
                </div>
                <p className="text-sm font-medium text-landing-gray-300">
                  24/7 support
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex size-4 items-center justify-center rounded-full bg-landing-gray-300 p-0.5">
                  <Check className="text-white" />
                </div>
                <p className="text-sm font-medium text-landing-gray-300">
                  Sync accross devices
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex size-4 items-center justify-center rounded-full bg-landing-gray-300 p-0.5">
                  <Check className="text-white" />
                </div>
                <p className="text-sm font-medium text-landing-gray-300">
                  Share with more than 5 users
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1 h-[580px] w-[300px] space-y-2 rounded-md px-4 pt-8 shadow-lg lg:w-full">
            <h2 className="text-center text-xl font-bold text-landing-gray-300">
              Premium +
            </h2>
            <p className="text-center text-sm text-landing-gray-50">
              The national average cost of buying coin easy
            </p>
            <div className="flex items-baseline justify-center gap-0.5 py-8">
              <span className="text-5xl font-bold text-landing-gray-300">
                $16
              </span>
              <span className="text-sm text-landing-gray-50">/month</span>
            </div>
            <button
              type="button"
              className="w-full rounded-md bg-landing-blue-100 py-2 text-white outline-none hover:bg-landing-blue-100/90 focus-visible:ring focus-visible:ring-landing-blue-200 focus-visible:ring-offset-2"
            >
              Select Plan
            </button>
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex size-4 items-center justify-center rounded-full bg-landing-gray-300 p-0.5">
                  <Check className="text-white" />
                </div>
                <p className="text-sm font-medium text-landing-gray-300">
                  5 collections
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex size-4 items-center justify-center rounded-full bg-landing-gray-300 p-0.5">
                  <Check className="text-white" />
                </div>
                <p className="text-sm font-medium text-landing-gray-300">
                  Worldwide accessibility
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex size-4 items-center justify-center rounded-full bg-landing-gray-300 p-0.5">
                  <Check className="text-white" />
                </div>
                <p className="text-sm font-medium text-landing-gray-300">
                  25 automation actions
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex size-4 items-center justify-center rounded-full bg-landing-gray-300 p-0.5">
                  <Check className="text-white" />
                </div>
                <p className="text-sm font-medium text-landing-gray-300">
                  Access all features
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex size-4 items-center justify-center rounded-full bg-landing-gray-300 p-0.5">
                  <Check className="text-white" />
                </div>
                <p className="text-sm font-medium text-landing-gray-300">
                  24/7 support
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex size-4 items-center justify-center rounded-full bg-landing-gray-300 p-0.5">
                  <Check className="text-white" />
                </div>
                <p className="text-sm font-medium text-landing-gray-300">
                  Sync accross devices
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex size-4 items-center justify-center rounded-full bg-landing-gray-300 p-0.5">
                  <Check className="text-white" />
                </div>
                <p className="text-sm font-medium text-landing-gray-300">
                  Share with more than 5 users
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-6">
          <div className="flex items-center justify-between">
            <h1 className="py-20 text-4xl font-bold text-landing-gray-300">
              BVTAuth is loved by users
            </h1>
            <div className="hidden items-center gap-4 lg:flex">
              <button
                type="button"
                className="outline-none focus-visible:ring-2 focus-visible:ring-landing-gray-200"
              >
                <ArrowLeftCircle
                  className="size-14 text-landing-gray-50"
                  strokeWidth="1"
                />
              </button>
              <button
                type="button"
                className="outline-none focus-visible:ring-2 focus-visible:ring-landing-gray-200"
              >
                <ArrowRightCircle className="size-14" strokeWidth={1} />
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 pb-24 lg:flex-row lg:justify-center">
            <div className="flex h-[340px] w-[330px] flex-col justify-around rounded-lg border p-6 pt-6">
              <div className="flex items-center gap-2">
                <div className="size-16 rounded-full bg-landing-gray-50"></div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-landing-gray-300">
                    Aaron Gunderson
                  </h3>
                  <p className="text-sm text-landing-gray-50">Manager</p>
                </div>
              </div>
              <p className="text-sm text-landing-gray-50">
                Sed mattis est eget penatibus mauris, sed condimentum vitae
                viverra. Ipsum ut aliquet et morbi ac in. Lacinia mattis eget
                nisl pellentesque non, porttitor. Vitae et vestibulum ac id. Dui
                aliquet porttitor libero consequat volutpat eget sed turpis.
                Feugiat maecenas commodo et morbi morbi gravida.
              </p>
              <div className="flex items-center gap-1">
                <Star className="size-5" fill="orange" strokeWidth={0} />
                <Star className="size-5" fill="orange" strokeWidth={0} />
                <Star className="size-5" fill="orange" strokeWidth={0} />
                <Star className="size-5" fill="orange" strokeWidth={0} />
                <Star className="size-5" fill="orange" strokeWidth={0} />
              </div>
            </div>
            <div className="flex h-[340px] w-[330px] flex-col justify-around rounded-lg border p-6 pt-6">
              <div className="flex items-center gap-2">
                <div className="size-16 rounded-full bg-landing-gray-50"></div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-landing-gray-300">
                    Imelda Cowen
                  </h3>
                  <p className="text-sm text-landing-gray-50">HR</p>
                </div>
              </div>
              <p className="text-sm text-landing-gray-50">
                Sed mattis est eget penatibus mauris, sed condimentum vitae
                viverra. Ipsum ut aliquet et morbi ac in. Lacinia mattis eget
                nisl pellentesque non, porttitor. Vitae et vestibulum ac id. Dui
                aliquet porttitor libero consequat volutpat eget sed turpis.
                Feugiat maecenas commodo et morbi morbi gravida.
              </p>
              <div className="flex items-center gap-1">
                <Star className="size-5" fill="orange" strokeWidth={0} />
                <Star className="size-5" fill="orange" strokeWidth={0} />
                <Star className="size-5" fill="orange" strokeWidth={0} />
                <Star className="size-5" fill="orange" strokeWidth={0} />
                <Star className="size-5" fill="orange" strokeWidth={0} />
              </div>
            </div>
            <div className="flex h-[340px] w-[330px] flex-col justify-around rounded-lg border p-6 pt-6">
              <div className="flex items-center gap-2">
                <div className="size-16 rounded-full bg-landing-gray-50"></div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-landing-gray-300">
                    Alfred Walton
                  </h3>
                  <p className="text-sm text-landing-gray-50">Consultant</p>
                </div>
              </div>
              <p className="text-sm text-landing-gray-50">
                Sed mattis est eget penatibus mauris, sed condimentum vitae
                viverra. Ipsum ut aliquet et morbi ac in. Lacinia mattis eget
                nisl pellentesque non, porttitor. Vitae et vestibulum ac id. Dui
                aliquet porttitor libero consequat volutpat eget sed turpis.
                Feugiat maecenas commodo et morbi morbi gravida.
              </p>
              <div className="flex items-center gap-1">
                <Star className="size-5" fill="orange" strokeWidth={0} />
                <Star className="size-5" fill="orange" strokeWidth={0} />
                <Star className="size-5" fill="orange" strokeWidth={0} />
                <Star className="size-5" fill="orange" strokeWidth={0} />
                <Star className="size-5" fill="orange" strokeWidth={0} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

const LandingNav = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-6 py-4">
      <div className="flex items-center justify-between">
        <span className="font-bold text-white">BVTAuth</span>
        <div>
          <button
            type="button"
            className="hover: mr-2 rounded-md border px-4 py-2 text-white outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-landing-blue-100"
          >
            Login
          </button>
          <button
            type="button"
            className="rounded-md bg-white px-4 py-2 text-landing-purple-200 outline-none hover:bg-white/90 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-landing-blue-100"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

const DashboardSnippet = () => {
  return (
    <div className="absolute -bottom-16 left-1/2 h-[400px] w-full max-w-[550px] -translate-x-1/2 p-4">
      <div className="h-full overflow-hidden rounded-md bg-landing-gray-200 shadow-xl">
        <div className="h-full w-1/2 bg-white"></div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="flex h-full gap-2 flex-col items-center justify-between bg-neutral-100 px-6 py-6 sm:h-24 md:flex-row">
      <div className="flex flex-col items-center gap-2 px-2 sm:flex-row">
        <div className="flex items-center">
          <LogoIcon />
          <span className="font-bold">BVTAuth</span>
        </div>
        <span className="font-medium">Authentication Made Simple</span>
      </div>
      <div className="text-sm font-medium text-[#6B648F]">
        &copy;2024 BVTAuth. All rights reserved.
      </div>
    </footer>
  );
};

const LogoIcon = () => {
  return (
    <svg
      width="42"
      height="32"
      viewBox="0 0 31 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-4.15446 5.58489L-4.50053 4.70052C-4.57743 4.50826 -4.73123 4.316 -4.96194 4.23909L-5.84633 3.85458C-5.96168 3.81613 -5.96168 3.62387 -5.84633 3.54697L-4.96194 3.2009C-4.76968 3.124 -4.57743 2.9702 -4.50053 2.73949L-4.11601 1.8551C-4.07756 1.73975 -3.8853 1.73975 -3.8084 1.8551L-3.46234 2.73949C-3.38543 2.93175 -3.23163 3.124 -3.00092 3.2009L-2.11654 3.58542C-2.00118 3.62387 -2.00118 3.81613 -2.11654 3.89303L-3.00092 4.23909C-3.19318 4.316 -3.38543 4.46981 -3.46234 4.70052L-3.84685 5.58489C-3.92375 5.70025 -4.11601 5.70025 -4.15446 5.58489ZM30.8364 19.0045C30.298 28.5404 22.4155 36 12.8795 36C7.9962 36 3.42047 34.0774 -0.00170565 30.5783C-3.42389 27.0793 -5.23111 22.4651 -5.11575 17.5818C-5.11575 17.1972 -5.0773 16.8127 -5.03885 16.4282C-5.03885 16.3129 -5.0773 16.159 -5.19265 16.0821C-6.00013 15.4669 -6.5 14.5056 -6.5 13.429C-6.5 11.6218 -5.0773 10.1991 -3.30853 10.1222C-3.27008 10.1222 -3.23163 10.1222 -3.15472 10.1222C-2.27034 10.1222 -1.46286 10.4682 -0.88609 11.045C-0.232416 11.6602 0.152098 12.5062 0.152098 13.4674C0.152098 14.967 -0.847639 16.2744 -2.23189 16.6589C-2.3857 16.6974 -2.50105 16.8512 -2.50105 17.005C-2.50105 17.2357 -2.5395 17.4279 -2.5395 17.6587C-2.65486 22.0806 -0.924541 26.2333 2.30538 29.271C4.92008 31.7319 8.38072 33.2315 11.9567 33.4238C20.2622 33.8852 27.2988 27.7714 28.1832 19.735C28.2217 19.5043 28.0294 19.3121 27.7987 19.3121H18.9933C18.8395 19.3121 18.6857 19.4274 18.6473 19.5812C17.9551 22.119 15.6096 24.0031 12.8795 24.0031C9.45735 24.0031 6.65039 21.0808 6.8811 17.6202C7.07336 14.6594 9.45736 12.2754 12.3797 12.0447C15.3404 11.814 17.9167 13.7751 18.6473 16.4282C18.6857 16.582 18.8395 16.6974 19.0318 16.6974H28.6446C29.2599 16.6974 29.8366 16.9281 30.2211 17.3895C30.6826 17.8125 30.8748 18.4277 30.8364 19.0045ZM16.3017 18.0047C16.3017 16.1206 14.7637 14.5825 12.8795 14.5825C10.9954 14.5825 9.45736 16.1206 9.45736 18.0047C9.45736 19.8888 10.9954 21.4269 12.8795 21.4269C14.7637 21.4269 16.3017 19.8888 16.3017 18.0047ZM-3.92375 13.4674C-3.92375 13.8904 -3.57769 14.198 -3.19318 14.198C-2.80866 14.198 -2.4626 13.852 -2.4626 13.4674C-2.4626 13.0829 -2.80866 12.7369 -3.19318 12.7369C-3.57769 12.7369 -3.92375 13.0445 -3.92375 13.4674ZM-0.117055 9.73765C-0.232409 9.92991 -0.463128 9.96836 -0.655385 9.85301C-1.1168 9.5454 -1.65512 9.31469 -2.19344 9.16088C-2.4626 9.12243 -2.5395 8.81482 -2.42415 8.58411C-1.69357 7.43057 -0.847642 6.31548 0.113644 5.35419C3.38202 2.04736 7.68859 0.163241 12.3028 0.00943508C17.1476 -0.144371 21.7618 1.58594 25.2609 4.93122C26.1068 5.7387 26.5683 6.8538 26.4913 8.04579C26.4144 9.23779 25.8761 10.3144 24.9148 11.045C23.3383 12.237 21.1082 12.1601 19.6854 10.8143C19.2625 10.4298 18.8395 10.0837 18.3781 9.77611C18.2243 9.6992 18.0705 9.6992 17.9167 9.81455C17.3399 10.276 16.6093 10.5836 15.8018 10.5836C14.2638 10.5836 12.9564 9.5454 12.6104 8.12269C12.5335 7.85353 12.495 7.54592 12.495 7.27676C12.495 6.66154 12.6873 6.04632 12.9949 5.54645C13.5717 4.58516 14.6483 3.93149 15.8403 3.93149C17.6091 3.93149 19.0318 5.31573 19.1471 7.04605C19.1471 7.16141 19.224 7.27676 19.3394 7.35366C20.1084 7.81508 20.839 8.3534 21.4927 9.00708C21.9925 9.4685 22.8 9.50695 23.3383 9.08398C23.6844 8.81482 23.8767 8.4303 23.9151 8.00734C23.9536 7.58437 23.7613 7.19986 23.4537 6.89225C20.4545 4.04684 16.494 2.54723 12.3412 2.66259C7.11182 2.73949 2.5361 5.5849 -0.117055 9.73765ZM16.6093 7.19986C16.6093 6.77689 16.2633 6.46928 15.8787 6.46928C15.4942 6.46928 15.1482 6.81535 15.1482 7.19986C15.1482 7.62283 15.4942 7.96889 15.8787 7.96889C16.2633 7.96889 16.6093 7.62283 16.6093 7.19986ZM11.1877 5.62335C11.4568 5.5849 11.6875 5.8156 11.6106 6.08476C11.4953 6.46928 11.4568 6.81535 11.4568 7.19986C11.4568 7.39212 11.4568 7.58437 11.4953 7.77663C11.5337 7.96889 11.3799 8.16114 11.1877 8.19959C9.11129 8.54566 7.18871 9.5454 5.68911 11.1219C3.80498 13.0829 2.80525 15.6592 2.92061 18.3892C3.11287 23.5033 7.30407 27.6945 12.4181 27.9252C14.5714 28.0021 16.6093 27.4253 18.3396 26.3102C18.4935 26.1949 18.5319 26.0026 18.455 25.8104C18.2627 25.3874 18.1089 24.8875 18.1089 24.3877C18.1089 22.5035 19.6854 20.9655 21.608 21.0808C23.2999 21.1577 24.6841 22.542 24.761 24.2339C24.8379 26.1564 23.3383 27.7329 21.4542 27.7329C21.3004 27.7329 21.1466 27.7329 20.9928 27.6945C20.8774 27.6945 20.7621 27.6945 20.6852 27.7714C18.3396 29.6555 15.4173 30.6552 12.2643 30.5014C5.80446 30.2323 0.575062 24.9644 0.305902 18.5046C0.190547 15.0824 1.421 11.814 3.80499 9.31469C5.84291 7.27676 8.41917 5.96941 11.1877 5.62335ZM20.7236 24.3877C20.7236 24.8106 21.0697 25.1182 21.4542 25.1182C21.8387 25.1182 22.1848 24.7722 22.1848 24.3877C22.1848 24.0031 21.8387 23.6571 21.4542 23.6571C21.0697 23.6571 20.7236 23.9647 20.7236 24.3877Z"
        fill="url(#paint0_linear_0_24)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_0_24"
          x1="12.1706"
          y1="0"
          x2="12.1706"
          y2="36"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0C0047" />
          <stop offset="1" stopColor="#0B0239" />
        </linearGradient>
      </defs>
    </svg>
  );
};

import PageHeader from "../components/PageHeader";
import Inactive from "../components/Inactive";
import Active from "../components/Active";
import { ArrowBigDownDash } from "lucide-react";

export default function Users() {
  return (
    <>
      <PageHeader path="Dashboard / Users" header="Users" />
      <div className="h-4/5 w-full rounded-2xl border-[1px] bg-white">
        <table className="w-full table-auto">
          <thead>
            <tr className="rounded-xl bg-gray-100 text-left">
              <th className="rounded-tl-xl p-2 pl-5 pr-5 font-medium text-gray-700">
                Email Address
              </th>
              <th className="flex p-2 pl-5 pr-5 font-medium text-gray-700">
                Status <ArrowBigDownDash className="ml-2" />
              </th>
              <th className="p-2 pl-5 pr-5 font-medium text-gray-700">
                Last Signed In
              </th>
              <th className="rounded-tr-xl p-2 pl-5 pr-5 font-medium text-gray-700">
                Joined
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300 text-left">
              <td className="p-5">johnDoe@gmail.com</td>
              <td className="p-5">
                <Active />
              </td>
              <td className="p-5 font-light">06/08/2024 6:00PM</td>
              <td className="p-5 font-light">06/05/2024</td>
            </tr>
            <tr className="border-b border-gray-300 text-left">
              <td className="p-5">johnDoe@gmail.com</td>
              <td className="p-5">
                <Inactive />
              </td>
              <td className="p-5 font-light">06/08/2024 6:00PM</td>
              <td className="p-5 font-light">06/05/2024</td>
            </tr>
            <tr className="border-b border-gray-300 text-left">
              <td className="p-5">johnDoe@gmail.com</td>
              <td className="p-5">
                <Active />
              </td>
              <td className="p-5 font-light">06/08/2024 6:00PM</td>
              <td className="p-5 font-light">06/05/2024</td>
            </tr>
            <tr className="border-b border-gray-300 text-left">
              <td className="p-5">johnDoe@gmail.com</td>
              <td className="p-5">
                <Inactive />
              </td>
              <td className="p-5 font-light">06/08/2024 6:00PM</td>
              <td className="p-5 font-light">06/05/2024</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

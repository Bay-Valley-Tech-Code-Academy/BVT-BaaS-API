import PageHeader from "../components/PageHeader";
import Inactive from "../components/Inactive";
import Active from "../components/Active";
import { ArrowBigDownDash } from "lucide-react";

export default function Users() {
  const dummyData = [
    {
      email: "johnDoe@gmail.com",
      status: 1,
      lastSignedIn: "06/08/2024 6:00PM",
      joined: "06/04/2024",
    },
    {
      email: "janeDoe@gmail.com",
      status: 0,
      lastSignedIn: "06/07/2024 4:00PM",
      joined: "06/03/2024",
    },
    {
      email: "bobSmith@gmail.com",
      status: 1,
      lastSignedIn: "06/06/2024 2:00PM",
      joined: "06/02/2024",
    },
    {
      email: "aliceJohnson@gmail.com",
      status: 0,
      lastSignedIn: "06/05/2024 12:00PM",
      joined: "06/01/2024",
    },
    {
      email: "charlieBrown@gmail.com",
      status: 1,
      lastSignedIn: "06/04/2024 10:00AM",
      joined: "05/31/2024",
    },
    {
      email: "davidWilliams@gmail.com",
      status: 0,
      lastSignedIn: "06/03/2024 8:00AM",
      joined: "05/30/2024",
    },
  ];

  return (
    <>
      <PageHeader path="Dashboard / Users" header="Users" />
      <div className="h-4/5 w-full overflow-y-auto rounded-2xl border-[1px] bg-white">
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
            {dummyData.map((obj) => {
              return (
                <tr className="border-b border-gray-300 text-left">
                  <td className="p-5">{obj.email}</td>
                  <td className="flex p-5">
                    {obj.status ? <Active /> : <Inactive />}
                  </td>
                  <td className="p-5 font-light">{obj.lastSignedIn}</td>
                  <td className="p-5 font-light">{obj.joined}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

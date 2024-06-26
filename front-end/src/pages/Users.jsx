import PageHeader from "../components/PageHeader";
import Inactive from "../components/Inactive";
import Active from "../components/Active";
import { ArrowBigDownDash, Trash2 } from "lucide-react";
import { useState, Fragment } from "react";

export default function Users() {
  // Using dummy data for now, will replace once API is up and running.
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

  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const newInput = e.target.value;
    setInput(newInput.toLowerCase());
  };

  // Filtering users if there is any input in the search bar.
  const filteredUsers = dummyData.filter((user) =>
    user.email.toLowerCase().includes(input),
  );

  return (
    <>
      <PageHeader
        path="Dashboard / Users"
        header="Users"
        handleChange={handleChange}
      />
      <div className="h-4/5 w-full overflow-y-auto rounded-2xl border-[1px] bg-white">
        <table className="w-full table-auto">
          <thead>
            <tr className="rounded-xl bg-gray-100 text-left">
              <th className="rounded-tl-xl p-2 pl-5 pr-5 font-medium text-gray-700">
                Email Address
              </th>
              <th className="flex p-2 pl-5 pr-5 font-medium text-gray-700">
                Status/Toggle <ArrowBigDownDash className="ml-2" />
              </th>
              <th className="p-2 pl-5 pr-5 font-medium text-gray-700">
                Last Signed In
              </th>
              <th className="p-2 pl-5 pr-5 font-medium text-gray-700">
                Joined
              </th>
              <th className="rounded-tr-xl p-2 pl-5 pr-5 font-medium text-gray-700">
                Obliterate
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((obj, index) => {
              return (
                <Fragment key={index}>
                  <tr className="border-b border-gray-300 text-left">
                    <td className="p-5">{obj.email}</td>
                    <td className="flex p-5">
                      <button>{obj.status ? <Active /> : <Inactive />}</button>
                    </td>
                    <td className="p-5 font-light">{obj.lastSignedIn}</td>
                    <td className="p-5 font-light">{obj.joined}</td>
                    <td className="p-5 font-light">
                      <button className="hover:text-red-500">
                        <Trash2 />
                      </button>
                    </td>
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

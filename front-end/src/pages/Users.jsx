import PageHeader from "../components/PageHeader";

export default function Users() {
  return (
    <>
      <PageHeader path="Dashboard / Users" header="Users" />
      <div className="h-4/5 w-full rounded-xl border-2 bg-white">
        <table className="w-full table-auto">
          <thead>
            <tr className="w-full bg-gray-100 text-left">
              <th className="p-2 pl-5 pr-5 font-medium text-gray-700">Email</th>
              <th className="p-2 pl-5 pr-5 font-medium text-gray-700">
                Status
              </th>
              <th className="p-2 pl-5 pr-5 font-medium text-gray-700">
                Last Signed In
              </th>
              <th className="p-2 pl-5 pr-5 font-medium text-gray-700">
                Joined
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300 text-left">
              <td className="p-5">johnDoe@gmail.com</td>
              <td className="p-5">Online</td>
              <td className="p-5 font-light">06/08/2024 6:00PM</td>
              <td className="p-5 font-light">06/05/2024</td>
            </tr>
            <tr className="border-b border-gray-300 text-left">
              <td className="p-5">johnDoe@gmail.com</td>
              <td className="p-5">Online</td>
              <td className="p-5 font-light">06/08/2024 6:00PM</td>
              <td className="p-5 font-light">06/05/2024</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

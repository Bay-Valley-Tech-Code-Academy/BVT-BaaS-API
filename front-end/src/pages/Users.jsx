import PageHeader from "../components/PageHeader";

export default function Users() {
  return (
    <>
      <PageHeader path="Dashboard / Users" header="Users" />
      <div className="w-full rounded-xl border-2 bg-white p-3">
        <table className="table-auto border-spacing-4">
          <thead>
            <tr className="text-left">
              <th>Email</th>
              <th>Artist</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

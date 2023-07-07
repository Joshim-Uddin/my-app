// components/Table.tsx
'use client';
import { useStore } from "./store";


const Table = () => {
  const { formData } = useStore();

  return (
    <table className="table-auto mx-auto bg-white text-black p-10 shadow-md shadow-blue-400">
      <thead>
        <tr>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Email</th>
          <th className="px-4 py-2">Age</th>
        </tr>
      </thead>
      <tbody>
        {formData.map((data, index) => (
          <tr key={index}>
            <td className="border px-4 py-2">{data.name}</td>
            <td className="border px-4 py-2">{data.email}</td>
            <td className="border px-4 py-2">{data.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

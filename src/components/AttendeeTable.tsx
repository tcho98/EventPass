// components/AttendeeTable.tsx
"use client";
import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

type Attendee = {
  id: number;
  name: string;
  email: string;
  company?: string;
  telephone: string;
  role: string;
};

export default function AttendeeTable({
  attendees,
}: {
  attendees: Attendee[];
}) {
  const tableRef = useRef<HTMLDivElement>(null);

  const generatePDF = async () => {
    const input = tableRef.current;
    if (!input) return;

    const canvas = await html2canvas(input);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("attendees.pdf");
  };
  return (
    <div className="p-6 bg-gray-800 shadow-lg  max-w-full mx-auto mt-10 border border-gray-800">
      <div className="flex justify-end mb-4">
        <button
          onClick={generatePDF}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Télécharger en PDF
        </button>
      </div>
      <h2 className="text-2xl font-bold  mb-4 text-white">
        Liste des Participants
      </h2>

      <div ref={tableRef} className="overflow-x-auto max-w-full">
        <table className="min-w-full table-auto text-sm text-left text-gray-700">
          <thead className="bg-gray-600 text-white">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Nom</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Société</th>
              <th className="px-4 py-3">Téléphone</th>
              <th className="px-4 py-3">role</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {attendees.map((attendee) => (
              <tr key={attendee.id} className="hover:bg-blue-50 transition">
                <td className="px-4 py-2">{attendee.id}</td>
                <td className="px-4 py-2 font-semibold">{attendee.name}</td>
                <td className="px-4 py-2">{attendee.email}</td>
                <td className="px-4 py-2">{attendee.company || "—"}</td>
                <td className="px-4 py-2">{attendee.telephone}</td>
                <td className="px-4 py-2">{attendee.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

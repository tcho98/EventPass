// app/users/page.tsx
"use client";
import AttendeeTable from "@/components/AttendeeTable";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";

interface Attendee {
  id: number;
  name: string;
  email: string;
  company?: string;
  telephone?: string;
  role: string;
}
const AttendeesPage = () => {
  const [attendees, setAttendees] = useState<Attendee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchAttendees = async () => {
      try {
        const response = await fetch("/api/attendee"); // Assure-toi que l'API est correctement configurée
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des attendees");
        }
        const data = await response.json();
        setAttendees(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Une erreur inconnue est survenue");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAttendees();
  }, []);

  return (
    <div>
      <Header />
      <div className="max-w-full ">
        <AttendeeTable attendees={attendees} />
      </div>
      <Footer />
    </div>
  );
};

export default AttendeesPage;

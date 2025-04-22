"use client";

import { useState, ChangeEvent, FormEvent } from "react";

import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

import Input from "@/components/ui/Input";
import SelectPassType from "./ui/SelectPassType";

const AttendeeForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    telephone: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [role, setRole] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/attendee", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Erreur lors de la création");

      const data = await res.json();
      router.push(`/welcome/${data.id}`);
      alert("Participant créé avec succès !");
    } catch (error) {
      console.error(error);
      alert("Une erreur est survenue.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" w-full max-w-md overflow-hidden flex flex-col justify-center items-center  mx-auto mt-8 space-y-4 border-2 border-gray-300 p-4 rounded-lg shadow-xl"
    >
      <Input
        label="Nom"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <Input
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <SelectPassType value={role} onChange={(e) => setRole(e.target.value)} />
      <Input
        label="Société"
        name="company"
        value={formData.company}
        onChange={handleChange}
      />
      <Input
        label="Téléphone"
        name="telephone"
        type="tel"
        value={formData.telephone}
        onChange={handleChange}
      />
      <Button type="submit">Créer un participant</Button>
    </form>
  );
};

export default AttendeeForm;

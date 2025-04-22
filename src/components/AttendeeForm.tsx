"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import Input from "@/components/ui/Input";
import SelectPassType from "./ui/SelectPassType";

const AttendeeForm = () => {
  const router = useRouter();

  // Mise à jour de l'état pour formData incluant role
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    telephone: "",
    role: "", // rôle ajouté ici
  });

  // Gérer les changements de champ
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Gérer le changement de rôle
  const handleRoleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      role: value, // mettre à jour le rôle dans formData
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      // Envoi de formData avec role inclus
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

    const phone = formData.telephone; // Sans le +
    const invitationLink = "https://event-pass-ymba.vercel.app/welcome/{}"; // Lien vers la carte
    const message = `Bonjour 👋, voici votre carte d'invitation : ${invitationLink}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");

    // Ouvrir cette URL dans le navigateur
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md overflow-hidden flex flex-col justify-center items-center mx-auto mt-8 space-y-4 border-2 border-gray-300 p-4 rounded-lg shadow-xl"
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
      <SelectPassType
        value={formData.role} // Utiliser formData.role ici
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          setFormData({
            ...formData,
            role: e.target.value, // Met à jour formData avec la valeur du rôle
          })
        }
      />

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

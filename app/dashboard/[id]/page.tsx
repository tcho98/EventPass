"use client";

import { PrismaClient } from "@/app/generated/prisma";
import { useRouter } from "next/router";
import React, { use } from "react";

const prisma = new PrismaClient();

type Props = {
  params: {
    id: string;
  };
};

export default async function TicketPage({ params }: Props) {
  const router = useRouter();
  const { id } = router.query; // Utilisation de router.query pour accéder à l'id dynamique

  if (!id) {
    return <p>Chargement...</p>; // Ou afficher un message de chargement jusqu'à ce que l'ID soit disponible
  }

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4 text-blue-600">
          🎉 Bienvenue !
        </h1>
        <p className="text-black-300 text-xl mb-2">Ton identifiant :</p>
        <div className="text-xl font-mono text-gray-900 bg-gray-100 rounded p-2 border">
          {params.id}
        </div>

        <button
          className="mt-6 hover:bg-blue text-white py-2 px-4 rounded-lg transition"
          onClick={() => alert("Fonction de téléchargement à venir")}
        >
          Télécharger ton badge
        </button>
      </div>
    </div>
  );
}

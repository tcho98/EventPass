import { PrismaClient } from "@/app/generated/prisma";
import React from "react";

const prisma = new PrismaClient();

type Props = {
  params: {
    id: string;
  };
};

export default async function TicketPage({ params }: Props) {
  const attendee = await prisma.attendee.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  if (!attendee) {
    return <div>Utilisateur non trouvé</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4">Carte d'invitation</h1>
        <p>
          <strong>Nom :</strong> {attendee.name}
        </p>
        <p>
          <strong>Email :</strong> {attendee.email}
        </p>
        <p>
          <strong>Téléphone :</strong> {attendee.telephone}
        </p>
        {attendee.company && (
          <p>
            <strong>Entreprise :</strong> {attendee.company}
          </p>
        )}
      </div>
    </div>
  );
}

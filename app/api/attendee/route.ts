// app/api/attendee/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Vérification des données requises
    const { name, email, company, telephone, role } = body;
    if (!name || !email) {
      return NextResponse.json(
        { error: "Le nom et l'email sont requis" },
        { status: 400 }
      );
    }

    // Assigner une valeur par défaut au rôle si non fourni
    const attendeeRole = role || "visitor";

    // Création du participant dans la base de données
    const attendee = await prisma.attendee.create({
      data: {
        name: name,
        email: email,
        company: company || "", // Si company est facultatif
        telephone: telephone || "", // Si téléphone est facultatif
        role: attendeeRole,
      },
    });

    return NextResponse.json(attendee);
  } catch (error) {
    return NextResponse.json(
      { error: "Une erreur est survenue lors de la création" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const attendees = await prisma.attendee.findMany();
    return NextResponse.json(attendees);
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur lors de la récupération des participants" },
      { status: 500 }
    );
  }
}

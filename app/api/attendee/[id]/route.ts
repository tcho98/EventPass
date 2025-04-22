import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { type NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { pathname } = new URL(req.url);
  const id = pathname.split("/").pop();

  if (!id || isNaN(parseInt(id))) {
    return NextResponse.json({ error: "ID invalide" }, { status: 400 });
  }

  const attendee = await prisma.attendee.findUnique({
    where: { id: parseInt(id) },
  });

  if (!attendee) {
    return NextResponse.json(
      { error: "Utilisateur non trouvé" },
      { status: 404 }
    );
  }

  return NextResponse.json(attendee);
}

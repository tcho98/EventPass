import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // ✅ important

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const attendee = await prisma.attendee.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!attendee) {
    return NextResponse.json(
      { error: "Utilisateur non trouvé" },
      { status: 404 }
    );
  }

  return NextResponse.json(attendee);
}

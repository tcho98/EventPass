// app/api/attendee/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();

  const attendee = await prisma.attendee.create({
    data: {
      name: body.name,
      email: body.email,
      company: body.company,
      telephone: body.telephone,
    },
  });

  return NextResponse.json(attendee);
}
export async function GET() {
  const attendees = await prisma.attendee.findMany();
  return NextResponse.json(attendees);
}

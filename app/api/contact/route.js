import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();

    const { name, email, subject, message } = data;

    if (!name) {
      return NextResponse.json({ error: "Name is required!" }, { status: 401 });
    }
    if (!email) {
      return NextResponse.json(
        { error: "Email is required!" },
        { status: 401 }
      );
    }
    if (!subject) {
      return NextResponse.json({ error: "Subject is required!" }, { status: 401 });
    }
    if (!message) {
      return NextResponse.json({ error: "Message is required!" }, { status: 401 });
    }

    const response = await prisma.client.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

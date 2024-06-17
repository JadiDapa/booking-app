import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismaConnect";
import { NextResponse } from "next/server";

// Register a New Account
export const POST = async (req: Request) => {
  try {
    const data = await req.json();
    const { email, name, password } = data;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
};

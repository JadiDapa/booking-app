import prisma from "@/app/libs/prismaConnect";
import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { Listing } from "@prisma/client";

// Create a New Listing
export const POST = async (req: Request) => {
  try {
    const data = await req.json();
    const {
      title,
      description,
      imageSrc,
      category,
      roomCount,
      guestCount,
      bathroomCount,
      price,
      location,
    } = data;

    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return NextResponse.error();
    }

    const user = await prisma.listing.create({
      data: {
        title,
        description,
        imageSrc,
        category,
        roomCount,
        guestCount,
        bathroomCount,
        price: parseInt(price, 10),
        location: location.value,
        userId: currentUser.id,
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error", errorMessage: error },
      { status: 500 },
    );
  }
};

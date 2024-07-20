import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const newUser = await prisma.user.create({
      data: {
        name: "John Doe",
        email: "NQpT2t@example.com",
        password: "123456",
      },
    });
    
    return new NextResponse(JSON.stringify(newUser), {
      status: 201,
    });
    
  } catch (error) {
    return new NextResponse(JSON.stringify(error), {
      status: 500,
    })
  } 
}

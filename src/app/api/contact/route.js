import dbConnect from "@/utils/dbConn";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";

export async function POST(req, res) {

  try {
    const body = await req.json();
    await dbConnect();
    await Contact.create(body);

    return NextResponse.json(
      { message: "Message Sent Sucessfully" },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json(
      { error: "Server error , please try again !" },
      { status: 500 }
    );
  }
  
}

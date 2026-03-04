import { NextResponse } from "next/server";
import twilio from "twilio";

export async function POST(req) {
  try {
    const { to_number, message } = await req.json();

    // const client = twilio(
    //   "AC2b08795abaeac1ef1beee3beb6f20997",
    //   "07bfaede9c9806a80b8bab5752ea5e8f",
    // );
    const client = twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN,
    );

    const response = await client.messages.create({
      body: message,
      from: +13344893723,
      to: to_number,
    });

    return NextResponse.json({
      status: "success",
      sid: response.sid,
    });
  } catch (error) {
    return NextResponse.json(
      { status: "error", message: error.message },
      { status: 400 },
    );
  }
}

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbx6I4wD6Y1MprF_8QZy4VOcn8_44CNgA5e1Jcf3ufCk5PcVAuswejPtbwEfcNfTc3UPEg/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(body),
      },
    );

    const result = await response.text();

    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit quote.",
      },
      {
        status: 500,
      },
    );
  }
}

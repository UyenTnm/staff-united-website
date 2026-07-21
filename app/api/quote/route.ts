import { NextRequest, NextResponse } from "next/server";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwwTwJvO4HYfXAuoL3S57Wh-ySnHKnKB2xSzdanC8cZGkmXgYJIEKE9jy2WmVlDp5i8Ww/exec";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const params = new URLSearchParams();

    Object.entries(body).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        params.append(key, JSON.stringify(value));
      } else if (typeof value === "object" && value !== null) {
        params.append(key, JSON.stringify(value));
      } else {
        params.append(key, String(value ?? ""));
      }
    });

    const response = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    const text = await response.text();

    return new NextResponse(text, {
      status: response.status,
      headers: {
        "Content-Type": "application/json",
      },
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

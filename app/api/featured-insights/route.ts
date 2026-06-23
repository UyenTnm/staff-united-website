import { NextResponse } from "next/server";
import { getFeaturedInsights } from "@/lib/sanity";

export async function GET() {
  try {
    const posts = await getFeaturedInsights();

    return NextResponse.json(posts);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch insights" },
      { status: 500 },
    );
  }
}

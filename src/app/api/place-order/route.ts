import fetcher from "@/fetcher";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const res = await fetcher("commerce/place-order", "post", request.body);

  const data = await res.json();

  return NextResponse.json(data);
}

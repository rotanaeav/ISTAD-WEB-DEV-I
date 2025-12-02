import { NextRequest, NextResponse } from "next/server";
import { Product } from "@/src/lib/types";
import { notFound } from "next/navigation";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ uuid: string }> }
) {
  const { uuid } = await params;
  const getUuid = uuid;

  const existingData = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/product`
  );
  const products = (await existingData.json()) as Product[];
  const product = products.find((p) => p.uuid === getUuid);

  if (!product) {
    return notFound();
  }

  // Check scan count
  if (product.scanCount >= 2) {
    return NextResponse.redirect(new URL("/verify/failed", req.url));
  }

  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/${product.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ scanCount: product.scanCount + 1 }),
  });

  //  Save UUID inside secure cookie
  const response = NextResponse.redirect(new URL("/verify/success", req.url));

  response.cookies.set("uuid", uuid, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60,
  });

  return response;
}

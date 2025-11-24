import { NextRequest, NextResponse } from "next/server";
import { Product } from "@/src/lib/types";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ uuid: string }> }
) {
  const { uuid } = await params;
  const getUuid = uuid;

  const existingData = await fetch(
    "https://68ae84b2b91dfcdd62b9604a.mockapi.io/api/v1/product"
  );
  const products = (await existingData.json()) as Product[];
  const product = products.find((p) => p.uuid === getUuid);

  if (!product) {
    return NextResponse.json({ message: "Invalid QR code" }, { status: 404 });
  }

  // Check scan count
  if (product.scanCount >= 2) {
    return NextResponse.redirect(new URL("/verify/failed", req.url));
  }

  await fetch(
    `https://68ae84b2b91dfcdd62b9604a.mockapi.io/api/v1/product/${product.id}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ scanCount: product.scanCount + 1 }),
    }
  );

  // Redirect success
  return NextResponse.redirect(new URL("/verify/success", req.url));
}

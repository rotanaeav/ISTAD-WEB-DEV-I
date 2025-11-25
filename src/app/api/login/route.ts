import { NextResponse } from "next/server";
import type { User, AuthResponse } from "@/src/lib/types";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "Email and password are required" },
        { status: 400 }
      );
    }

    const mockApiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!mockApiUrl) {
      return NextResponse.json(
        { success: false, message: "Server configuration error: API URL missing" },
        { status: 500 }
      );
    }
    const res = await fetch(`${mockApiUrl}/users?email=${email}`);
    
    if (!res.ok) {
      throw new Error("Failed to fetch from database");
    }

    const users: User[] = await res.json();
    const user = users[0];

    if (!user || user.password !== password) {
      return NextResponse.json(
        { success: false, message: "Invalid email or password" },
        { status: 401 }
      );
    }
    // remove password
    const { password: _, ...userWithoutPassword } = user; 

    const fakeToken = btoa(JSON.stringify({ 
      id: user.id, 
      email: user.email, 
      role: user.role 
    }));

    const response: AuthResponse = {
      success: true,
      message: "Login successful",
      token: fakeToken,
      user: userWithoutPassword,
    };

    return NextResponse.json(response);

  } catch (error) {
    console.error("Login Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
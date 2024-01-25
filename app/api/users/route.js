import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({success: "Hello this message is successfully delivered!"})
}
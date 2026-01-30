import apiResponse from "@/server/services/apiResponse";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  return apiResponse(request, 'menu');
}
import apiResponse from "@/server/services/api/apiResponse";
import {NextRequest} from "next/server";

export async function GET(request: NextRequest) {
  return apiResponse(request, 'menu');
}
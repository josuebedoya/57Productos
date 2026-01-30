import { NextRequest } from 'next/server';
import { routing } from '@/i18n/routing';
import read from '@/server/services/read';
import response from '@/server/services/response';

async function apiResponse(request: NextRequest, lib: string) {
  // Get lang by query parameter
  const searchParams = request.nextUrl.searchParams;
  const lang = searchParams.get('lang') || routing.defaultLocale;

  try {
    const data = await read(lib, lang);
    return response(data);
  } catch (error) {
    return response({ MESSAGE: 'Failed to load menu data', error });
  }
}

export default apiResponse;
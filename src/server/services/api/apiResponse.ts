import {NextRequest} from 'next/server';
import {routing} from '@/i18n/routing';
import read from '@/server/services/api/read';
import response from '@/server/services/api/response';

async function apiResponse(request: NextRequest, lib: string) {
  // Get lang by query parameter
  const searchParams = request.nextUrl.searchParams;
  const locale = searchParams.get('locale') || routing.defaultLocale;

  try {
    const data = await read(lib, locale);
    return response(data);
  } catch (error) {
    return response({MESSAGE: 'Failed to load menu data', error});
  }
}

export default apiResponse;
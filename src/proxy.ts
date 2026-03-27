import {updateSession} from "@/server/db/proxy";
import {type NextRequest} from "next/server";
import i18nRouting from "@/i18n/proxy";

export async function proxy(request: NextRequest) {
  const res = i18nRouting(request);
  return await updateSession(request, res);
}

export const config = {
  matcher: [
    /**
     * Match all request paths except:
     * - api (API routes)
     * - trpc (tRPC routes)
     * - _next (Next.js internals)
     * - _vercel (Vercel internals)
     * - any path that contains a dot (static files, etc.)
     */
    '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};

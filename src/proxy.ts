import {NextRequest, NextResponse} from "next/server"
import {defaultLanguage as defLang} from "@/i18n"

const PUBLIC_FILE = /\.(.*)$/

export default function proxy(req: NextRequest) {
  const {pathname: path} = req.nextUrl

  if (
    path.startsWith("/_next") ||
    path.includes("/api/") ||
    PUBLIC_FILE.test(path)
  ) {
    return
  }

  // check if is default lang && deleted by urls (EJ: /es/contact -> /contact)
  const isDefLang = path === `/${defLang}` || path === `/${defLang}/`
  if (isDefLang) {
    const newPath = path.replace(`/${defLang}`, "") || "/"
    return NextResponse.redirect(new URL(newPath, req.url))
  }

  return NextResponse.next()
}
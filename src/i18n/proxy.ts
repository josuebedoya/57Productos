import createMiddleware from "next-intl/middleware";
import {routing} from "@/i18n/routing";

const i18nRouting = createMiddleware(routing);

export default i18nRouting;
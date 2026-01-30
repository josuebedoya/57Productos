import {ParamsPromise} from "@/resources/types";
import {getTranslations} from "next-intl/server";

export default async function HomePage({params,}: ParamsPromise) {
  const {locale} = await params;
  const t = await getTranslations('about');

  return (
    <div className='flex flex-col justify-center items-center py-24 flex-1'>
      <h1>Content Default lang</h1>
      current lang: {locale} Translation: {t('label')}
    </div>
  )
}
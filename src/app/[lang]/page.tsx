import {ParamsPromise} from "@/resources/types";

export default async function HomePage({params,}: ParamsPromise) {
  const {lang} = await params;

  return (
    <div className='flex flex-col justify-center items-center py-24 flex-1'>
      <h1>Content Default lang</h1>
      current lang: {lang}
    </div>
  )
}
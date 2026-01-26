import {MetaProps} from "@/resources/types";

const Head = (
  {
    title,
    description,
    favicon = "favicon.png",
    children
  }: MetaProps) => {
  return (
    <>
      <head>
        <meta charSet='UTF-8'/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <link rel="icon" href={favicon}/>
        {children}
      </head>
    </>
  );
}

export default Head;
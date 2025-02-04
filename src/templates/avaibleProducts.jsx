import { List } from "@/components/list";

const AvaibleProducts = () => {
  return (
    <div>
      <List columns={4} gap={8} itemClass='rounded-lg shadow-custom h-40 flex items-center justify-center'>
        <p className="ps">Hola</p>
        <p>Hola 1</p>
        <p>Holaaa </p>
        <p>Holaaa </p>
        <p>Holaaa </p>
        <p>Holaaa </p>
        <p>Holaaa </p>
        <p>Holaaa </p>
        <p>Holaaa </p>
        <p>Holaaa </p>
      </List>
    </div>
  )
}

export { AvaibleProducts };
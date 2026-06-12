import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-white text-[#0B0B0B]">

      {/* 🔹 HERO */}
      <section className="relative py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* 🔹 TEXTO */}
          <div className="space-y-8">

            <h1 className="text-5xl md:text-6xl font-semibold leading-[1.1] tracking-tight">
              El campo colombiano, directo al mercado internacional
            </h1>

            <p className="text-lg text-gray-600 max-w-lg">
              Trabajamos directamente con agricultores para llevar productos reales a compradores internacionales de forma clara y segura.
            </p>

            {/* Tags */}
            <div className="flex gap-3 flex-wrap">
              {["Producción real", "Exportación", "Conexión directa"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 text-sm rounded-full bg-gray-100 text-gray-700"
                >
            {tag}
          </span>
              ))}
            </div>

            {/* Botones */}
            <div className="flex gap-4 pt-4">
              <a
                href="/agricultores#formulario"
                className="bg-[#2E7D32] text-white px-7 py-3.5 rounded-full font-medium shadow-md hover:shadow-lg hover:scale-[1.02] transition"
              >
                Quiero exportar mi producción
              </a>

              <a
                href="/productos"
                className="px-7 py-3.5 rounded-full border border-gray-300 font-medium hover:bg-gray-100 transition"
              >
                Ver productos
              </a>
            </div>
          </div>

          {/* 🔹 IMAGEN CON DISEÑO */}
          <div className="relative">

            {/* Fondo decorativo */}
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#2E7D32]/10 rounded-full blur-3xl" />

            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/hero-productos.jpg"
                alt="Productos agrícolas"
                width={600}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 🔹 AGRICULTORES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <div className="space-y-5">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Lleva tu esfuerzo al mundo
            </h2>

            <p className="text-gray-600">
              Conectamos tus productos con compradores internacionales que valoran la calidad colombiana.
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>✔ Asesoría en documentación</li>
              <li>✔ Logística internacional</li>
              <li>✔ Conexión con compradores reales</li>
            </ul>

            <a
              href="/agricultores"
              className="inline-block bg-[#2E7D32] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#256628] transition"
            >
              Quiero exportar mi producción
            </a>
          </div>

          <div className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/agricultor.jpg"
              alt="Agricultor"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 🔹 COMPRADORES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <div className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-md order-2 md:order-1">
            <Image
              src="/exportacion.jpg"
              alt="Exportación"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-5 order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Tu mercado con productos colombianos
            </h2>

            <p className="text-gray-600">
              Trabajamos directamente con agricultores para ofrecerte productos de calidad, precios justos y un proceso
              claro.
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>✔ Calidad garantizada</li>
              <li>✔ Precios competitivos</li>
              <li>✔ Productores verificados</li>
            </ul>

            <div className="flex gap-4">
              <a
                href="/productos"
                className="bg-[#2E7D32] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#256628] transition"
              >
                Ver productos
              </a>

              <a
                href="/contacto"
                className="border border-gray-300 px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition"
              >
                Solicitar información
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 PRODUCTOS (preview) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 space-y-10">

          <div className="space-y-3 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Productos de temporada
            </h2>
            <p className="text-gray-600">
              Descubre productos disponibles y próximas cosechas.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {["Mango", "Café", "Aguacate"].map((producto) => (
              <div
                key={producto}
                className="p-6 border rounded-2xl bg-white hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold">{producto}</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Disponible según temporada
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/productos"
              className="inline-block mt-4 bg-[#2E7D32] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#256628] transition"
            >
              Ver todos los productos
            </a>
          </div>
        </div>
      </section>

      {/* 🔹 PROCESO */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-10">

          <h2 className="text-3xl md:text-4xl font-semibold">
            Así trabajamos contigo
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Nos cuentas qué tienes o necesitas",
              "Evaluamos viabilidad",
              "Gestionamos el proceso",
            ].map((step, i) => (
              <div key={i} className="p-6 border rounded-2xl">
                <p className="text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 CTA FINAL */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">

          <h2 className="text-3xl md:text-4xl font-semibold">
            ¿Te gustaría hacer parte de esto?
          </h2>

          <p className="text-gray-600">
            Ya seas agricultor o comprador, estamos listos para acompañarte.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="/agricultores"
              className="bg-[#2E7D32] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#256628] transition"
            >
              Soy agricultor
            </a>

            <a
              href="/compradores"
              className="border border-gray-300 px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition"
            >
              Soy comprador
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
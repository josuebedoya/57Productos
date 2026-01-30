export async function GET() {
  return new Response(JSON.stringify({data: 'Holaaa desde el api'}))
}
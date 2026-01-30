function response(data: Record<string, unknown>): Response {
  return new Response(JSON.stringify({ data }), { headers: { 'Content-Type': 'application/json' } });
}

export default response;
// frontend/src/lib/api.ts

export async function getHealth() {
  const response = await fetch("http://localhost:3001/health");

  return response.json();
}

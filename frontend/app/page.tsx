import Image from "next/image";
import { getHealth } from "@/src/lib/api";

export default async function Home() {
  const data = await getHealth();
  return (
    <main>
      <h1>service: {data.service}</h1>
      <h1>status: {data.status}</h1>
    </main>
  );
}

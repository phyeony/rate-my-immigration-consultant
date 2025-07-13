// src/app/page.tsx
import { getCanadaCities } from "@/lib/getCanadaCities";
import ClientPage from "./ClientPage";

export default function HomePage() {
  const cities = getCanadaCities(); // runs on the server

  return (
    <main>
      <ClientPage
        cities={cities}
      ></ClientPage>
    </main>
  );
}
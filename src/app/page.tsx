// src/app/page.tsx
import { getCanadaCities } from "@/lib/getCanadaCities";
import ClientPage from "./ClientPage";
import { City } from "@/types/City";
import { getLanguages } from "@/lib/getLanguages";

export default function HomePage() {
  const cities:City[] = getCanadaCities(); // runs on the server
 
  return (
    <main>
      <ClientPage
        cities={cities}
      ></ClientPage>
    </main>
  );
}
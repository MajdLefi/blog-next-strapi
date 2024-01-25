import Image from "next/image";
import { Herosection, ArticlesList } from "@/components";

export default function Home() {
  return (
    <main>
      <Herosection />
      <ArticlesList />
    </main>
  );
}

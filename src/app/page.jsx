import Link from "next/link";
export default function Home() {
  return (
    <div>
      <main>
 <h1>Hi!</h1>
    <Link href={"/api/products"}> go to see products </Link>
      </main>
    </div>
  );
}

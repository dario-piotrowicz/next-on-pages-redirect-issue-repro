import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/test">Go to <code>/test</code></Link>
    </main>
  );
}

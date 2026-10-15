import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 text-center">
      <h1 className="text-4xl font-semibold">Page not found</h1>
      <Link href="/" className="mt-6 inline-block underline">
        Back to home
      </Link>
    </section>
  );
}

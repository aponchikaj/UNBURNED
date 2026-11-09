import Link from "next/link";

export default function NotFound() {
  return (
    <section className="empty-state">
      <h1>404</h1>
      <p>Page not found</p>
      <Link href="/" className="button">
        Continue shopping
      </Link>
    </section>
  );
}

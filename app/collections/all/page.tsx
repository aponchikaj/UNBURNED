import type { Metadata } from "next";

export const metadata: Metadata = { title: "Products", robots: { index: false } };

export default function AllProductsPage() {
  return (
    <section className="empty-state">
      <p>No products found.</p>
    </section>
  );
}

import type { Metadata } from "next";
import { readContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How UNBURNED collects, uses and discloses personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <article className="policy">
      <h1 className="policy__title">Privacy policy</h1>
      <div className="rte" dangerouslySetInnerHTML={{ __html: readContent("privacy-policy.html") }} />
    </article>
  );
}

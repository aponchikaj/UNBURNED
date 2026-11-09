import Link from "next/link";
import { socials } from "@/lib/site";
import SocialIcon from "./SocialIcon";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__row">
        <p className="footer__copy">
          © 2026 <Link href="/">UNBURNED</Link>
        </p>
        <details className="footer__policies">
          <summary>Terms and Policies</summary>
          <ul>
            <li>
              <Link href="/policies/privacy-policy">Privacy policy</Link>
            </li>
          </ul>
        </details>
        <ul className="footer__social">
          {socials.map((s) => (
            <li key={s.name}>
              <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.name}>
                <SocialIcon name={s.name} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

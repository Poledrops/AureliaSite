import Link from "next/link";

import { contactEmail, developerName, privacyPath, siteName } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © 2026 {developerName} · {siteName}
        </p>
        <nav aria-label="Alt bağlantılar" className="footer-links">
          <a href={`mailto:${contactEmail}`}>İletişim</a>
          <Link href={privacyPath}>Gizlilik politikası</Link>
        </nav>
      </div>
      <p className="footer-watermark" aria-hidden="true">
        AURELIA
      </p>
    </footer>
  );
}

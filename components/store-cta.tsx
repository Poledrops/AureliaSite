import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { contactEmail, privacyPath, storeCopy, storeLabel } from "@/lib/content";

export function StoreCta() {
  return (
    <section id="yayin" className="section" aria-labelledby="yayin-title">
      <div className="container">
        <SectionHeading id="yayin-title" number="06" eyebrow="Yayın" title={storeCopy.title} />

        <div className="store-panel">
          <p className="store-text">{storeCopy.body}</p>
          <div className="store-actions">
            <span className="btn btn-ghost btn-soon" aria-disabled="true">
              <span className="pulse" aria-hidden="true" />
              {storeLabel}
            </span>
            <a className="btn btn-quiet" href={`mailto:${contactEmail}`}>
              E-posta gönder
            </a>
            <Link className="btn btn-quiet" href={privacyPath}>
              Gizlilik politikası
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

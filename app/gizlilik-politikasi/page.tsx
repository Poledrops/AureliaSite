import type { Metadata } from "next";
import type { ReactNode } from "react";

import { contactEmail, developerName, packageName, siteName } from "@/lib/content";

export const metadata: Metadata = {
  title: `Gizlilik Politikası · ${siteName}`,
  description: `${siteName} uygulamasının gizlilik politikası.`,
};

type PolicySection = {
  id: string;
  title: string;
  content: ReactNode;
};

// The table of contents is generated from this list, so the order here is the reading order.
const policySections: readonly PolicySection[] = [
  {
    id: "kapsam",
    title: "Kapsam",
    content: (
      <p>Bu politika, {siteName} mobil uygulamasını kullanırken verilerin nasıl ele alındığını açıklar.</p>
    ),
  },
  {
    id: "toplanan-veriler",
    title: "Toplanan veriler",
    content: (
      <>
        <p>
          Uygulama kişisel verilerinizi toplamaz, geliştiriciye veya üçüncü taraflara göndermez. Uygulama bir
          sunucuya bağlanmaz ve hesap gerektirmez.
        </p>
        <p>Uygulama yalnızca oyun ilerlemenizi ve ayarlarınızı cihazınızda saklar:</p>
        <ul>
          <li>
            <strong>Oyun kayıtları:</strong> altın, envanter, bölüm ilerlemesi, silah ve büyü seviyeleri ile görev
            durumu. Birden fazla kayıt yuvası kullanılabilir.
          </li>
          <li>
            <strong>Ayarlar:</strong> ses, müzik, efekt, ekran sarsıntısı, titreşim, sol el düzeni, kontrol boyutu
            ve saydamlığı, dil tercihi.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "izinler",
    title: "İzinler",
    content: (
      <p>
        Uygulama yalnızca titreşim iznini (VIBRATE) kullanır. Bu izinle oyunda hasar aldığınızda kısa bir titreşim
        verilir. Titreşimi Ayarlar bölümünden kapatabilirsiniz. Uygulama internet, konum, kamera, mikrofon, kişiler
        veya depolama izni istemez.
      </p>
    ),
  },
  {
    id: "reklam-ve-analitik",
    title: "Reklam ve analitik",
    content: (
      <p>
        Uygulama reklam göstermez, reklam kimliğini kullanmaz ve analitik ya da çökme raporlama hizmeti içermez.
      </p>
    ),
  },
  {
    id: "satin-almalar",
    title: "Satın almalar",
    content: <p>Uygulama içi satın alma yoktur. Oyun içindeki altın ve ödüller oyun içinde kazanılır.</p>,
  },
  {
    id: "ucuncu-taraflar",
    title: "Üçüncü taraflar",
    content: <p>Uygulama üçüncü taraf veri toplama hizmeti içermez. Verileriniz üçüncü taraflarla paylaşılmaz.</p>,
  },
  {
    id: "cocuklarin-gizliligi",
    title: "Çocukların gizliliği",
    content: (
      <p>
        Uygulama hiçbir kullanıcıdan veri toplamadığı için çocuklardan da veri toplamaz. Ebeveynler, çocuklarının
        uygulamayı kullanımını denetleyebilir.
      </p>
    ),
  },
  {
    id: "veri-saklama-ve-silme",
    title: "Veri saklama ve silme",
    content: (
      <p>
        Oyun verileri yalnızca cihazınızda tutulur. Kayıtlarınızı uygulama içinden silebilirsiniz. Uygulamayı
        kaldırdığınızda bu veriler de silinir. Uygulama Android bulut yedeklemesine dahil edilmez.
      </p>
    ),
  },
  {
    id: "guvenlik",
    title: "Güvenlik",
    content: (
      <p>
        Veriler cihazınızdan dışarı gönderilmediği için ağ üzerinden aktarım riski oluşmaz. Verilerinizi korumak
        için cihazınızın kilit ve güvenlik ayarlarını kullanmanızı öneririz.
      </p>
    ),
  },
  {
    id: "degisiklikler",
    title: "Değişiklikler",
    content: (
      <p>
        Bu politika güncellenirse yeni sürüm bu sayfada yayınlanır ve yukarıdaki yürürlük tarihi değiştirilir.
      </p>
    ),
  },
  {
    id: "iletisim",
    title: "İletişim",
    content: (
      <p>
        Bu politika hakkında sorularınız için: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <article className="policy">
      <div className="container policy-layout">
        <aside className="policy-toc" aria-labelledby="policy-toc-title">
          <p className="eyebrow" id="policy-toc-title">
            İçindekiler
          </p>
          <ol>
            {policySections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.title}</a>
              </li>
            ))}
          </ol>
        </aside>

        <div className="policy-card">
          <header className="policy-head">
            <p className="eyebrow">Yasal bilgilendirme</p>
            <h1 className="gold-text">Gizlilik Politikası</h1>
            <dl className="policy-meta">
              <div>
                <dt>Uygulama</dt>
                <dd>{siteName}</dd>
              </div>
              <div>
                <dt>Paket adı</dt>
                <dd>{packageName}</dd>
              </div>
              <div>
                <dt>Geliştirici</dt>
                <dd>{developerName}</dd>
              </div>
              <div>
                <dt>Yürürlük tarihi</dt>
                <dd>2 Kasım 2026</dd>
              </div>
            </dl>
          </header>

          {policySections.map((section) => (
            <section key={section.id} id={section.id} className="policy-section" aria-labelledby={`${section.id}-title`}>
              <h2 id={`${section.id}-title`}>{section.title}</h2>
              {section.content}
            </section>
          ))}

          <p className="policy-updated">Son güncelleme: 2 Kasım 2026</p>
        </div>
      </div>
    </article>
  );
}

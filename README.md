# Aurelia: Ashes of Memory - tanıtım sitesi

Next.js (App Router) ile hazırlanmış statik tanıtım sitesi. Oyunun Play Store görselleri, oyun içi kareler ve gizlilik politikası içerir.

## Komutlar

```bash
npm install
npm run dev     # geliştirme sunucusu
npm run build   # out/ klasörüne statik çıktı üretir
npm run lint
npx tsc --noEmit
```

## GitHub Pages

Proje sayfası olarak yayınlanacaksa (`https://<kullanıcı>.github.io/AureliaSite/`) yapıyı `BASE_PATH` ile derleyin:

```powershell
$env:BASE_PATH="/AureliaSite"; npm run build
```

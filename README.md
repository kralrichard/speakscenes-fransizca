# SpeakScenes Fransızca — Kaydır, Konuş, Büyü

SpeakScenes'in **Shorts odaklı Fransızca** klonu. TikTok tarzı dikey akışta
gerçek, seviyelendirilmiş (A0→C2) Fransızca cümleler: her yukarı kaydırma
karakterini büyütür (bebek → kendinden emin yetişkin) ve cümleler tam o hızda
zorlaşır. Her kart dinlenebilir (🔊 / 🐢 yavaş), **mikrofonla sesli söylenip**
gerçek konuşma tanımayla puanlanır (fr-FR), Türkçe çevirisi bir dokunuşla açılır.

- **Dünya haritası ve Karakter ekranı** — büyüyen avatarınla konuma göre pratik (Ev, Sokak, Park, Çarşı, Ofis...), avatar özelleştirme.
- **Binlerce üretilmiş, dil bilgisi doğrulanmış cümle** — un/une, le/la/l'
  artikelleri, elizyon (j'ai, d'un, l'avion) ve sıfat-cinsiyet uyumu kelime
  bankasında elle işlenmiştir; deterministik üretim, her açılışta aynı sıra.
- **Konuşma puanlama** dürüst hizalama motoru: eksik/yanlış/fazla kelimeler
  gerçek ASR çıktısından; olumsuzluk (pas/jamais) ve sayı hataları her seviyede
  reddedilir. Aksansız yazım adil karşılaştırılır (é→e her iki tarafta);
  konuşma dilinde düşen "ne" küçük hata sayılır, "pas" esas alınır.
- **Mikrofon yoksa** net şekilde belirtilen yazılı moda düşer.

Orijinal İngilizce uygulamanın diyalog/hikaye modları İngilizce içeriğe özel
olduğundan bu klonda kayıtlı değildir.

## Çalıştırma

```powershell
powershell -ExecutionPolicy Bypass -File serve.ps1 -LocalOnly
# http://localhost:8123
```

Testler: `http://localhost:8123/tests/`

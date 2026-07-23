// Tappable-word glossary + grammar notes for Story Mode. Keyed by the
// lowercase word so the conversation screen can look up any word the learner
// taps in an NPC line or their own sentence. Not exhaustive — it covers the
// content/travel words that actually appear in the scenarios. Words not found
// here fall back to a "no entry yet" popup rather than breaking.

// StoryWord = { word, tr, type, definition (TR), example, exampleTr, related? }
const WORDS = [
  { word: 'réservation', tr: 'rezervasyon', type: 'isim (une)',
    definition: 'Bir oda, masa ya da koltuğun sizin için ayrılması.',
    example: 'J’ai une réservation pour deux nuits.', exampleTr: 'İki geceliğine rezervasyonum var.', related: ['réserver'] },
  { word: 'petit-déjeuner', tr: 'kahvaltı', type: 'isim (le)',
    definition: 'Sabah yenen ilk öğün.',
    example: 'Le petit-déjeuner est compris ?', exampleTr: 'Kahvaltı dahil mi?' },
  { word: 'compris', tr: 'dahil', type: 'sıfat',
    definition: 'Fiyatın içinde olan.',
    example: 'Le petit-déjeuner est compris dans le prix.', exampleTr: 'Kahvaltı fiyata dahil.' },
  { word: 'clé', tr: 'anahtar', type: 'isim (la)',
    definition: 'Kapıyı açmaya yarayan nesne.',
    example: 'Voici votre clé.', exampleTr: 'İşte anahtarınız.' },
  { word: 'embarquement', tr: 'biniş', type: 'isim (l’)',
    definition: 'Uçağa, gemiye ya da trene binme.',
    example: 'Voici votre carte d’embarquement.', exampleTr: 'İşte biniş kartınız.', related: ['porte', 'vol'] },
  { word: 'porte', tr: 'kapı (uçuş)', type: 'isim (la)',
    definition: 'Havalimanında uçağa bindiğiniz yer.',
    example: 'Vous embarquez porte B12.', exampleTr: 'B12 kapısından bineceksiniz.' },
  { word: 'retard', tr: 'rötar / gecikme', type: 'isim (le)',
    definition: 'Geç kalma durumu.',
    example: 'Mon vol de correspondance a eu du retard.', exampleTr: 'Aktarma uçuşum rötar yaptı.', related: ['retardé'] },
  { word: 'bagage', tr: 'bagaj', type: 'isim (le)',
    definition: 'Yolculukta taşınan çantalar ve valizler.',
    example: 'Vous enregistrez des bagages ?', exampleTr: 'Bavul verecek misiniz?', related: ['valise'] },
  { word: 'ordonnance', tr: 'reçete', type: 'isim (une)',
    definition: 'Doktorun yazdığı ilaç belgesi.',
    example: 'Je voudrais faire préparer cette ordonnance.', exampleTr: 'Bu reçeteyi doldurtmak istiyorum.' },
  { word: 'somnoler', tr: 'uyuklamak', type: 'fiil',
    definition: 'Uykusu gelmek; yarı uykulu olmak.',
    example: 'Ce médicament peut faire somnoler.', exampleTr: 'Bu ilaç uyku yapabilir.' },
  { word: 'allergique', tr: 'alerjik', type: 'sıfat',
    definition: 'Vücudun bir şeye kötü tepki vermesi.',
    example: 'Je suis allergique aux noix.', exampleTr: 'Fındık/fıstığa alerjim var.' },
  { word: 'recommander', tr: 'önermek / tavsiye etmek', type: 'fiil',
    definition: 'Bir şeyin iyi olduğunu söylemek.',
    example: 'Qu’est-ce que vous recommandez ?', exampleTr: 'Ne önerirsiniz?' },
  { word: 'dédommagement', tr: 'tazminat / telafi', type: 'isim (le)',
    definition: 'Bir zahmet ya da kayıp için verilen karşılık.',
    example: 'Je m’attendrais à un dédommagement.', exampleTr: 'Bir telafi beklerdim.' },
  { word: 'malentendu', tr: 'yanlış anlaşılma', type: 'isim (le)',
    definition: 'Bir şeyi yanlış anlama durumu.',
    example: 'Je crois qu’il y a eu un malentendu.', exampleTr: 'Sanırım bir yanlış anlaşılma oldu.' },
  { word: 'déléguer', tr: 'yetki devretmek', type: 'fiil',
    definition: 'Bir işi başkasına vermek.',
    example: 'J’apprends à déléguer davantage.', exampleTr: 'Daha fazla yetki devretmeyi öğreniyorum.' },
  { word: 'responsabilité', tr: 'sorumluluk', type: 'isim (la)',
    definition: 'Üstlenilmesi gereken görev.',
    example: 'Je veux prendre plus de responsabilités.', exampleTr: 'Daha fazla sorumluluk almak istiyorum.' },
  { word: 's’excuser', tr: 'özür dilemek', type: 'fiil',
    definition: 'Üzgün olduğunu söylemek.',
    example: 'Je m’excuse pour le dérangement.', exampleTr: 'Zahmet için özür dilerim.' },
  { word: 'itinéraire', tr: 'yol tarifi / güzergah', type: 'isim (l’)',
    definition: 'Bir yere nasıl gidileceğini anlatan bilgiler.',
    example: 'Vous pouvez m’indiquer l’itinéraire ?', exampleTr: 'Bana yol tarifi verir misiniz?' },
  { word: 'pharmacie', tr: 'eczane', type: 'isim (la)',
    definition: 'İlaç satılan yer.',
    example: 'Où est la pharmacie la plus proche ?', exampleTr: 'En yakın eczane nerede?' },
  { word: 'remboursement', tr: 'para iadesi', type: 'isim (le)',
    definition: 'İade edilen ürün için geri verilen para.',
    example: 'Je voudrais un remboursement.', exampleTr: 'Para iadesi istiyorum.', related: ['échanger', 'rendre'] },
  { word: 'échanger', tr: 'değiştirmek', type: 'fiil',
    definition: 'Bir şeyi başka bir şeyle takas etmek.',
    example: 'Je peux l’échanger contre une taille plus grande ?', exampleTr: 'Daha büyük bedenle değiştirebilir miyim?' },
  { word: 'ticket', tr: 'fiş / bilet', type: 'isim (le)',
    definition: 'Ne ödediğinizi gösteren kağıt.',
    example: 'Vous avez le ticket de caisse ?', exampleTr: 'Fişiniz var mı?' },
  { word: 'voie', tr: 'peron / yol', type: 'isim (la)',
    definition: 'Trenin kalktığı platform.',
    example: 'Le train part de la voie trois.', exampleTr: 'Tren üçüncü perondan kalkıyor.' },
  { word: 'billet', tr: 'bilet', type: 'isim (le)',
    definition: 'Yolculuk için ödeme belgesi.',
    example: 'Un billet pour Londres, s’il vous plaît.', exampleTr: 'Londra’ya bir bilet, lütfen.', related: ['aller-retour'] },
  { word: 'bloquer', tr: 'bloke etmek', type: 'fiil',
    definition: 'Bir kartı kullanılamaz hale getirmek.',
    example: 'Vous pourriez bloquer ma carte ?', exampleTr: 'Kartımı bloke edebilir misiniz?' },
  { word: 'déclaration', tr: 'tutanak / bildirim', type: 'isim (la)',
    definition: 'Polise yapılan resmi bildirim.',
    example: 'Je voudrais faire une déclaration.', exampleTr: 'Tutanak tutturmak istiyorum.' },
  { word: 'assurance', tr: 'sigorta', type: 'isim (l’)',
    definition: 'Kayıplara karşı koruma sağlayan hizmet.',
    example: 'J’en ai besoin pour mon assurance.', exampleTr: 'Buna sigortam için ihtiyacım var.' },
  { word: 'correspondance', tr: 'aktarma', type: 'isim (la)',
    definition: 'Bir uçaktan/trenden diğerine geçiş.',
    example: 'Mon vol de correspondance a été retardé.', exampleTr: 'Aktarma uçuşum rötar yaptı.' }
];

export const STORY_VOCAB = Object.fromEntries(WORDS.map(w => [w.word.toLowerCase(), w]));

/** Look up a tapped word (strips punctuation, lowercases). Returns the entry
 *  or a minimal fallback object so the popup always has something to show. */
export function lookupWord(raw) {
  const key = String(raw).toLowerCase().replace(/[^\p{L}'’-]/gu, '');
  if (STORY_VOCAB[key]) return STORY_VOCAB[key];
  // try singular-ish fallbacks (drop trailing letters — covers common plurals)
  for (const cut of [1, 2]) {
    const base = key.slice(0, -cut);
    if (base && STORY_VOCAB[base]) return STORY_VOCAB[base];
  }
  return { word: key, tr: null, type: null, ipa: null, definition: null, example: null };
}

// Per-choice grammar notes, keyed by "scenarioId::choiceId". Only the trickier
// sentences get an explanation; the UI shows a generic "tap words to learn"
// hint when there's no specific note. Kept small on purpose — extendable.
export const GRAMMAR_NOTES = {
  'asking-directions::ask_pharmacy': {
    title: 'Kibar soru: pourriez-vous',
    points: [
      '“Vous pourriez me dire…” kibar bir rica kalıbıdır (koşul kipi).',
      'İç cümle: “…où est la pharmacie la plus proche”.',
      '“la plus proche” = en yakın (üstünlük derecesi).'
    ]
  },
  'hotel-checkin::confirm': {
    title: 'avoir + une réservation',
    points: [
      '“J’ai une réservation” — şu anki bir durum için şimdiki zaman.',
      '“au nom d’Alex” rezervasyonun kimin adına olduğunu söyler.'
    ]
  },
  'missing-flight::explain': {
    title: 'Passé composé ile neden anlatmak',
    points: [
      '“a été retardé” — edilgen geçmiş zaman: uçuş geciktirildi.',
      '“donc je n’ai pas pu…” gecikmenin sonucunu gösterir.'
    ]
  },
  'job-interview::honest_weakness': {
    title: 'imparfait + apprendre à',
    points: [
      '“je prenais trop sur moi” = değişmiş eski bir alışkanlık (imparfait).',
      '“j’apprends à déléguer” gelişimi gösterir — güçlü bir mülakat hamlesi.'
    ]
  }
};

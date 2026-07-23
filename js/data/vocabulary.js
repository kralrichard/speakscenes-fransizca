// A0/A1 word catalog. Powers the Object Hunt and Memory Match mini-games and
// Word Builder's target words. Every entry is real content (French word +
// Turkish meaning + example), not a placeholder -- these are the words an
// A0/A1 learner meets first: people, food, animals, actions, greetings,
// colors, numbers, everyday objects.
//
// VocabWord = {
//   id, word, translation_tr, emoji, level: 'A0'|'A1',
//   category, exampleSentence, exampleSentence_tr
// }

export const VOCABULARY = [
  // ---- people ----
  { id: 'mom', word: 'maman', translation_tr: 'anne', emoji: '👩', level: 'A0', category: 'people', exampleSentence: 'J’aime ma maman.', exampleSentence_tr: 'Annemi seviyorum.' },
  { id: 'dad', word: 'papa', translation_tr: 'baba', emoji: '👨', level: 'A0', category: 'people', exampleSentence: 'Mon papa est grand.', exampleSentence_tr: 'Babam uzun boylu.' },
  { id: 'baby', word: 'bébé', translation_tr: 'bebek', emoji: '👶', level: 'A0', category: 'people', exampleSentence: 'Le bébé dort.', exampleSentence_tr: 'Bebek uyuyor.' },
  { id: 'friend', word: 'ami', translation_tr: 'arkadaş', emoji: '🧑‍🤝‍🧑', level: 'A1', category: 'people', exampleSentence: 'C’est mon meilleur ami.', exampleSentence_tr: 'O benim en iyi arkadaşım.' },
  { id: 'boy', word: 'garçon', translation_tr: 'erkek çocuk', emoji: '👦', level: 'A0', category: 'people', exampleSentence: 'Le garçon joue.', exampleSentence_tr: 'Erkek çocuk oynuyor.' },
  { id: 'girl', word: 'fille', translation_tr: 'kız çocuk', emoji: '👧', level: 'A0', category: 'people', exampleSentence: 'La fille est contente.', exampleSentence_tr: 'Kız çocuk mutlu.' },
  { id: 'teacher', word: 'professeur', translation_tr: 'öğretmen', emoji: '🧑‍🏫', level: 'A1', category: 'people', exampleSentence: 'Mon professeur est gentil.', exampleSentence_tr: 'Öğretmenim naziktir.' },

  // ---- food & drink ----
  { id: 'water', word: 'eau', translation_tr: 'su', emoji: '💧', level: 'A0', category: 'food', exampleSentence: 'Je veux de l’eau.', exampleSentence_tr: 'Su istiyorum.' },
  { id: 'milk', word: 'lait', translation_tr: 'süt', emoji: '🥛', level: 'A0', category: 'food', exampleSentence: 'Le bébé boit du lait.', exampleSentence_tr: 'Bebek süt içiyor.' },
  { id: 'apple', word: 'pomme', translation_tr: 'elma', emoji: '🍎', level: 'A0', category: 'food', exampleSentence: 'Je mange une pomme.', exampleSentence_tr: 'Bir elma yiyorum.' },
  { id: 'banana', word: 'banane', translation_tr: 'muz', emoji: '🍌', level: 'A0', category: 'food', exampleSentence: 'Le singe aime les bananes.', exampleSentence_tr: 'Maymun muz sever.' },
  { id: 'bread', word: 'pain', translation_tr: 'ekmek', emoji: '🍞', level: 'A1', category: 'food', exampleSentence: 'Nous mangeons du pain tous les jours.', exampleSentence_tr: 'Her gün ekmek yeriz.' },
  { id: 'egg', word: 'œuf', translation_tr: 'yumurta', emoji: '🥚', level: 'A1', category: 'food', exampleSentence: 'J’ai mangé un œuf au petit-déjeuner.', exampleSentence_tr: 'Kahvaltıda yumurta yedim.' },
  { id: 'cheese', word: 'fromage', translation_tr: 'peynir', emoji: '🧀', level: 'A1', category: 'food', exampleSentence: 'Elle aime le fromage.', exampleSentence_tr: 'O peyniri sever.' },
  { id: 'cookie', word: 'biscuit', translation_tr: 'kurabiye', emoji: '🍪', level: 'A0', category: 'food', exampleSentence: 'Je peux avoir un biscuit ?', exampleSentence_tr: 'Bir kurabiye alabilir miyim?' },
  { id: 'juice', word: 'jus', translation_tr: 'meyve suyu', emoji: '🧃', level: 'A1', category: 'food', exampleSentence: 'Je bois du jus d’orange.', exampleSentence_tr: 'Portakal suyu içerim.' },

  // ---- animals ----
  { id: 'cat', word: 'chat', translation_tr: 'kedi', emoji: '🐱', level: 'A0', category: 'animals', exampleSentence: 'Le chat dort.', exampleSentence_tr: 'Kedi uyuyor.' },
  { id: 'dog', word: 'chien', translation_tr: 'köpek', emoji: '🐶', level: 'A0', category: 'animals', exampleSentence: 'Le chien court.', exampleSentence_tr: 'Köpek koşuyor.' },
  { id: 'bird', word: 'oiseau', translation_tr: 'kuş', emoji: '🐦', level: 'A0', category: 'animals', exampleSentence: 'L’oiseau peut voler.', exampleSentence_tr: 'Kuş uçabilir.' },
  { id: 'fish', word: 'poisson', translation_tr: 'balık', emoji: '🐟', level: 'A0', category: 'animals', exampleSentence: 'Le poisson nage dans l’eau.', exampleSentence_tr: 'Balık suda yüzer.' },
  { id: 'horse', word: 'cheval', translation_tr: 'at', emoji: '🐴', level: 'A1', category: 'animals', exampleSentence: 'Le cheval court vite.', exampleSentence_tr: 'At hızlı koşar.' },
  { id: 'rabbit', word: 'lapin', translation_tr: 'tavşan', emoji: '🐰', level: 'A1', category: 'animals', exampleSentence: 'Le lapin est petit.', exampleSentence_tr: 'Tavşan küçüktür.' },

  // ---- actions ----
  { id: 'eat', word: 'manger', translation_tr: 'yemek', emoji: '🍽️', level: 'A0', category: 'actions', exampleSentence: 'Je mange à huit heures.', exampleSentence_tr: 'Sekizde kahvaltı yaparım.' },
  { id: 'drink', word: 'boire', translation_tr: 'içmek', emoji: '🥤', level: 'A0', category: 'actions', exampleSentence: 'Je bois de l’eau tous les jours.', exampleSentence_tr: 'Her gün su içerim.' },
  { id: 'sleep', word: 'dormir', translation_tr: 'uyumak', emoji: '😴', level: 'A0', category: 'actions', exampleSentence: 'Le bébé aime dormir.', exampleSentence_tr: 'Bebek uyumayı sever.' },
  { id: 'play', word: 'jouer', translation_tr: 'oynamak', emoji: '🧸', level: 'A0', category: 'actions', exampleSentence: 'Les enfants jouent au parc.', exampleSentence_tr: 'Çocuklar parkta oynar.' },
  { id: 'walk', word: 'marcher', translation_tr: 'yürümek', emoji: '🚶', level: 'A1', category: 'actions', exampleSentence: 'Nous marchons jusqu’à l’école.', exampleSentence_tr: 'Okula yürüyerek gideriz.' },
  { id: 'run', word: 'courir', translation_tr: 'koşmak', emoji: '🏃', level: 'A1', category: 'actions', exampleSentence: 'Il peut courir très vite.', exampleSentence_tr: 'O çok hızlı koşabilir.' },
  { id: 'read', word: 'lire', translation_tr: 'okumak', emoji: '📖', level: 'A1', category: 'actions', exampleSentence: 'Je lis un livre chaque soir.', exampleSentence_tr: 'Her gece bir kitap okurum.' },
  { id: 'sing', word: 'chanter', translation_tr: 'şarkı söylemek', emoji: '🎵', level: 'A1', category: 'actions', exampleSentence: 'Elle aime chanter.', exampleSentence_tr: 'O şarkı söylemeyi sever.' },

  // ---- greetings & small words ----
  { id: 'hello', word: 'bonjour', translation_tr: 'merhaba', emoji: '👋', level: 'A0', category: 'greetings', exampleSentence: 'Bonjour ! Enchanté.', exampleSentence_tr: 'Merhaba! Tanıştığımıza memnun oldum.' },
  { id: 'bye', word: 'au revoir', translation_tr: 'hoşça kal', emoji: '👋', level: 'A0', category: 'greetings', exampleSentence: 'Au revoir ! À bientôt.', exampleSentence_tr: 'Hoşça kal! Yakında görüşürüz.' },
  { id: 'yes', word: 'oui', translation_tr: 'evet', emoji: '✅', level: 'A0', category: 'greetings', exampleSentence: 'Oui, avec plaisir.', exampleSentence_tr: 'Evet, memnuniyetle.' },
  { id: 'no', word: 'non', translation_tr: 'hayır', emoji: '❌', level: 'A0', category: 'greetings', exampleSentence: 'Non, merci.', exampleSentence_tr: 'Hayır, teşekkür ederim.' },
  { id: 'please', word: 's’il vous plaît', translation_tr: 'lütfen', emoji: '🙏', level: 'A1', category: 'greetings', exampleSentence: 'De l’eau, s’il vous plaît.', exampleSentence_tr: 'Su, lütfen.' },
  { id: 'thankyou', word: 'merci', translation_tr: 'teşekkür ederim', emoji: '🙏', level: 'A1', category: 'greetings', exampleSentence: 'Merci beaucoup.', exampleSentence_tr: 'Çok teşekkür ederim.' },
  { id: 'sorry', word: 'pardon', translation_tr: 'özür dilerim', emoji: '😔', level: 'A1', category: 'greetings', exampleSentence: 'Pardon, je suis en retard.', exampleSentence_tr: 'Özür dilerim, geç kaldım.' },

  // ---- colors ----
  { id: 'red', word: 'rouge', translation_tr: 'kırmızı', emoji: '🔴', level: 'A0', category: 'colors', exampleSentence: 'La pomme est rouge.', exampleSentence_tr: 'Elma kırmızı.' },
  { id: 'blue', word: 'bleu', translation_tr: 'mavi', emoji: '🔵', level: 'A0', category: 'colors', exampleSentence: 'Le ciel est bleu.', exampleSentence_tr: 'Gökyüzü mavi.' },
  { id: 'green', word: 'vert', translation_tr: 'yeşil', emoji: '🟢', level: 'A0', category: 'colors', exampleSentence: 'L’herbe est verte.', exampleSentence_tr: 'Çim yeşil.' },
  { id: 'yellow', word: 'jaune', translation_tr: 'sarı', emoji: '🟡', level: 'A0', category: 'colors', exampleSentence: 'La banane est jaune.', exampleSentence_tr: 'Muz sarı.' },

  // ---- numbers ----
  { id: 'one', word: 'un', translation_tr: 'bir', emoji: '1️⃣', level: 'A0', category: 'numbers', exampleSentence: 'J’ai un frère.', exampleSentence_tr: 'Bir erkek kardeşim var.' },
  { id: 'two', word: 'deux', translation_tr: 'iki', emoji: '2️⃣', level: 'A0', category: 'numbers', exampleSentence: 'J’ai deux chats.', exampleSentence_tr: 'İki kedim var.' },
  { id: 'three', word: 'trois', translation_tr: 'üç', emoji: '3️⃣', level: 'A0', category: 'numbers', exampleSentence: 'Trois livres sont sur la table.', exampleSentence_tr: 'Masada üç kitap var.' },

  // ---- objects ----
  { id: 'ball', word: 'ballon', translation_tr: 'top', emoji: '⚽', level: 'A0', category: 'objects', exampleSentence: 'Le garçon joue avec un ballon.', exampleSentence_tr: 'Çocuk topla oynuyor.' },
  { id: 'book', word: 'livre', translation_tr: 'kitap', emoji: '📕', level: 'A0', category: 'objects', exampleSentence: 'Je lis un livre.', exampleSentence_tr: 'Bir kitap okurum.' },
  { id: 'car', word: 'voiture', translation_tr: 'araba', emoji: '🚗', level: 'A0', category: 'objects', exampleSentence: 'La voiture est rapide.', exampleSentence_tr: 'Araba hızlı.' },
  { id: 'house', word: 'maison', translation_tr: 'ev', emoji: '🏠', level: 'A0', category: 'objects', exampleSentence: 'C’est ma maison.', exampleSentence_tr: 'Bu benim evim.' },
  { id: 'bed', word: 'lit', translation_tr: 'yatak', emoji: '🛏️', level: 'A0', category: 'objects', exampleSentence: 'Je dors dans mon lit.', exampleSentence_tr: 'Yatağımda uyurum.' },
  { id: 'chair', word: 'chaise', translation_tr: 'sandalye', emoji: '🪑', level: 'A1', category: 'objects', exampleSentence: 'Assieds-toi sur la chaise, s’il te plaît.', exampleSentence_tr: 'Lütfen sandalyeye otur.' },
  { id: 'phone', word: 'téléphone', translation_tr: 'telefon', emoji: '📱', level: 'A1', category: 'objects', exampleSentence: 'Mon téléphone est neuf.', exampleSentence_tr: 'Telefonum yeni.' },
  { id: 'bag', word: 'sac', translation_tr: 'çanta', emoji: '🎒', level: 'A1', category: 'objects', exampleSentence: 'Elle a un sac rouge.', exampleSentence_tr: 'Onun kırmızı bir çantası var.' },
  { id: 'umbrella', word: 'parapluie', translation_tr: 'şemsiye', emoji: '☂️', level: 'A1', category: 'objects', exampleSentence: 'Prends ton parapluie, il pleut.', exampleSentence_tr: 'Şemsiyeni al, yağmur yağıyor.' },
  { id: 'key', word: 'clé', translation_tr: 'anahtar', emoji: '🔑', level: 'A1', category: 'objects', exampleSentence: 'Où est ma clé ?', exampleSentence_tr: 'Anahtarım nerede?' },

  // ---- feelings ----
  { id: 'happy', word: 'content', translation_tr: 'mutlu', emoji: '😊', level: 'A1', category: 'feelings', exampleSentence: 'Je suis content aujourd’hui.', exampleSentence_tr: 'Bugün mutluyum.' },
  { id: 'sad', word: 'triste', translation_tr: 'üzgün', emoji: '😢', level: 'A1', category: 'feelings', exampleSentence: 'Elle a l’air triste.', exampleSentence_tr: 'Üzgün görünüyor.' },
  { id: 'tired', word: 'fatigué', translation_tr: 'yorgun', emoji: '😪', level: 'A1', category: 'feelings', exampleSentence: 'Je suis fatigué après l’école.', exampleSentence_tr: 'Okuldan sonra yorgunum.' },
  { id: 'hungry', word: 'faim', translation_tr: 'aç(lık)', emoji: '🍽️', level: 'A1', category: 'feelings', exampleSentence: 'J’ai faim, mangeons.', exampleSentence_tr: 'Açım, hadi yiyelim.' }
];

export function getVocabById(id) {
  return VOCABULARY.find(v => v.id === id);
}

export function getVocabByLevel(level) {
  return VOCABULARY.filter(v => v.level === level);
}

export function getVocabByCategory(category) {
  return VOCABULARY.filter(v => v.category === category);
}

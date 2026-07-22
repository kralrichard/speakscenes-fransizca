// ============================================================================
// Word banks — FRENCH. Nouns carry un/une + le/la/l' and gender; adjectives
// are used PREDICATIVELY only (Le chien est petit.), which sidesteps French
// adjective-position rules while keeping full gender agreement. Definite
// article "l'" attaches without a space; "de/d'" forms are derived from it.
//
// Noun = { w, ind, def, g, tr, topic }
// Adj  = { m, f, tr }
// Verb = { inf, first, trInf, tr1, trGer }  (first is the FULL "je ..." form,
//                                            so elision "j'écris" stays right)
// ============================================================================

const N = (w, ind, def, g, tr, topic) => ({ w, ind, def, g, tr, topic });

export const NOUNS = [
  // food
  N('pomme', 'une', 'la', 'f', 'elma', 'food'),
  N('banane', 'une', 'la', 'f', 'muz', 'food'),
  N('orange', 'une', "l'", 'f', 'portakal', 'food'),
  N('œuf', 'un', "l'", 'm', 'yumurta', 'food'),
  N('biscuit', 'un', 'le', 'm', 'kurabiye', 'food'),
  N('gâteau', 'un', 'le', 'm', 'pasta', 'food'),
  N('soupe', 'une', 'la', 'f', 'çorba', 'food'),
  N('salade', 'une', 'la', 'f', 'salata', 'food'),
  N('tomate', 'une', 'la', 'f', 'domates', 'food'),
  N('poire', 'une', 'la', 'f', 'armut', 'food'),
  N('citron', 'un', 'le', 'm', 'limon', 'food'),
  N('fromage', 'un', 'le', 'm', 'peynir', 'food'),
  // animals
  N('chien', 'un', 'le', 'm', 'köpek', 'animals'),
  N('chat', 'un', 'le', 'm', 'kedi', 'animals'),
  N('oiseau', 'un', "l'", 'm', 'kuş', 'animals'),
  N('poisson', 'un', 'le', 'm', 'balık', 'animals'),
  N('cheval', 'un', 'le', 'm', 'at', 'animals'),
  N('vache', 'une', 'la', 'f', 'inek', 'animals'),
  N('mouton', 'un', 'le', 'm', 'koyun', 'animals'),
  N('lapin', 'un', 'le', 'm', 'tavşan', 'animals'),
  N('canard', 'un', 'le', 'm', 'ördek', 'animals'),
  N('souris', 'une', 'la', 'f', 'fare', 'animals'),
  // objects
  N('livre', 'un', 'le', 'm', 'kitap', 'objects'),
  N('stylo', 'un', 'le', 'm', 'kalem', 'objects'),
  N('table', 'une', 'la', 'f', 'masa', 'objects'),
  N('chaise', 'une', 'la', 'f', 'sandalye', 'objects'),
  N('lit', 'un', 'le', 'm', 'yatak', 'objects'),
  N('porte', 'une', 'la', 'f', 'kapı', 'objects'),
  N('fenêtre', 'une', 'la', 'f', 'pencere', 'objects'),
  N('clé', 'une', 'la', 'f', 'anahtar', 'objects'),
  N('tasse', 'une', 'la', 'f', 'fincan', 'objects'),
  N('verre', 'un', 'le', 'm', 'bardak', 'objects'),
  N('sac', 'un', 'le', 'm', 'çanta', 'objects'),
  N('montre', 'une', 'la', 'f', 'saat', 'objects'),
  N('lampe', 'une', 'la', 'f', 'lamba', 'objects'),
  N('téléphone', 'un', 'le', 'm', 'telefon', 'objects'),
  // places
  N('maison', 'une', 'la', 'f', 'ev', 'places'),
  N('école', 'une', "l'", 'f', 'okul', 'places'),
  N('parc', 'un', 'le', 'm', 'park', 'places'),
  N('jardin', 'un', 'le', 'm', 'bahçe', 'places'),
  N('chambre', 'une', 'la', 'f', 'oda', 'places'),
  N('cuisine', 'une', 'la', 'f', 'mutfak', 'places'),
  N('ville', 'une', 'la', 'f', 'şehir', 'places'),
  N('hôpital', 'un', "l'", 'm', 'hastane', 'places'),
  N('gare', 'une', 'la', 'f', 'istasyon', 'places'),
  N('hôtel', 'un', "l'", 'm', 'otel', 'places'),
  N('restaurant', 'un', 'le', 'm', 'restoran', 'places'),
  // transport
  N('voiture', 'une', 'la', 'f', 'araba', 'transport'),
  N('bus', 'un', 'le', 'm', 'otobüs', 'transport'),
  N('train', 'un', 'le', 'm', 'tren', 'transport'),
  N('vélo', 'un', 'le', 'm', 'bisiklet', 'transport'),
  N('avion', 'un', "l'", 'm', 'uçak', 'transport'),
  // clothes
  N('chapeau', 'un', 'le', 'm', 'şapka', 'clothes'),
  N('chemise', 'une', 'la', 'f', 'gömlek', 'clothes'),
  N('chaussure', 'une', 'la', 'f', 'ayakkabı', 'clothes'),
  N('manteau', 'un', 'le', 'm', 'palto', 'clothes'),
  N('robe', 'une', 'la', 'f', 'elbise', 'clothes')
];

export const GOODS = NOUNS.filter(n => ['food', 'objects', 'clothes'].includes(n.topic));
export const PLACES = NOUNS.filter(n => n.topic === 'places');

export const ADJECTIVES = [
  ['grand', 'grande', 'büyük'], ['petit', 'petite', 'küçük'],
  ['nouveau', 'nouvelle', 'yeni'], ['vieux', 'vieille', 'eski'],
  ['beau', 'belle', 'güzel'], ['bon', 'bonne', 'iyi'],
  ['long', 'longue', 'uzun'], ['court', 'courte', 'kısa'],
  ['chaud', 'chaude', 'sıcak'], ['froid', 'froide', 'soğuk'],
  ['propre', 'propre', 'temiz'], ['sale', 'sale', 'kirli'],
  ['rapide', 'rapide', 'hızlı'], ['lent', 'lente', 'yavaş'],
  ['lourd', 'lourde', 'ağır'], ['léger', 'légère', 'hafif'],
  ['cher', 'chère', 'pahalı'], ['moderne', 'moderne', 'modern'],
  ['plein', 'pleine', 'dolu'], ['vide', 'vide', 'boş']
].map(([m, f, tr]) => ({ m, f, tr }));

export const VERBS = [
  ['nager', 'je nage', 'yüzmek', 'yüzüyorum', 'yüzmeyi'],
  ['courir', 'je cours', 'koşmak', 'koşuyorum', 'koşmayı'],
  ['dormir', 'je dors', 'uyumak', 'uyuyorum', 'uyumayı'],
  ['lire', 'je lis', 'okumak', 'okuyorum', 'okumayı'],
  ['écrire', "j'écris", 'yazmak', 'yazıyorum', 'yazmayı'],
  ['jouer', 'je joue', 'oynamak', 'oynuyorum', 'oynamayı'],
  ['travailler', 'je travaille', 'çalışmak', 'çalışıyorum', 'çalışmayı'],
  ['apprendre', "j'apprends", 'öğrenmek', 'öğreniyorum', 'öğrenmeyi'],
  ['cuisiner', 'je cuisine', 'yemek pişirmek', 'yemek pişiriyorum', 'yemek pişirmeyi'],
  ['chanter', 'je chante', 'şarkı söylemek', 'şarkı söylüyorum', 'şarkı söylemeyi'],
  ['danser', 'je danse', 'dans etmek', 'dans ediyorum', 'dans etmeyi'],
  ['attendre', "j'attends", 'beklemek', 'bekliyorum', 'beklemeyi'],
  ['voyager', 'je voyage', 'seyahat etmek', 'seyahat ediyorum', 'seyahat etmeyi'],
  ['peindre', 'je peins', 'resim yapmak', 'resim yapıyorum', 'resim yapmayı'],
  ['rire', 'je ris', 'gülmek', 'gülüyorum', 'gülmeyi'],
  ['étudier', "j'étudie", 'ders çalışmak', 'ders çalışıyorum', 'ders çalışmayı']
].map(([inf, first, trInf, tr1, trGer]) => ({ inf, first, trInf, tr1, trGer }));

export const OPINIONS = [
  ['cette décision était une erreur', 'bu karar bir hataydı'],
  ['le prix est beaucoup trop élevé', 'fiyat çok fazla yüksek'],
  ['il nous faut un plan plus clair', 'daha net bir plana ihtiyacımız var'],
  ['cette approche ne marchera pas', 'bu yaklaşım işe yaramayacak'],
  ['tout le monde mérite une seconde chance', 'herkes ikinci bir şansı hak eder'],
  ['le projet est en retard', 'proje programın gerisinde'],
  ['de petits changements peuvent faire une grande différence', 'küçük değişiklikler büyük fark yaratabilir'],
  ["le délai n'est pas réaliste", 'teslim tarihi gerçekçi değil'],
  ['le changement est inconfortable mais nécessaire', 'değişim rahatsız edici ama gerekli'],
  ['la meilleure solution est souvent la plus simple', 'en iyi çözüm çoğu zaman en basit olanıdır'],
  ['on ne peut pas plaire à tout le monde', 'herkesi memnun edemeyiz'],
  ['la patience est une qualité sous-estimée', 'sabır, hafife alınan bir beceridir'],
  ['cette tendance ne durera pas', 'bu trend sürmeyecek'],
  ['on devrait écouter plus et parler moins', 'konuştuğumuzdan çok dinlemeliyiz'],
  ['une bonne réputation prend des années', 'iyi bir itibar yıllar alır'],
  ['la vérité est rarement simple', 'gerçek nadiren basittir'],
  ["l'équipe est plus forte qu'une seule personne", 'takım, tek bir kişiden daha güçlüdür'],
  ['la première impression est difficile à changer', 'ilk izlenimleri değiştirmek zordur'],
  ['les chiffres ne collent pas', 'rakamlar tutmuyor'],
  ['le temps ne se rachète pas', 'zaman geri satın alınamaz']
].map(([c, tr]) => ({ c, tr }));

export const REQUESTS = [
  ['ouvrir la fenêtre', 'pencereyi açar mısın'],
  ['parler un peu plus lentement', 'biraz daha yavaş konuşur musun'],
  ["m'envoyer les détails", 'bana ayrıntıları gönderir misin'],
  ["m'aider avec ça", 'bu konuda bana yardım eder misin'],
  ["m'attendre dehors", 'beni dışarıda bekler misin'],
  ['me rappeler plus tard', 'beni sonra arar mısın'],
  ['expliquer ça encore une fois', 'bunu bir kez daha açıklar mısın'],
  ["jeter un coup d'œil", 'buna bir bakar mısın'],
  ["m'apporter un verre d'eau", 'bana bir bardak su getirir misin'],
  ["revérifier l'adresse", 'adresi bir daha kontrol eder misin'],
  ['tenir la porte', 'kapıyı tutar mısın'],
  ['me garder une place', 'bana bir yer ayırır mısın']
].map(([r, tr]) => ({ r, tr }));

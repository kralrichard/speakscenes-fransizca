// ============================================================================
// Word banks — FRENCH. Nouns carry un/une + le/la/l' and gender; adjectives
// carry gender forms and a `p` flag marking the ones that can safely follow
// the noun (postnominal) — pre-nominal adjectives (grand, petit, beau...)
// are used predicatively only. "l'" attaches without a space; de/d' derived.
//
// Noun = { w, ind, def, g, tr, topic }
// Adj  = { m, f, tr, p }
// Verb = { inf, first, part, trInf, tr1, trGer, trPast, trFut }
//         (first is the FULL "je ..." form so elision "j'écris" stays right)
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
export const OWNABLE = NOUNS.filter(n => ['food', 'objects', 'clothes', 'animals', 'transport'].includes(n.topic));

export const ADJECTIVES = [
  ['grand', 'grande', 'büyük', false], ['petit', 'petite', 'küçük', false],
  ['nouveau', 'nouvelle', 'yeni', false], ['vieux', 'vieille', 'eski', false],
  ['beau', 'belle', 'güzel', false], ['bon', 'bonne', 'iyi', false],
  ['long', 'longue', 'uzun', false], ['court', 'courte', 'kısa', false],
  ['chaud', 'chaude', 'sıcak', true], ['froid', 'froide', 'soğuk', true],
  ['propre', 'propre', 'temiz', true], ['sale', 'sale', 'kirli', true],
  ['rapide', 'rapide', 'hızlı', true], ['lent', 'lente', 'yavaş', true],
  ['lourd', 'lourde', 'ağır', true], ['léger', 'légère', 'hafif', true],
  ['cher', 'chère', 'pahalı', true], ['moderne', 'moderne', 'modern', true],
  ['plein', 'pleine', 'dolu', true], ['vide', 'vide', 'boş', true]
].map(([m, f, tr, p]) => ({ m, f, tr, p }));

export const VERBS = [
  ['nager', 'je nage', 'nagé', 'yüzmek', 'yüzüyorum', 'yüzmeyi', 'yüzdüm', 'yüzeceğim'],
  ['courir', 'je cours', 'couru', 'koşmak', 'koşuyorum', 'koşmayı', 'koştum', 'koşacağım'],
  ['dormir', 'je dors', 'dormi', 'uyumak', 'uyuyorum', 'uyumayı', 'uyudum', 'uyuyacağım'],
  ['lire', 'je lis', 'lu', 'okumak', 'okuyorum', 'okumayı', 'okudum', 'okuyacağım'],
  ['écrire', "j'écris", 'écrit', 'yazmak', 'yazıyorum', 'yazmayı', 'yazdım', 'yazacağım'],
  ['jouer', 'je joue', 'joué', 'oynamak', 'oynuyorum', 'oynamayı', 'oynadım', 'oynayacağım'],
  ['travailler', 'je travaille', 'travaillé', 'çalışmak', 'çalışıyorum', 'çalışmayı', 'çalıştım', 'çalışacağım'],
  ['apprendre', "j'apprends", 'appris', 'öğrenmek', 'öğreniyorum', 'öğrenmeyi', 'öğrendim', 'öğreneceğim'],
  ['cuisiner', 'je cuisine', 'cuisiné', 'yemek pişirmek', 'yemek pişiriyorum', 'yemek pişirmeyi', 'yemek pişirdim', 'yemek pişireceğim'],
  ['chanter', 'je chante', 'chanté', 'şarkı söylemek', 'şarkı söylüyorum', 'şarkı söylemeyi', 'şarkı söyledim', 'şarkı söyleyeceğim'],
  ['danser', 'je danse', 'dansé', 'dans etmek', 'dans ediyorum', 'dans etmeyi', 'dans ettim', 'dans edeceğim'],
  ['attendre', "j'attends", 'attendu', 'beklemek', 'bekliyorum', 'beklemeyi', 'bekledim', 'bekleyeceğim'],
  ['voyager', 'je voyage', 'voyagé', 'seyahat etmek', 'seyahat ediyorum', 'seyahat etmeyi', 'seyahat ettim', 'seyahat edeceğim'],
  ['peindre', 'je peins', 'peint', 'resim yapmak', 'resim yapıyorum', 'resim yapmayı', 'resim yaptım', 'resim yapacağım'],
  ['rire', 'je ris', 'ri', 'gülmek', 'gülüyorum', 'gülmeyi', 'güldüm', 'güleceğim'],
  ['étudier', "j'étudie", 'étudié', 'ders çalışmak', 'ders çalışıyorum', 'ders çalışmayı', 'ders çalıştım', 'ders çalışacağım']
].map(([inf, first, part, trInf, tr1, trGer, trPast, trFut]) =>
  ({ inf, first, part, trInf, tr1, trGer, trPast, trFut }));

// "I have been ...ing for ..." — French present + depuis.
export const ACTIVITIES = [
  ["J'attends", 'bekliyorum'],
  ["J'étudie le français", 'Fransızca çalışıyorum'],
  ['Je travaille sur ce rapport', 'bu rapor üzerinde çalışıyorum'],
  ['Je cherche mes clés', 'anahtarlarımı arıyorum'],
  ["J'économise pour un voyage", 'bir gezi için para biriktiriyorum'],
  ['Je nettoie la maison', 'evi temizliyorum'],
  ['Je prépare le mariage', 'düğünü planlıyorum'],
  ['Je lis ce livre', 'bu kitabı okuyorum'],
  ["Je m'entraîne à la salle de sport", 'spor salonunda antrenman yapıyorum'],
  ['Je cherche un nouveau travail', 'yeni bir iş arıyorum'],
  ["J'écris mon mémoire", 'tezimi yazıyorum'],
  ["J'apprends à cuisiner", 'yemek yapmayı öğreniyorum']
].map(([t, tr]) => ({ t, tr }));

export const DURATIONS = [
  ['depuis dix minutes', 'on dakikadır'],
  ['depuis une demi-heure', 'yarım saattir'],
  ['depuis deux heures', 'iki saattir'],
  ['depuis ce matin', 'bu sabahtan beri'],
  ['depuis trois jours', 'üç gündür'],
  ['depuis une semaine', 'bir haftadır'],
  ['depuis un mois', 'bir aydır'],
  ['depuis longtemps', 'uzun zamandır']
].map(([t, tr]) => ({ t, tr }));

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

// Hand-written, real everyday sentences — injected into the stream as-is.
export const DAILY = [
  // A1
  ['A1', 'Salut, ça va?', 'Merhaba, nasılsın?'],
  ['A1', 'Ça va bien, merci.', 'İyiyim, teşekkürler.'],
  ['A1', "Comment tu t'appelles?", 'Adın ne?'],
  ['A1', "Je m'appelle Anna.", 'Benim adım Anna.'],
  ['A1', 'Enchanté!', 'Memnun oldum!'],
  ['A1', 'Bonjour!', 'Günaydın!'],
  ['A1', 'Bonne nuit!', 'İyi geceler!'],
  ['A1', 'À demain!', 'Yarın görüşürüz!'],
  ['A1', "J'ai faim.", 'Acıktım.'],
  ['A1', "J'ai soif.", 'Susadım.'],
  ['A1', 'Je suis fatigué.', 'Yorgunum.'],
  ['A1', "Il fait très beau aujourd'hui.", 'Bugün hava çok güzel.'],
  ['A1', 'Il pleut.', 'Yağmur yağıyor.'],
  ['A1', 'Quel âge as-tu?', 'Kaç yaşındasın?'],
  ['A1', "J'ai dix ans.", 'On yaşındayım.'],
  ['A1', "Tu viens d'où?", 'Nerelisin?'],
  ['A1', 'Je viens de Turquie.', 'Türkiye’denim.'],
  ['A1', "C'est ma famille.", 'Bu benim ailem.'],
  ['A1', "Je t'aime.", 'Seni seviyorum.'],
  ['A1', 'Au revoir!', 'Hoşça kal!'],
  // A2
  ['A2', 'Je ne comprends pas.', 'Anlamıyorum.'],
  ['A2', 'Vous pouvez répéter?', 'Tekrar eder misiniz?'],
  ['A2', 'Vous pouvez parler plus lentement?', 'Daha yavaş konuşur musunuz?'],
  ['A2', "Vous pouvez m'aider?", 'Bana yardım eder misiniz?'],
  ['A2', 'Où sont les toilettes?', 'Tuvalet nerede?'],
  ['A2', 'Quelle heure est-il?', 'Saat kaç?'],
  ['A2', "On est quel jour aujourd'hui?", 'Bugün günlerden ne?'],
  ['A2', 'Quand passe le prochain bus?', 'Bir sonraki otobüs ne zaman?'],
  ['A2', 'Où je peux acheter un billet?', 'Bilet nereden alabilirim?'],
  ['A2', "L'addition, s'il vous plaît.", 'Hesap, lütfen.'],
  ['A2', 'Bon appétit!', 'Afiyet olsun!'],
  ['A2', 'Désolé, je suis en retard.', 'Özür dilerim, geç kaldım.'],
  ['A2', 'Pas de problème.', 'Sorun değil.'],
  ['A2', 'Quelle bonne idée!', 'Ne güzel bir fikir!'],
  ['A2', 'Je parle un peu français.', 'Biraz Fransızca konuşuyorum.'],
  ['A2', 'Je me suis perdu.', 'Kayboldum.'],
  ['A2', "Je peux m'asseoir ici?", 'Buraya oturabilir miyim?'],
  ['A2', 'Je peux prendre une photo?', 'Fotoğraf çekebilir miyim?'],
  ['A2', "C'est trop cher!", 'Bu çok pahalı!'],
  ['A2', 'Il y a une réduction?', 'İndirim var mı?'],
  // B1
  ['B1', 'Hier soir, je me suis couché très tard.', 'Dün gece çok geç yattım.'],
  ['B1', 'Demain, je dois me lever tôt.', 'Yarın erken kalkmam lazım.'],
  ['B1', 'Tu as des projets pour le week-end?', 'Hafta sonu için planın var mı?'],
  ['B1', "Ça fait longtemps qu'on ne s'est pas vus.", 'Uzun zamandır görüşemedik.'],
  ['B1', "J'habite dans cette ville depuis deux ans.", 'İki yıldır bu şehirde yaşıyorum.'],
  ['B1', 'Je cherche un nouveau travail en ce moment.', 'Şu sıralar yeni bir iş arıyorum.'],
  ['B1', 'Je viens de commencer le sport.', 'Spora yeni başladım.'],
  ['B1', 'Je te recommande vraiment ce livre.', 'Bu kitabı gerçekten tavsiye ederim.'],
  ['B1', "J'aimerais avoir plus de temps.", 'Keşke daha fazla zamanım olsa.'],
  ['B1', "Je promets que ça n'arrivera plus.", 'Söz veriyorum, bir daha olmayacak.'],
  ['B1', "Tu as changé d'avis?", 'Fikrini değiştirdin mi?'],
  ['B1', 'Ça vaut vraiment le coup?', 'Buna gerçekten değer mi?'],
  // B2
  ['B2', "Franchement, je n'en suis pas sûr.", 'Açıkçası pek emin değilim.'],
  ['B2', "Je suis entièrement d'accord avec toi.", 'Bu konuda sana tamamen katılıyorum.'],
  ['B2', "Si j'ai bien compris, la réunion de demain est annulée.", 'Yanlış anlamadıysam yarınki toplantı iptal.'],
  ['B2', 'Je comprends ce que tu veux dire, mais je vois ça autrement.', 'Ne demek istediğini anlıyorum ama farklı düşünüyorum.'],
  ['B2', 'Essaie de voir les choses sous cet angle.', 'Bir de şu açıdan bak.'],
  ['B2', 'Je ferai de mon mieux.', 'Elimden geleni yapacağım.'],
  ['B2', "Quoi qu'il arrive, ça valait la peine d'essayer.", 'Sonuç ne olursa olsun denemeye değerdi.'],
  ['B2', 'Donne-moi un peu de temps pour réfléchir.', 'Düşünmek için bana biraz zaman ver.']
].map(([level, t, tr]) => ({ level, t, tr }));

import { createScenario } from '../scenarioSchema.js?v=6';

// ── Meeting a new friend (A1) ───────────────────────────────────────────────
export const meetingFriend = createScenario({
  id: 'meeting-friend',
  title: 'Rencontrer un nouveau camarade',
  titleTr: 'Yeni bir sınıf arkadaşıyla tanışmak',
  environmentId: 'street', sceneType: 'school', level: 'A1',
  goal: 'Présente-toi et fais-toi un nouvel ami.',
  goalTr: 'Kendini tanıt ve yeni bir arkadaş edin.',
  npcIds: ['leo'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'leo', emotion: 'friendly',
      text: 'Salut ! Je crois qu’on ne se connaît pas. Moi, c’est Leo. Tu es nouveau ici ?',
      translation: 'Selam! Sanırım tanışmadık. Ben Leo. Buraya yeni mi geldin?',
      choices: [
        { id: 'introduce', intentionTr: 'Kendini tanıt', tone: 'friendly', difficulty: 'easy', xp: 10,
          sentence: 'Salut Leo ! Moi, c’est Sam. Oui, c’est ma première semaine.',
          translation: 'Selam Leo! Ben Sam. Evet, ilk haftam.',
          altAccepted: ['Salut moi c’est Sam oui première semaine', 'Bonjour Leo je m’appelle Sam je suis nouveau'],
          next: 'where_from', relationshipEffect: 1 },
        { id: 'shy', intentionTr: 'Utangaç ama nazik ol', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'Bonjour. Oui, je suis nouveau. Enchanté.',
          translation: 'Merhaba. Evet, yeniyim. Tanıştığıma memnun oldum.',
          altAccepted: ['Salut oui je suis nouveau enchanté', 'Bonjour je suis nouveau ici enchanté'],
          next: 'where_from' }
      ]
    },
    where_from: {
      id: 'where_from', speakerId: 'leo', emotion: 'curious',
      text: 'Enchanté, Sam ! Tu viens d’où ?',
      translation: 'Tanıştığıma memnun oldum, Sam! Nerelisin?',
      choices: [
        { id: 'from_turkey', intentionTr: 'Nereli olduğunu söyle', tone: 'friendly', difficulty: 'easy', xp: 10,
          sentence: 'Je viens de Turquie. J’ai déménagé ici le mois dernier.',
          translation: 'Türkiye’denim. Geçen ay buraya taşındım.',
          altAccepted: ['Je viens de Turquie j’ai déménagé le mois dernier', 'De Turquie je suis arrivé le mois dernier'],
          next: 'hobbies' },
        { id: 'ask_back', intentionTr: 'Sen nerelisin diye sor', tone: 'friendly', difficulty: 'medium', xp: 14,
          sentence: 'Je viens de Turquie. Et toi — tu es d’ici ?',
          translation: 'Türkiye’denim. Ya sen — buralı mısın?',
          altAccepted: ['Je viens de Turquie et toi', 'De Turquie tu viens d’où toi'],
          next: 'hobbies', relationshipEffect: 1 }
      ]
    },
    hobbies: {
      id: 'hobbies', speakerId: 'leo', emotion: 'happy',
      text: 'Cool ! Quelques-uns d’entre nous jouent au foot le vendredi après les cours. Tu veux venir cette semaine ?',
      translation: 'Harika! Birkaçımız cuma günleri dersten sonra futbol oynuyoruz. Bu hafta bize katılmak ister misin?',
      choices: [
        { id: 'accept', intentionTr: 'Daveti kabul et', tone: 'friendly', difficulty: 'easy', xp: 10,
          sentence: 'Ça a l’air sympa ! Je viendrais avec plaisir.',
          translation: 'Kulağa eğlenceli geliyor! Size katılmayı çok isterim.',
          altAccepted: ['Je viens avec plaisir', 'Ça a l’air super je veux bien venir'],
          next: 'end_friends', relationshipEffect: 2 },
        { id: 'decline_polite', intentionTr: 'Kibarca reddet ama başka zaman de', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Je ne peux pas ce vendredi, mais peut-être la semaine prochaine ?',
          translation: 'Bu cuma olmaz ama belki gelecek hafta?',
          altAccepted: ['Pas ce vendredi mais la semaine prochaine peut-être', 'Vendredi je suis pris et la semaine prochaine'],
          next: 'end_maybe', relationshipEffect: 1 },
        { id: 'ask_details', intentionTr: 'Saatini ve yerini sor', tone: 'friendly', difficulty: 'medium', xp: 14,
          sentence: 'Peut-être ! Ça commence à quelle heure, et vous jouez où ?',
          translation: 'Belki! Kaçta başlıyor ve nerede oynuyorsunuz?',
          altAccepted: ['À quelle heure et où vous jouez', 'Ça commence quand et où'],
          next: 'details' }
      ]
    },
    details: {
      id: 'details', speakerId: 'leo', emotion: 'friendly',
      text: 'On commence à seize heures, au parc derrière l’école. Prends des baskets et viens, c’est tout !',
      translation: 'Saat dörtte, okulun arkasındaki parkta başlıyoruz. Spor ayakkabı getir ve gel!',
      choices: [
        { id: 'ill_come', intentionTr: 'Geleceğini söyle', tone: 'friendly', difficulty: 'easy', xp: 10,
          sentence: 'Parfait, je serai là à seize heures. Merci pour l’invitation !',
          translation: 'Mükemmel, dörtte orada olacağım. Davet ettiğin için teşekkürler!',
          altAccepted: ['Super je serai là à seize heures', 'Je viens à seize heures merci pour l’invitation'],
          next: 'end_friends', relationshipEffect: 2 },
        { id: 'ask_bring', intentionTr: 'Başka bir şey getirmen gerekip gerekmediğini sor', tone: 'friendly', difficulty: 'medium', xp: 14,
          sentence: 'Génial ! Je dois apporter autre chose que des baskets ?',
          translation: 'Harika! Spor ayakkabı dışında başka bir şey getirmeli miyim?',
          altAccepted: ['Je dois apporter autre chose', 'Il faut autre chose que des baskets'],
          next: 'end_friends', relationshipEffect: 2 }
      ]
    }
  },
  endings: {
    end_friends: { id: 'end_friends', kind: 'relationship', title: 'Un nouvel ami', titleTr: 'Yeni bir arkadaş',
      text: 'Tu t’es présenté chaleureusement et tu as fait des plans avec Leo. C’est comme ça que naissent les amitiés !',
      translation: 'Kendini içtenlikle tanıttın ve Leo ile plan yaptın. Arkadaşlıklar böyle başlar!',
      relationshipEffect: 1, coins: 12 },
    end_maybe: { id: 'end_maybe', kind: 'success', title: 'Un bon début', titleTr: 'İyi bir başlangıç',
      text: 'Tu ne pouvais pas venir cette fois, mais tu as laissé la porte ouverte poliment. Leo redemandera.',
      translation: 'Bu sefer gelemedin ama kapıyı kibarca açık bıraktın. Leo tekrar soracak.',
      coins: 8 }
  }
});

// ── Asking for directions (A2) ──────────────────────────────────────────────
export const askingDirections = createScenario({
  id: 'asking-directions',
  title: 'Trouver son chemin',
  titleTr: 'Yolunu bulmak',
  environmentId: 'street', sceneType: 'street', level: 'A2',
  goal: 'Demande ton chemin à une inconnue et comprends la réponse.',
  goalTr: 'Bir yabancıdan yol tarifi iste ve cevabı anla.',
  npcIds: ['sophie'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'sophie', emotion: 'friendly',
      text: 'Tu as l’air un peu perdu — je peux t’aider à trouver quelque chose ?',
      translation: 'Biraz kaybolmuş görünüyorsun — bir şey bulmana yardım edebilir miyim?',
      choices: [
        { id: 'ask_station', intentionTr: 'İstasyonun yerini sor', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Oui, s’il vous plaît. Vous pouvez me dire comment aller à la gare ?',
          translation: 'Evet, lütfen. Tren istasyonuna nasıl gideceğimi söyler misiniz?',
          altAccepted: ['Comment aller à la gare', 'Vous pouvez m’indiquer le chemin de la gare'],
          next: 'station_dir', relationshipEffect: 1 },
        { id: 'ask_pharmacy', intentionTr: 'En yakın eczaneyi sor', tone: 'polite', difficulty: 'hard', xp: 18,
          sentence: 'Vous pourriez me dire où est la pharmacie la plus proche ?',
          translation: 'En yakın eczanenin nerede olduğunu söyleyebilir misiniz?',
          altAccepted: ['Où est la pharmacie la plus proche', 'Vous savez où est la pharmacie la plus proche'],
          next: 'pharmacy_dir', relationshipEffect: 1 }
      ]
    },
    station_dir: {
      id: 'station_dir', speakerId: 'sophie', emotion: 'helpful',
      text: 'Bien sûr ! Continuez tout droit dans cette rue, prenez la deuxième à gauche, et elle est juste devant vous. Environ cinq minutes.',
      translation: 'Tabii! Bu caddeden düz git, ikinci soldan dön, tam karşında. Yaklaşık beş dakika.',
      choices: [
        { id: 'confirm_understood', intentionTr: 'Anladığını tekrar ederek doğrula', tone: 'polite', difficulty: 'hard', xp: 18,
          sentence: 'Donc tout droit et la deuxième à gauche. C’est loin à pied ?',
          translation: 'Yani, düz git ve ikinci soldan dön. Yürüyerek uzak mı?',
          altAccepted: ['Tout droit et deuxième à gauche c’est loin à pied', 'Donc deuxième à gauche c’est loin'],
          next: 'walkable', relationshipEffect: 1 },
        { id: 'thanks_go', intentionTr: 'Teşekkür et ve git', tone: 'friendly', difficulty: 'easy', xp: 10,
          sentence: 'Compris, merci beaucoup pour votre aide !',
          translation: 'Anladım, yardımın için çok teşekkürler!',
          altAccepted: ['Merci beaucoup pour l’aide', 'C’est noté merci beaucoup'],
          next: 'end_found' }
      ]
    },
    pharmacy_dir: {
      id: 'pharmacy_dir', speakerId: 'sophie', emotion: 'helpful',
      text: 'Il y en a une juste au coin, à côté de la boulangerie. Tournez à droite aux feux et vous la verrez.',
      translation: 'Hemen köşede, fırının yanında bir tane var. Trafik ışıklarında sağa dön, göreceksin.',
      choices: [
        { id: 'thank_pharmacy', intentionTr: 'Teşekkür et', tone: 'friendly', difficulty: 'easy', xp: 10,
          sentence: 'À droite aux feux, à côté de la boulangerie. Merci !',
          translation: 'Işıklarda sağa, fırının yanında. Teşekkürler!',
          altAccepted: ['À droite aux feux près de la boulangerie merci', 'Je tourne à droite aux feux compris merci'],
          next: 'end_found', relationshipEffect: 1 },
        { id: 'ask_open', intentionTr: 'Şu an açık mı diye sor', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Merci ! Vous savez si elle est ouverte à cette heure-ci ?',
          translation: 'Teşekkürler! Bu saatte açık mı, biliyor musunuz?',
          altAccepted: ['Elle est ouverte à cette heure-ci', 'Vous savez si c’est ouvert maintenant'],
          next: 'end_found', relationshipEffect: 1 }
      ]
    },
    walkable: {
      id: 'walkable', speakerId: 'sophie', emotion: 'happy',
      text: 'Pas loin du tout — cinq minutes, tout plat. Ça ira très bien. Bon voyage !',
      translation: 'Hiç uzak değil — beş dakika, yol boyunca düz. Sorun olmaz. İyi yolculuklar!',
      next: 'end_confirmed'
    }
  },
  endings: {
    end_found: { id: 'end_found', kind: 'success', title: 'En route', titleTr: 'Yolunda',
      text: 'Tu as demandé clairement et remercié Sophie. Tu sais exactement où aller.',
      translation: 'Net biçimde sordun ve Sophie’ye teşekkür ettin. Nereye gideceğini tam olarak biliyorsun.',
      coins: 10 },
    end_confirmed: { id: 'end_confirmed', kind: 'excellent', title: 'Confirmé et confiant', titleTr: 'Doğrulandı ve emin',
      text: 'Tu as répété l’itinéraire pour vérifier que tu avais compris et posé une question de plus. La marque d’un locuteur sûr de lui.',
      translation: 'Anladığını kontrol etmek için tarifi tekrarladın ve bir soru daha sordun. Bu, kendinden emin bir konuşmacının işareti.',
      relationshipEffect: 1, coins: 14 }
  }
});

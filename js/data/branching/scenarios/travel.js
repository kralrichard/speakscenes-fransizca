import { createScenario } from '../scenarioSchema.js?v=6';

// ── Train station: buying a ticket (A2) ─────────────────────────────────────
export const trainTicket = createScenario({
  id: 'train-ticket',
  title: 'Acheter un billet de train',
  titleTr: 'Tren bileti almak',
  environmentId: 'train', sceneType: 'transit', level: 'A2',
  goal: 'Achète le bon billet pour ta destination.',
  goalTr: 'Gideceğin yere doğru bileti al.',
  npcIds: ['nina'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'nina', emotion: 'neutral',
      text: 'Au suivant, s’il vous plaît ! Vous voyagez où aujourd’hui ?',
      translation: 'Sıradaki, lütfen! Bugün nereye seyahat ediyorsunuz?',
      choices: [
        { id: 'to_london', intentionTr: 'Londra’ya bilet iste', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'Bonjour, je voudrais un billet pour Londres, s’il vous plaît.',
          translation: 'Merhaba, Londra’ya bir bilet istiyorum, lütfen.',
          altAccepted: ['Un billet pour Londres s’il vous plaît', 'Je peux avoir un billet pour Londres'],
          next: 'return_or_single' },
        { id: 'ask_next', intentionTr: 'Bir sonraki treni sor', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Quand part le prochain train pour Londres ?',
          translation: 'Londra’ya bir sonraki tren ne zaman?',
          altAccepted: ['À quelle heure est le prochain train pour Londres', 'Quand est le prochain train pour Londres'],
          next: 'next_train' }
      ]
    },
    next_train: {
      id: 'next_train', speakerId: 'nina', emotion: 'helpful',
      text: 'Le prochain part à 14 h 15, voie trois. Vous voulez un billet pour celui-là ?',
      translation: 'Bir sonraki 2:15’te üç numaralı perondan kalkıyor. Ona bilet ister misiniz?',
      choices: [
        { id: 'yes_ticket', intentionTr: 'Evet, o bilete al', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'Oui, s’il vous plaît, un billet pour celui de 14 h 15.',
          translation: 'Evet lütfen, 2:15 için bir bilet.',
          altAccepted: ['Oui un pour celui de quatorze heures quinze', 'Un billet pour ce train s’il vous plaît'],
          next: 'return_or_single' },
        { id: 'confirm_platform', intentionTr: 'Perdonu teyit ederek bilet al', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Oui, un billet s’il vous plaît. Voie trois, vous avez dit ?',
          translation: 'Evet, bir bilet lütfen. Peron üç, demiştiniz değil mi?',
          altAccepted: ['Un billet voie trois c’est ça', 'Oui c’était bien voie trois'],
          next: 'return_or_single' }
      ]
    },
    return_or_single: {
      id: 'return_or_single', speakerId: 'nina', emotion: 'neutral',
      text: 'Aller simple ou aller-retour ?',
      translation: 'Tek yön mü gidiş-dönüş mü?',
      choices: [
        { id: 'return', intentionTr: 'Gidiş-dönüş iste', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'Un aller-retour, s’il vous plaît. Je reviens ce soir.',
          translation: 'Gidiş-dönüş, lütfen. Bu gece dönüyorum.',
          altAccepted: ['Un aller-retour s’il vous plaît', 'Aller-retour je rentre ce soir'],
          next: 'end_ticket' },
        { id: 'single', intentionTr: 'Tek yön iste', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'Juste un aller simple, merci.',
          translation: 'Sadece tek yön, teşekkürler.',
          altAccepted: ['Un aller simple s’il vous plaît', 'Aller simple merci'],
          next: 'end_ticket' },
        { id: 'ask_discount', intentionTr: 'İndirim olup olmadığını sor', tone: 'polite', difficulty: 'hard', xp: 18,
          sentence: 'Un aller-retour — et il y a une réduction étudiante ?',
          translation: 'Gidiş-dönüş — ve öğrenci indirimi var mı?',
          altAccepted: ['Aller-retour et il y a une réduction étudiante', 'Vous avez une réduction étudiante'],
          next: 'discount' }
      ]
    },
    discount: {
      id: 'discount', speakerId: 'nina', emotion: 'friendly',
      text: 'Il y en a une, en effet — avec une carte étudiante valide, c’est vingt pour cent de réduction. Vous en avez une ?',
      translation: 'Aslında var — geçerli öğrenci kartıyla yüzde yirmi indirim. Kartınız var mı?',
      next: 'end_discount'
    }
  },
  endings: {
    end_ticket: { id: 'end_ticket', kind: 'success', title: 'Billet en main', titleTr: 'Bilet elde',
      text: 'Tu as acheté le bon billet et tu connais ta voie. En voiture !',
      translation: 'Doğru bileti aldın ve peronunu biliyorsun. Herkes trene!',
      coins: 10 },
    end_discount: { id: 'end_discount', kind: 'excellent', title: 'Billet moins cher', titleTr: 'Daha ucuz bilet',
      text: 'Tu as pensé à demander une réduction et tu as économisé. Voyager malin !',
      translation: 'İndirim sormayı akıl ettin ve para biriktirdin. Akıllı yolculuk!',
      coins: 14 }
  }
});

// ── Taxi ride (A2) ──────────────────────────────────────────────────────────
export const taxiRide = createScenario({
  id: 'taxi-ride',
  title: 'Prendre un taxi',
  titleTr: 'Taksiye binmek',
  environmentId: 'taxi', sceneType: 'taxi', level: 'A2',
  goal: 'Dis au chauffeur où aller et gère le trajet.',
  goalTr: 'Sürücüye nereye gideceğini söyle ve yolculuğu yönet.',
  npcIds: ['victor'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'victor', emotion: 'friendly',
      text: 'Bonsoir ! Montez. Où est-ce que je vous emmène ?',
      translation: 'İyi akşamlar! Atla. Sizi nereye götüreyim?',
      choices: [
        { id: 'airport', intentionTr: 'Havalimanına git de', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'À l’aéroport, s’il vous plaît. Terminal deux.',
          translation: 'Havalimanına, lütfen. İkinci terminal.',
          altAccepted: ['L’aéroport s’il vous plaît terminal deux', 'Aéroport terminal deux'],
          next: 'hurry' },
        { id: 'hotel_addr', intentionTr: 'Otel adresini ver', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Vous pouvez m’emmener à l’hôtel Sunrise, rue King ?',
          translation: 'Beni King Caddesi’ndeki Sunrise Otel’e götürür müsünüz?',
          altAccepted: ['L’hôtel Sunrise rue King s’il vous plaît', 'À l’hôtel Sunrise rue King'],
          next: 'smalltalk' }
      ]
    },
    hurry: {
      id: 'hurry', speakerId: 'victor', emotion: 'neutral',
      text: 'Pas de problème. Il y a pas mal de circulation ce soir — vous êtes pressé, ou je prends la jolie route ?',
      translation: 'Sorun değil. Bu gece trafik biraz yoğun — aceleniz var mı, yoksa manzaralı yoldan mı gideyim?',
      choices: [
        { id: 'fast', intentionTr: 'Acelen olduğunu söyle', tone: 'direct', difficulty: 'medium', xp: 14,
          sentence: 'Je suis pressé — le chemin le plus rapide, s’il vous plaît.',
          translation: 'Acelem var — en hızlı yol, lütfen.',
          altAccepted: ['Le plus rapide s’il vous plaît je suis pressé', 'La route la plus rapide je suis pressé'],
          next: 'end_arrived' },
        { id: 'relax', intentionTr: 'Acelen olmadığını söyle', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'Pas pressé du tout. Comme c’est plus simple pour vous.',
          translation: 'Hiç acelem yok. Sizin için hangisi kolaysa.',
          altAccepted: ['Pas pressé comme vous voulez', 'Prenez votre temps peu importe la route'],
          next: 'smalltalk', relationshipEffect: 1 }
      ]
    },
    smalltalk: {
      id: 'smalltalk', speakerId: 'victor', emotion: 'happy',
      text: 'Alors, vous visitez la ville, ou vous habitez ici ?',
      translation: 'Peki, şehri mi ziyaret ediyorsunuz yoksa burada mı yaşıyorsunuz?',
      choices: [
        { id: 'tourist', intentionTr: 'Turist olduğunu söyle', tone: 'friendly', difficulty: 'medium', xp: 14,
          sentence: 'Je suis juste de passage pour quelques jours. C’est une ville magnifique !',
          translation: 'Sadece birkaç günlüğüne ziyaretteyim. Güzel bir şehir!',
          altAccepted: ['Je visite pour quelques jours', 'De passage quelques jours c’est très joli'],
          next: 'recommend' },
        { id: 'quiet', intentionTr: 'Kibarca sessiz kalmayı tercih et', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Juste de passage. Mais la journée a été longue — ça vous dérange si je me repose ?',
          translation: 'Sadece ziyaret. Ama uzun bir gündü — dinlensem sorun olur mu?',
          altAccepted: ['Ça vous dérange si je me repose longue journée', 'Longue journée je peux fermer les yeux'],
          next: 'end_arrived', relationshipEffect: 1 }
      ]
    },
    recommend: {
      id: 'recommend', speakerId: 'victor', emotion: 'friendly',
      text: 'Alors il faut absolument voir le vieux marché et le port au coucher du soleil. Nous y voilà — ça fera douze euros.',
      translation: 'O zaman eski çarşıyı ve gün batımında limanı mutlaka görmelisiniz. Geldik — on iki euro.',
      next: 'end_tips'
    }
  },
  endings: {
    end_arrived: { id: 'end_arrived', kind: 'success', title: 'Arrivé sain et sauf', titleTr: 'Güvenle vardın',
      text: 'Tu as indiqué la destination au chauffeur et tu es arrivé sans souci. Un trajet facile.',
      translation: 'Sürücüye nereye gideceğini söyledin ve sorunsuz vardın. Kolay bir yolculuk.',
      coins: 10 },
    end_tips: { id: 'end_tips', kind: 'relationship', title: 'Des bons plans et un ami', titleTr: 'Yerel ipuçları ve bir dost',
      text: 'Tu as discuté avec le chauffeur et reçu de super conseils locaux. Un peu de conversation, ça mène loin en français !',
      translation: 'Sürücüyle sohbet ettin ve harika yerel ipuçları aldın. Fransızcada biraz sohbet çok işe yarar!',
      relationshipEffect: 1, coins: 12 }
  }
});

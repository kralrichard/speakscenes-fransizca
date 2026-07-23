import { createScenario } from '../scenarioSchema.js?v=6';

// ── Bank: reporting a lost card (B1) ────────────────────────────────────────
export const bankLostCard = createScenario({
  id: 'bank-lost-card',
  title: 'Signaler une carte perdue',
  titleTr: 'Kayıp kartı bildirmek',
  environmentId: 'bank', sceneType: 'bank-office', level: 'B1',
  goal: 'Signale ta carte perdue et obtiens une nouvelle carte.',
  goalTr: 'Kayıp kartını bildir ve yenisini al.',
  npcIds: ['david'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'david', emotion: 'friendly',
      text: 'Bonjour. Comment puis-je vous aider aujourd’hui ?',
      translation: 'Günaydın. Bugün nasıl yardımcı olabilirim?',
      choices: [
        { id: 'lost', intentionTr: 'Kartını kaybettiğini söyle', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Bonjour. Je crois que j’ai perdu ma carte bancaire.',
          translation: 'Günaydın. Sanırım banka kartımı kaybettim.',
          altAccepted: ['J’ai perdu ma carte bancaire', 'Je crois que j’ai perdu ma carte'],
          next: 'when_lost' },
        { id: 'stolen', intentionTr: 'Kartının çalınmış olabileceğini söyle', tone: 'direct', difficulty: 'hard', xp: 18,
          sentence: 'Je dois faire bloquer ma carte — je pense qu’elle a peut-être été volée.',
          translation: 'Kartımı bloke ettirmem gerekiyor — sanırım çalınmış olabilir.',
          altAccepted: ['Je pense que ma carte a été volée bloquez-la', 'Ma carte a peut-être été volée'],
          next: 'block_now' }
      ]
    },
    when_lost: {
      id: 'when_lost', speakerId: 'david', emotion: 'concerned',
      text: 'Je suis désolé. Quand l’avez-vous utilisée pour la dernière fois ? Je la bloque tout de suite.',
      translation: 'Bunu duyduğuma üzüldüm. En son ne zaman kullandınız? Hemen bloke edeceğim.',
      choices: [
        { id: 'yesterday', intentionTr: 'Dün kullandığını söyle', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Je l’ai utilisée hier dans un restaurant, et je ne l’ai pas revue depuis.',
          translation: 'Dün bir restoranda kullandım ve o zamandan beri görmedim.',
          altAccepted: ['La dernière fois hier au restaurant', 'Hier au restaurant et plus depuis'],
          next: 'new_card' },
        { id: 'not_sure', intentionTr: 'Emin olmadığını söyle', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Je ne suis pas sûr, pour être honnête. Peut-être il y a deux jours.',
          translation: 'Açıkçası emin değilim. Belki iki gün önce.',
          altAccepted: ['Je ne suis pas sûr peut-être il y a deux jours', 'Franchement je ne sais pas trop il y a quelques jours'],
          next: 'new_card' }
      ]
    },
    block_now: {
      id: 'block_now', speakerId: 'david', emotion: 'concerned',
      text: 'Compris — je la bloque à l’instant. C’est fait. Avez-vous remarqué des paiements que vous ne reconnaissez pas ?',
      translation: 'Anlaşıldı — şu an bloke ediyorum. Tamam. Tanımadığınız bir ödeme fark ettiniz mi?',
      choices: [
        { id: 'yes_strange', intentionTr: 'Tanımadığın bir ödeme olduğunu söyle', tone: 'direct', difficulty: 'hard', xp: 18,
          sentence: 'Oui, justement — il y a un paiement que je n’ai absolument pas fait.',
          translation: 'Evet, aslında — kesinlikle benim yapmadığım bir ödeme var.',
          altAccepted: ['Il y a un paiement que je n’ai pas fait', 'Oui je vois un débit qui n’est pas de moi'],
          next: 'dispute', relationshipEffect: 1 },
        { id: 'no_strange', intentionTr: 'Tuhaf bir şey yok de', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'Non, rien d’inhabituel pour l’instant.',
          translation: 'Hayır, şimdiye kadar tuhaf bir şey yok.',
          altAccepted: ['Non rien de bizarre pour l’instant', 'Rien d’inhabituel jusqu’ici'],
          next: 'new_card' }
      ]
    },
    dispute: {
      id: 'dispute', speakerId: 'david', emotion: 'friendly',
      text: 'Merci de l’avoir signalé. J’ouvre une contestation et vous n’en serez pas responsable. Maintenant, commandons votre nouvelle carte.',
      translation: 'Bildirdiğiniz için teşekkürler. Bir itiraz başlatacağım ve bundan sorumlu olmayacaksınız. Şimdi yeni kartınızı sipariş edelim.',
      next: 'new_card'
    },
    new_card: {
      id: 'new_card', speakerId: 'david', emotion: 'helpful',
      text: 'Je peux envoyer une nouvelle carte à votre adresse sous trois à cinq jours, ou vous pouvez la retirer ici demain. Qu’est-ce qui vous arrange ?',
      translation: 'Yeni kartı üç-beş günde adresinize gönderebilirim ya da yarın buradan alabilirsiniz. Hangisi uygun?',
      choices: [
        { id: 'post', intentionTr: 'Posta ile gönderilmesini iste', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'Envoyez-la à mon adresse, s’il vous plaît. C’est très bien.',
          translation: 'Lütfen adresime gönderin. Uygun.',
          altAccepted: ['Envoyez-la à mon adresse', 'Par courrier c’est bien'],
          next: 'end_sorted' },
        { id: 'collect', intentionTr: 'Yarın gelip almayı tercih et', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Je préférerais la retirer demain, si c’est possible.',
          translation: 'Mümkünse yarın gelip almayı tercih ederim.',
          altAccepted: ['Je viendrai la chercher demain', 'Je peux la récupérer ici demain'],
          next: 'end_sorted', relationshipEffect: 1 }
      ]
    }
  },
  endings: {
    end_sorted: { id: 'end_sorted', kind: 'problem-solved', title: 'Carte réglée', titleTr: 'Kart halledildi',
      text: 'Tu as signalé la carte perdue calmement, tu l’as fait bloquer et tu as organisé le remplacement. Exactement les bons réflexes.',
      translation: 'Kayıp kartı sakince bildirdin, bloke ettirdin ve yenisini ayarladın. Tam da doğru adımlar.',
      relationshipEffect: 1, coins: 14 }
  }
});

// ── Police station: reporting a lost phone (B1) ─────────────────────────────
export const policeLostPhone = createScenario({
  id: 'police-lost-phone',
  title: 'Signaler un téléphone perdu',
  titleTr: 'Kayıp telefonu bildirmek',
  environmentId: 'police', sceneType: 'formal-office', level: 'B1',
  goal: 'Fais une déclaration pour ton téléphone perdu et donne les détails.',
  goalTr: 'Kayıp telefonun için tutanak tut ve ayrıntıları ver.',
  npcIds: ['grant'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'grant', emotion: 'friendly',
      text: 'Bonjour. Que puis-je faire pour vous ?',
      translation: 'İyi günler. Sizin için ne yapabilirim?',
      choices: [
        { id: 'report_lost', intentionTr: 'Telefonunu kaybettiğini bildir', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Bonjour. Je voudrais déclarer la perte d’un téléphone, s’il vous plaît.',
          translation: 'Merhaba. Kayıp bir telefon bildirmek istiyorum, lütfen.',
          altAccepted: ['Je veux déclarer un téléphone perdu', 'Je voudrais signaler la perte de mon téléphone'],
          next: 'where' },
        { id: 'maybe_stolen', intentionTr: 'Çalınmış olabileceğini bildir', tone: 'direct', difficulty: 'hard', xp: 18,
          sentence: 'Je pense qu’on m’a volé mon téléphone dans le bus ce matin.',
          translation: 'Sanırım telefonum bu sabah otobüste çalındı.',
          altAccepted: ['Mon téléphone a été volé dans le bus ce matin', 'Je crois qu’on a pris mon téléphone dans le bus'],
          next: 'where' }
      ]
    },
    where: {
      id: 'where', speakerId: 'grant', emotion: 'neutral',
      text: 'Très bien, prenons les détails. Où et quand l’aviez-vous pour la dernière fois ?',
      translation: 'Peki, ayrıntıları alalım. En son nerede ve ne zaman elinizdeydi?',
      choices: [
        { id: 'give_details', intentionTr: 'Ayrıntılı yer ve zaman ver', tone: 'polite', difficulty: 'hard', xp: 18,
          sentence: 'Dans le bus numéro 12, ce matin vers huit heures. C’est un téléphone noir avec une coque bleue.',
          translation: '12 numaralı otobüste, bu sabah sekiz sularında. Mavi kılıfta siyah bir telefon.',
          altAccepted: ['Dans le bus 12 vers huit heures téléphone noir coque bleue', 'Vers huit heures dans le bus 12 un téléphone noir à coque bleue'],
          next: 'contact', relationshipEffect: 1 },
        { id: 'vague_details', intentionTr: 'Kısaca, emin olmadan söyle', tone: 'casual', difficulty: 'medium', xp: 14,
          sentence: 'Quelque part dans le centre-ville ce matin. Je ne sais pas exactement où.',
          translation: 'Bu sabah şehir merkezinde bir yerde. Tam olarak nerede emin değilim.',
          altAccepted: ['Dans le centre-ville ce matin pas sûr exactement', 'Quelque part en centre-ville ce matin'],
          next: 'contact' }
      ]
    },
    contact: {
      id: 'contact', speakerId: 'grant', emotion: 'helpful',
      text: 'C’est noté. J’enregistre la déclaration et je vous donne un numéro de référence. Comment voulez-vous qu’on vous contacte s’il réapparaît ?',
      translation: 'Aldım. Tutanağı tutup size bir referans numarası vereceğim. Bulunursa sizinle nasıl iletişim kuralım?',
      choices: [
        { id: 'by_email', intentionTr: 'E-posta ile iletişim iste', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'Par e-mail, ce serait le mieux, merci.',
          translation: 'E-posta ile olması en iyisi, teşekkürler.',
          altAccepted: ['L’e-mail c’est le mieux merci', 'Par e-mail s’il vous plaît'],
          next: 'end_filed' },
        { id: 'ask_insurance', intentionTr: 'Sigorta için ne gerektiğini sor', tone: 'polite', difficulty: 'hard', xp: 18,
          sentence: 'Par e-mail, s’il vous plaît. Et est-ce que j’aurai un document pour mon assurance ?',
          translation: 'E-posta ile, lütfen. Ayrıca, sigortam için bir belge alacak mıyım?',
          altAccepted: ['J’aurai un document pour l’assurance', 'Il y a des papiers pour mon assurance'],
          next: 'insurance', relationshipEffect: 1 }
      ]
    },
    insurance: {
      id: 'insurance', speakerId: 'grant', emotion: 'friendly',
      text: 'Oui — le numéro de référence et cette déclaration sont exactement ce que votre assureur demandera. Voilà pour vous. Bonne chance.',
      translation: 'Evet — referans numarası ve bu tutanak, sigortacınızın tam olarak isteyeceği şey. Buyurun. Bol şans.',
      next: 'end_insurance'
    }
  },
  endings: {
    end_filed: { id: 'end_filed', kind: 'problem-solved', title: 'Déclaration enregistrée', titleTr: 'Tutanak tutuldu',
      text: 'Tu as déclaré le téléphone clairement avec tous les détails. Tu ne pouvais rien faire de plus.',
      translation: 'Telefonu tüm ayrıntılarıyla net biçimde bildirdin. Yapabileceğin başka bir şey yoktu.',
      coins: 10 },
    end_insurance: { id: 'end_insurance', kind: 'excellent', title: 'Prêt pour l’assurance', titleTr: 'Sigortaya hazır',
      text: 'Tu as anticipé et demandé les documents pour l’assurance. Cette question peut te faire économiser beaucoup d’argent.',
      translation: 'İleriyi düşündün ve sigorta belgesini istedin. Bu soru sana çok para kazandırabilir.',
      coins: 14 }
  }
});

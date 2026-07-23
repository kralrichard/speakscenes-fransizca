import { createScenario } from '../scenarioSchema.js?v=6';

// Extra scenarios that add depth to existing environments (hotel, airport,
// restaurant) so each place has more than one thing to do.

// ── Hotel: asking for amenities (A1) ────────────────────────────────────────
export const hotelAmenities = createScenario({
  id: 'hotel-amenities',
  title: 'Wi-Fi, serviettes et petit-déjeuner',
  titleTr: 'Wi-Fi, havlu ve kahvaltı',
  environmentId: 'hotel', sceneType: 'hotel-lobby', level: 'A1',
  goal: 'Demande à la réception les petites choses dont tu as besoin.',
  goalTr: 'Resepsiyondan ihtiyacın olan küçük şeyleri iste.',
  npcIds: ['grace'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'grace', emotion: 'friendly',
      text: 'Rebonjour ! Tout va bien avec votre chambre ?',
      translation: 'Tekrar merhaba! Odanızla ilgili her şey yolunda mı?',
      choices: [
        { id: 'wifi', intentionTr: 'Wi-Fi şifresini sor', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'Oui, merci. Je pourrais avoir le mot de passe du Wi-Fi ?',
          translation: 'Evet, teşekkürler. Wi-Fi şifresini alabilir miyim?',
          altAccepted: ['C’est quoi le mot de passe du wifi', 'Je peux avoir le mot de passe wifi'],
          next: 'anything_else' },
        { id: 'towels', intentionTr: 'Fazladan havlu iste', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'Je pourrais avoir des serviettes en plus, s’il vous plaît ?',
          translation: 'Biraz fazladan havlu alabilir miyim, lütfen?',
          altAccepted: ['Je peux avoir des serviettes en plus', 'Encore quelques serviettes s’il vous plaît'],
          next: 'anything_else' },
        { id: 'breakfast_time', intentionTr: 'Kahvaltı saatini sor', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'À quelle heure est servi le petit-déjeuner le matin ?',
          translation: 'Sabah kahvaltı saat kaçta veriliyor?',
          altAccepted: ['Quand est servi le petit-déjeuner', 'À quelle heure commence le petit-déjeuner'],
          next: 'anything_else' }
      ]
    },
    anything_else: {
      id: 'anything_else', speakerId: 'grace', emotion: 'happy',
      text: 'Bien sûr, je m’en occupe tout de suite. Vous avez besoin d’autre chose ?',
      translation: 'Tabii, hemen hallederim. Başka bir ihtiyacınız var mı?',
      choices: [
        { id: 'no_thanks', intentionTr: 'Hayır, teşekkür et', tone: 'friendly', difficulty: 'easy', xp: 10,
          sentence: 'Non, c’est tout. Merci beaucoup !',
          translation: 'Hayır, hepsi bu. Çok teşekkürler!',
          altAccepted: ['C’est tout merci', 'Non merci c’est tout'],
          next: 'end_helped', relationshipEffect: 1 },
        { id: 'ask_taxi', intentionTr: 'Taksi çağırmalarını iste', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'En fait, oui — vous pourriez m’appeler un taxi pour huit heures ?',
          translation: 'Aslında, saat sekiz için bana bir taksi çağırır mısınız?',
          altAccepted: ['Vous pouvez appeler un taxi pour huit heures', 'Vous pouvez me réserver un taxi à huit heures'],
          next: 'end_helped', relationshipEffect: 1 }
      ]
    }
  },
  endings: {
    end_helped: { id: 'end_helped', kind: 'success', title: 'Tout est réglé', titleTr: 'Her şey ayarlandı',
      text: 'Tu as demandé ce qu’il te fallait poliment et clairement. La réception est ravie d’aider.',
      translation: 'İhtiyacını kibar ve net biçimde istedin. Resepsiyon yardımcı olmaktan memnun.',
      relationshipEffect: 1, coins: 10 }
  }
});

// ── Airport: passport control (B1) ──────────────────────────────────────────
export const passportControl = createScenario({
  id: 'passport-control',
  title: 'Le contrôle des passeports',
  titleTr: 'Pasaport kontrolü',
  environmentId: 'airport', sceneType: 'airport', level: 'B1',
  goal: 'Réponds aux questions de l’agent clairement et calmement.',
  goalTr: 'Memurun sorularını net ve sakin yanıtla.',
  npcIds: ['omar'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'omar', emotion: 'formal',
      text: 'Passeport, s’il vous plaît. Quel est le motif de votre visite ?',
      translation: 'Pasaport, lütfen. Ziyaretinizin amacı nedir?',
      choices: [
        { id: 'tourism', intentionTr: 'Turizm için geldiğini söyle', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Je suis ici en vacances pour deux semaines.',
          translation: 'İki haftalığına tatil için buradayım.',
          altAccepted: ['Je suis en vacances pour deux semaines', 'En vacances deux semaines'],
          next: 'where_staying' },
        { id: 'business', intentionTr: 'İş için geldiğini söyle', tone: 'formal', difficulty: 'hard', xp: 18,
          sentence: 'Je suis ici pour affaires — une conférence de trois jours.',
          translation: 'İş için buradayım — üç günlük bir konferans.',
          altAccepted: ['Je suis ici pour une conférence professionnelle', 'Pour affaires une conférence de trois jours'],
          next: 'where_staying' }
      ]
    },
    where_staying: {
      id: 'where_staying', speakerId: 'omar', emotion: 'neutral',
      text: 'Et où allez-vous loger ?',
      translation: 'Peki nerede kalacaksınız?',
      choices: [
        { id: 'hotel', intentionTr: 'Otelde kalacağını söyle', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'À l’hôtel Sunrise, dans le centre-ville.',
          translation: 'Şehir merkezindeki Sunrise Otel’de.',
          altAccepted: ['À l’hôtel Sunrise au centre-ville', 'Hôtel Sunrise centre-ville'],
          next: 'end_through' },
        { id: 'friend', intentionTr: 'Bir arkadaşında kalacağını söyle', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Je vais loger chez un ami qui habite ici.',
          translation: 'Burada yaşayan bir arkadaşımda kalacağım.',
          altAccepted: ['Chez un ami qui habite ici', 'Je reste chez un ami'],
          next: 'end_through' }
      ]
    }
  },
  endings: {
    end_through: { id: 'end_through', kind: 'success', title: 'Bienvenue dans le pays', titleTr: 'Ülkeye hoş geldin',
      text: 'Tu as répondu clairement et calmement, et tu es passé. Le contrôle des passeports est facile quand on reste simple.',
      translation: 'Net ve sakin yanıt verdin ve geçtin. Basit tutunca pasaport kontrolü kolaydır.',
      coins: 12 }
  }
});

// ── Restaurant: asking for the bill (A2) ────────────────────────────────────
export const restaurantBill = createScenario({
  id: 'restaurant-bill',
  title: 'Demander l’addition',
  titleTr: 'Hesabı istemek',
  environmentId: 'restaurant', sceneType: 'restaurant', level: 'A2',
  goal: 'Termine ton repas et paie comme tu veux.',
  goalTr: 'Yemeğini bitir ve istediğin şekilde öde.',
  npcIds: ['elena'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'elena', emotion: 'friendly',
      text: 'Tout s’est bien passé ? Je vous apporte autre chose ?',
      translation: 'Her şey nasıldı? Başka bir şey getirebilir miyim?',
      choices: [
        { id: 'bill', intentionTr: 'Hesabı iste', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'C’était délicieux, merci. On pourrait avoir l’addition, s’il vous plaît ?',
          translation: 'Çok güzeldi, teşekkürler. Hesabı alabilir miyiz, lütfen?',
          altAccepted: ['On peut avoir l’addition s’il vous plaît', 'L’addition s’il vous plaît'],
          next: 'pay_how' },
        { id: 'dessert', intentionTr: 'Tatlı menüsünü sor', tone: 'friendly', difficulty: 'medium', xp: 14,
          sentence: 'Tout était super ! Je pourrais voir la carte des desserts ?',
          translation: 'Her şey harikaydı! Tatlı menüsünü görebilir miyim?',
          altAccepted: ['Je peux voir la carte des desserts', 'Vous avez une carte des desserts'],
          next: 'dessert_node' }
      ]
    },
    dessert_node: {
      id: 'dessert_node', speakerId: 'elena', emotion: 'happy',
      text: 'Bien sûr ! Le gâteau au chocolat est incroyable. Je vous en apporte un ?',
      translation: 'Tabii! Çikolatalı kek muhteşem. Bir tane getireyim mi?',
      choices: [
        { id: 'yes_cake', intentionTr: 'Keki iste', tone: 'friendly', difficulty: 'easy', xp: 10,
          sentence: 'Oui, le gâteau au chocolat, c’est parfait !',
          translation: 'Evet, çikolatalı kek harika olur!',
          altAccepted: ['Oui le gâteau au chocolat s’il vous plaît', 'Je prends le gâteau au chocolat'],
          next: 'pay_how', relationshipEffect: 1 },
        { id: 'just_bill', intentionTr: 'Yok, sadece hesabı iste', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'Peut-être la prochaine fois — juste l’addition, s’il vous plaît.',
          translation: 'Belki bir dahaki sefere — sadece hesap, lütfen.',
          altAccepted: ['Juste l’addition s’il vous plaît', 'Non merci juste l’addition'],
          next: 'pay_how' }
      ]
    },
    pay_how: {
      id: 'pay_how', speakerId: 'elena', emotion: 'neutral',
      text: 'Voilà pour vous. Vous payez par carte ou en espèces ?',
      translation: 'Buyurun. Kartla mı yoksa nakit mi ödeyeceksiniz?',
      choices: [
        { id: 'card', intentionTr: 'Kartla öde', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'Par carte, s’il vous plaît. Et je pourrais avoir un reçu ?',
          translation: 'Kartla, lütfen. Bir de fiş alabilir miyim?',
          altAccepted: ['Par carte et un reçu s’il vous plaît', 'Carte s’il vous plaît avec un reçu'],
          next: 'end_paid' },
        { id: 'cash_tip', intentionTr: 'Nakit öde ve bahşiş bırak', tone: 'friendly', difficulty: 'medium', xp: 14,
          sentence: 'En espèces, s’il vous plaît. Gardez la monnaie — le service était super.',
          translation: 'Nakit, lütfen. Üstü kalsın — hizmet harikaydı.',
          altAccepted: ['En espèces gardez la monnaie', 'Je paie en liquide gardez la monnaie'],
          next: 'end_paid', relationshipEffect: 2 }
      ]
    }
  },
  endings: {
    end_paid: { id: 'end_paid', kind: 'success', title: 'Payé et terminé', titleTr: 'Ödendi, bitti',
      text: 'Tu as fini ton repas et payé sans accroc. Une expérience de restaurant complète en français !',
      translation: 'Yemeğini bitirdin ve sorunsuz ödedin. Fransızca ile eksiksiz bir restoran deneyimi!',
      relationshipEffect: 1, coins: 10 }
  }
});

import { createScenario } from '../scenarioSchema.js?v=6';

// ── Café order (A1) ─────────────────────────────────────────────────────────
export const cafeOrder = createScenario({
  id: 'cafe-order',
  title: 'Commander au café',
  titleTr: 'Kafede sipariş vermek',
  environmentId: 'cafe', sceneType: 'cafe', level: 'A1',
  goal: 'Commande une boisson comme tu l’aimes.',
  goalTr: 'İçeceğini istediğin gibi sipariş et.',
  npcIds: ['mia'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'mia', emotion: 'happy',
      text: 'Bonjour ! Qu’est-ce que je vous sers ?',
      translation: 'Merhaba! Ne alırsınız?',
      choices: [
        { id: 'coffee', intentionTr: 'Bir kahve iste', tone: 'friendly', difficulty: 'easy', xp: 10,
          sentence: 'Bonjour ! Je peux avoir un café, s’il vous plaît ?',
          translation: 'Merhaba! Bir kahve alabilir miyim, lütfen?',
          altAccepted: ['Un café s’il vous plaît', 'Je voudrais un café'],
          next: 'size' },
        { id: 'tea', intentionTr: 'Bir çay iste', tone: 'friendly', difficulty: 'easy', xp: 10,
          sentence: 'Je pourrais avoir une tasse de thé, s’il vous plaît ?',
          translation: 'Bir fincan çay alabilir miyim, lütfen?',
          altAccepted: ['Un thé s’il vous plaît', 'Je peux avoir un thé'],
          next: 'size' },
        { id: 'recommend', intentionTr: 'Ne önerdiğini sor', tone: 'friendly', difficulty: 'medium', xp: 14,
          sentence: 'Qu’est-ce qui est bon ici ? Qu’est-ce que vous recommandez ?',
          translation: 'Burada ne güzel? Ne önerirsin?',
          altAccepted: ['Qu’est-ce que vous recommandez', 'Qu’est-ce qui est populaire ici'],
          next: 'suggest' }
      ]
    },
    suggest: {
      id: 'suggest', speakerId: 'mia', emotion: 'friendly',
      text: 'Notre latte au caramel est très apprécié, et le thé glacé est parfait quand il fait chaud. Qu’est-ce qui vous tente ?',
      translation: 'Karamelli latte favorimiz, sıcak günlerde de buzlu çay harika. Hangisi hoşuna gitti?',
      choices: [
        { id: 'latte', intentionTr: 'Latte’yi seç', tone: 'friendly', difficulty: 'easy', xp: 10,
          sentence: 'Le latte au caramel a l’air parfait. Je vais prendre ça.',
          translation: 'Karamelli latte harika. Onu alayım.',
          altAccepted: ['Je prends le latte au caramel', 'Le latte au caramel s’il vous plaît'],
          next: 'size', relationshipEffect: 1 },
        { id: 'icedtea', intentionTr: 'Buzlu çayı seç', tone: 'friendly', difficulty: 'easy', xp: 10,
          sentence: 'Je vais essayer le thé glacé, merci.',
          translation: 'Buzlu çayı deneyeyim, teşekkürler.',
          altAccepted: ['Le thé glacé s’il vous plaît', 'Je prends le thé glacé'],
          next: 'size' }
      ]
    },
    size: {
      id: 'size', speakerId: 'mia', emotion: 'neutral',
      text: 'Bien sûr ! Quelle taille voulez-vous — petite, moyenne ou grande ?',
      translation: 'Tabii! Hangi boy istersiniz — küçük, orta, yoksa büyük?',
      choices: [
        { id: 'medium', intentionTr: 'Orta boy iste', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'Une moyenne, s’il vous plaît. À emporter.',
          translation: 'Orta boy, lütfen. Dışarı alacağım.',
          altAccepted: ['Moyenne s’il vous plaît à emporter', 'Une moyenne à emporter'],
          next: 'end_ordered' },
        { id: 'large_stay', intentionTr: 'Büyük iste ve içeride kal', tone: 'casual', difficulty: 'medium', xp: 14,
          sentence: 'Une grande, et je vais la boire ici.',
          translation: 'Büyük boy ve burada içeceğim.',
          altAccepted: ['Grande et je la bois ici', 'Une grande sur place'],
          next: 'end_ordered', relationshipEffect: 1 }
      ]
    }
  },
  endings: {
    end_ordered: { id: 'end_ordered', kind: 'success', title: 'Commande prête', titleTr: 'Sipariş hazır',
      text: 'Tu as commandé ta boisson clairement, avec la taille et tout. Bonne dégustation !',
      translation: 'İçeceğini boyuyla birlikte net biçimde sipariş ettin. Afiyet olsun!',
      relationshipEffect: 1, coins: 10 }
  }
});

// ── Café catch-up with a friend (B1) ────────────────────────────────────────
export const cafeMeetup = createScenario({
  id: 'cafe-meetup',
  title: 'Retrouvailles avec une vieille amie',
  titleTr: 'Eski bir arkadaşla hasret gidermek',
  environmentId: 'cafe', sceneType: 'cafe', level: 'B1',
  goal: 'Renoue avec une amie que tu n’as pas vue depuis des années.',
  goalTr: 'Yıllardır görmediğin bir arkadaşınla yeniden bağ kur.',
  npcIds: ['hannah'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'hannah', emotion: 'surprised',
      text: 'Oh là là — c’est vraiment toi ? Ça fait combien, cinq ans ?',
      translation: 'Aman tanrım — bu gerçekten sen misin? Ne kadar oldu, beş yıl mı?',
      choices: [
        { id: 'warm', intentionTr: 'Sıcak bir şekilde karşılık ver', tone: 'friendly', difficulty: 'medium', xp: 14,
          sentence: 'Hannah ! Je n’en reviens pas — tu n’as pas changé du tout !',
          translation: 'Hannah! İnanamıyorum — tıpatıp aynısın!',
          altAccepted: ['Je n’en reviens pas tu n’as pas changé', 'Hannah ça fait plaisir de te voir'],
          next: 'whats_new', relationshipEffect: 2 },
        { id: 'surprised', intentionTr: 'Şaşkınlığını dile getir', tone: 'casual', difficulty: 'medium', xp: 14,
          sentence: 'Waouh, quelle coïncidence ! Qu’est-ce que tu fais ici ?',
          translation: 'Vay, ne tesadüf! Burada ne yapıyorsun?',
          altAccepted: ['Quelle coïncidence qu’est-ce que tu fais ici', 'Qu’est-ce que tu fais ici'],
          next: 'whats_new' }
      ]
    },
    whats_new: {
      id: 'whats_new', speakerId: 'hannah', emotion: 'happy',
      text: 'Je suis revenue le mois dernier ! Je travaille à l’hôpital maintenant. Raconte — qu’est-ce que tu deviens ?',
      translation: 'Geçen ay geri taşındım! Şimdi hastanede çalışıyorum. Anlat bakalım — sen neler yapıyordun?',
      choices: [
        { id: 'job', intentionTr: 'İşinden bahset', tone: 'friendly', difficulty: 'hard', xp: 18,
          sentence: 'Tellement de choses ont changé ! J’ai monté ma propre entreprise il y a deux ans.',
          translation: 'Çok şey değişti! İki yıl önce kendi işimi kurdum.',
          altAccepted: ['J’ai monté ma propre entreprise il y a deux ans', 'Je dirige ma propre entreprise maintenant'],
          next: 'plans', relationshipEffect: 1 },
        { id: 'travel', intentionTr: 'Seyahatlerinden bahset', tone: 'friendly', difficulty: 'hard', xp: 18,
          sentence: 'Franchement, j’ai beaucoup voyagé — je rentre tout juste du Japon.',
          translation: 'Açıkçası çok seyahat ediyordum — daha yeni Japonya’dan döndüm.',
          altAccepted: ['J’ai beaucoup voyagé je rentre du Japon', 'Je rentre tout juste du Japon'],
          next: 'plans' }
      ]
    },
    plans: {
      id: 'plans', speakerId: 'hannah', emotion: 'friendly',
      text: 'C’est génial ! On a tellement de choses à se raconter. Tu as le temps pour un vrai café, ou tu es pressé ?',
      translation: 'Bu harika! Konuşacak çok şeyimiz var. Doğru dürüst bir kahveye vaktin var mı, yoksa acele mi ediyorsun?',
      choices: [
        { id: 'stay', intentionTr: 'Kal ve sohbet et', tone: 'friendly', difficulty: 'medium', xp: 16,
          sentence: 'J’ai tout l’après-midi. Prenons une table et discutons tranquillement.',
          translation: 'Bütün öğleden sonram boş. Bir masa tutup güzelce sohbet edelim.',
          altAccepted: ['J’ai le temps asseyons-nous et discutons', 'Prenons une table et parlons'],
          next: 'end_reunion', relationshipEffect: 2 },
        { id: 'reschedule', intentionTr: 'Şimdi olmaz ama buluşma ayarla', tone: 'polite', difficulty: 'hard', xp: 18,
          sentence: 'Je dois filer, mais échangeons nos numéros et voyons-nous cette semaine.',
          translation: 'Şimdi gitmem lazım ama numaralarımızı alalım ve bu hafta doğru dürüst buluşalım.',
          altAccepted: ['Échangeons nos numéros et voyons-nous cette semaine', 'Je dois partir mais on se voit cette semaine'],
          next: 'end_plan', relationshipEffect: 1 }
      ]
    }
  },
  endings: {
    end_reunion: { id: 'end_reunion', kind: 'relationship', title: 'De vraies retrouvailles', titleTr: 'Gerçek bir buluşma',
      text: 'Vous vous êtes assis et vous avez parlé pendant des heures. Certaines amitiés reprennent là où elles se sont arrêtées.',
      translation: 'Oturup saatlerce konuştunuz. Bazı dostluklar kaldığı yerden devam eder.',
      relationshipEffect: 2, coins: 16 },
    end_plan: { id: 'end_plan', kind: 'success', title: 'Un plan pour se revoir', titleTr: 'Buluşma planı',
      text: 'Tu ne pouvais pas rester, mais vous avez fait un vrai plan pour vous revoir. Géré avec chaleur et politesse.',
      translation: 'Kalamadın ama tekrar buluşmak için sağlam bir plan yaptın. Sıcak ve kibarca halledildi.',
      coins: 10 }
  }
});

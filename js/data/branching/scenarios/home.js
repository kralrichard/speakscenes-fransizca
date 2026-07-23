import { createScenario } from '../scenarioSchema.js?v=6';

// ── Home: a morning at home (A1) ────────────────────────────────────────────
export const homeMorning = createScenario({
  id: 'home-morning',
  title: 'Un matin à la maison',
  titleTr: 'Evde bir sabah',
  environmentId: 'home', sceneType: 'home', level: 'A1',
  goal: 'Discute avec ta sœur au petit-déjeuner.',
  goalTr: 'Kahvaltıda kız kardeşinle sohbet et.',
  npcIds: ['emma'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'emma', emotion: 'happy',
      text: 'Bonjour ! Tu es levé tôt. Tu as bien dormi ?',
      translation: 'Günaydın! Erken kalkmışsın. İyi uyudun mu?',
      choices: [
        { id: 'slept_well', intentionTr: 'İyi uyuduğunu söyle', tone: 'friendly', difficulty: 'easy', xp: 10,
          sentence: 'Bonjour ! Oui, j’ai très bien dormi, merci.',
          translation: 'Günaydın! Evet, çok iyi uyudum, teşekkürler.',
          altAccepted: ['Oui j’ai bien dormi merci', 'J’ai très bien dormi'],
          next: 'breakfast' },
        { id: 'tired', intentionTr: 'Hâlâ yorgun olduğunu söyle', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'Salut. Pas vraiment — je suis encore un peu fatigué.',
          translation: 'Günaydın. Pek sayılmaz — hâlâ biraz yorgunum.',
          altAccepted: ['Pas vraiment je suis encore fatigué', 'Je suis encore un peu fatigué'],
          next: 'breakfast' }
      ]
    },
    breakfast: {
      id: 'breakfast', speakerId: 'emma', emotion: 'friendly',
      text: 'Je fais des œufs. Tu en veux, ou juste un café ?',
      translation: 'Yumurta yapıyorum. Sen de ister misin, yoksa sadece kahve mi?',
      choices: [
        { id: 'eggs', intentionTr: 'Yumurta iste', tone: 'friendly', difficulty: 'easy', xp: 10,
          sentence: 'Des œufs, super, oui merci !',
          translation: 'Yumurta harika olur, evet lütfen!',
          altAccepted: ['Oui merci des œufs c’est super', 'Je veux bien des œufs'],
          next: 'plans' },
        { id: 'just_coffee', intentionTr: 'Sadece kahve iste', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'Juste un café pour moi, merci.',
          translation: 'Bana sadece kahve, teşekkürler.',
          altAccepted: ['Juste un café merci', 'Seulement un café merci'],
          next: 'plans' }
      ]
    },
    plans: {
      id: 'plans', speakerId: 'emma', emotion: 'curious',
      text: 'Alors, c’est quoi tes plans aujourd’hui ? Quelque chose de sympa ?',
      translation: 'Peki bugün planların ne? Eğlenceli bir şey var mı?',
      choices: [
        { id: 'busy', intentionTr: 'Meşgul olduğunu söyle', tone: 'casual', difficulty: 'medium', xp: 14,
          sentence: 'Je suis assez occupé — j’ai le travail et ensuite la salle de sport.',
          translation: 'Oldukça meşgulüm — işim var, sonra da spor salonu.',
          altAccepted: ['J’ai le travail et ensuite la salle de sport', 'Journée chargée le travail puis le sport'],
          next: 'end_day' },
        { id: 'invite', intentionTr: 'Kız kardeşini bir şeye davet et', tone: 'friendly', difficulty: 'hard', xp: 18,
          sentence: 'Pas grand-chose ! Tu veux aller au marché ensemble plus tard ?',
          translation: 'Pek bir şey yok! Sonra birlikte pazara gitmek ister misin?',
          altAccepted: ['Tu veux aller au marché ensemble', 'On va au marché ensemble plus tard'],
          next: 'end_together', relationshipEffect: 2 }
      ]
    }
  },
  endings: {
    end_day: { id: 'end_day', kind: 'success', title: 'Une journée bien remplie', titleTr: 'Yoğun bir güne',
      text: 'Une belle conversation matinale toute naturelle. Tu as expliqué ta journée clairement à ta sœur.',
      translation: 'Hoş, doğal bir sabah sohbeti. Gününü kız kardeşine net biçimde anlattın.',
      coins: 8 },
    end_together: { id: 'end_together', kind: 'relationship', title: 'Des plans ensemble', titleTr: 'Birlikte plan',
      text: 'Tu as invité ta sœur et vous avez fait un plan. Ces petites conversations, c’est du vrai français du quotidien.',
      translation: 'Kız kardeşini dışarı davet edip plan yaptın. Bunun gibi küçük sohbetler gerçek, günlük Fransızcadır.',
      relationshipEffect: 1, coins: 12 }
  }
});

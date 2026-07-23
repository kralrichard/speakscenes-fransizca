import { createScenario } from '../scenarioSchema.js?v=6';

// ── Job interview (B2) ──────────────────────────────────────────────────────
export const jobInterview = createScenario({
  id: 'job-interview',
  title: 'L’entretien d’embauche',
  titleTr: 'İş görüşmesi',
  environmentId: 'workplace', sceneType: 'formal-office', level: 'B2',
  goal: 'Fais forte impression et gère les questions difficiles.',
  goalTr: 'Güçlü bir izlenim bırak ve zor soruları yönet.',
  npcIds: ['carter'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'carter', emotion: 'formal',
      text: 'Merci d’être venu. Pour commencer, vous pouvez me parler un peu de vous ?',
      translation: 'Geldiğiniz için teşekkürler. Başlangıç olarak, kendinizden biraz bahseder misiniz?',
      choices: [
        { id: 'professional', intentionTr: 'Deneyimine odaklanarak profesyonel yanıt ver', tone: 'formal', difficulty: 'hard', xp: 18,
          sentence: 'Bien sûr. J’ai trois ans d’expérience en marketing, et j’ai envie de prendre plus de responsabilités.',
          translation: 'Tabii. Pazarlamada üç yıllık deneyimim var ve daha fazla sorumluluk almaya istekliyim.',
          altAccepted: ['J’ai trois ans d’expérience en marketing et je veux plus de responsabilités', 'Je travaille depuis trois ans en marketing et je suis prêt pour plus de responsabilités'],
          next: 'strengths', relationshipEffect: 1 },
        { id: 'personal', intentionTr: 'Daha kişisel ve tutkulu bir yanıt ver', tone: 'friendly', difficulty: 'hard', xp: 18,
          sentence: 'Certainement. Je suis quelqu’un de curieux qui adore résoudre des problèmes et apprendre de nouvelles compétences.',
          translation: 'Elbette. Sorun çözmeyi ve yeni beceriler öğrenmeyi seven meraklı bir insanım.',
          altAccepted: ['Je suis curieux et j’adore résoudre des problèmes', 'J’adore apprendre et résoudre des problèmes'],
          next: 'strengths' }
      ]
    },
    strengths: {
      id: 'strengths', speakerId: 'carter', emotion: 'curious',
      text: 'Bien. Quelle est votre plus grande qualité, et vous pouvez me donner un exemple ?',
      translation: 'Güzel. En büyük gücünüz nedir ve bir örnek verebilir misiniz?',
      choices: [
        { id: 'teamwork', intentionTr: 'Takım çalışması gücünü örnekle', tone: 'formal', difficulty: 'hard', xp: 18,
          sentence: 'Je travaille bien sous pression. L’an dernier, j’ai dirigé un projet livré deux semaines en avance.',
          translation: 'Baskı altında iyi çalışırım. Geçen yıl iki hafta erken tamamlanan bir projeyi yönettim.',
          altAccepted: ['Je gère bien la pression j’ai dirigé un projet livré en avance', 'Je suis bon sous pression mon dernier projet a fini en avance'],
          next: 'weakness' },
        { id: 'communication', intentionTr: 'İletişim gücünü örnekle', tone: 'formal', difficulty: 'hard', xp: 18,
          sentence: 'La communication. J’explique souvent des idées techniques pour que tout le monde puisse les comprendre.',
          translation: 'İletişim. Teknik fikirleri herkesin anlayabileceği şekilde sık sık açıklarım.',
          altAccepted: ['Je communique bien j’explique clairement les choses techniques', 'La communication je rends simples les idées complexes'],
          next: 'weakness' }
      ]
    },
    weakness: {
      id: 'weakness', speakerId: 'carter', emotion: 'thinking',
      text: 'Et honnêtement, quel est un défaut sur lequel vous travaillez ?',
      translation: 'Peki, dürüstçe, üzerinde çalıştığınız bir zayıflık nedir?',
      choices: [
        { id: 'honest_weakness', intentionTr: 'Dürüst ama olgun bir zayıflık ver', tone: 'formal', difficulty: 'hard', xp: 20,
          sentence: 'Avant, je prenais trop de choses sur moi, mais j’apprends à mieux déléguer.',
          translation: 'Eskiden her şeyi kendim üstlenirdim ama daha fazla yetki devretmeyi öğreniyorum.',
          altAccepted: ['Je prenais trop sur moi maintenant j’apprends à déléguer', 'Je fais tout moi-même mais je m’améliore en délégation'],
          next: 'questions', relationshipEffect: 1 },
        { id: 'cliche', intentionTr: 'Klişe “çok çalışıyorum” yanıtı ver', tone: 'direct', difficulty: 'medium', xp: 12,
          sentence: 'Honnêtement, je crois que je travaille juste trop parfois.',
          translation: 'Açıkçası, sanırım bazen sadece çok fazla çalışıyorum.',
          altAccepted: ['Je travaille trop parfois', 'Mon défaut c’est que je travaille trop'],
          next: 'questions_flat' }
      ]
    },
    questions: {
      id: 'questions', speakerId: 'carter', emotion: 'happy',
      text: 'C’est une réponse réfléchie. Vous avez des questions pour moi ?',
      translation: 'Bu düşünceli bir cevap. Bana sormak istediğiniz bir şey var mı?',
      choices: [
        { id: 'ask_team', intentionTr: 'Ekip hakkında bir soru sor', tone: 'formal', difficulty: 'hard', xp: 18,
          sentence: 'Oui — à quoi ressemble la réussite dans ce poste au cours des six premiers mois ?',
          translation: 'Evet — bu rolde ilk altı ayda başarı neye benzer?',
          altAccepted: ['À quoi ressemble la réussite les six premiers mois', 'Comment mesurez-vous la réussite dans ce poste au début'],
          next: 'end_strong', relationshipEffect: 2 },
        { id: 'no_questions', intentionTr: 'Sorunun olmadığını söyle', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'Non, je pense que vous avez tout couvert. Merci.',
          translation: 'Hayır, sanırım her şeyi anlattınız. Teşekkürler.',
          altAccepted: ['Non vous avez tout couvert merci', 'Je n’ai pas de questions merci'],
          next: 'end_solid' }
      ]
    },
    questions_flat: {
      id: 'questions_flat', speakerId: 'carter', emotion: 'neutral',
      text: 'Hmm, c’est une réponse courante. Bon — vous avez des questions pour moi ?',
      translation: 'Hmm, bu yaygın bir cevap. Peki — bana sormak istediğiniz bir şey var mı?',
      choices: [
        { id: 'recover', intentionTr: 'Güçlü bir soruyla toparla', tone: 'formal', difficulty: 'hard', xp: 18,
          sentence: 'Oui — comment décririez-vous l’équipe avec laquelle je travaillerais ?',
          translation: 'Evet — birlikte çalışacağım ekibi nasıl tanımlarsınız?',
          altAccepted: ['Comment décririez-vous l’équipe', 'Comment est l’équipe que je rejoindrais'],
          next: 'end_solid', relationshipEffect: 1 },
        { id: 'no_q2', intentionTr: 'Soru sorma', tone: 'polite', difficulty: 'easy', xp: 8,
          sentence: 'Non, rien pour l’instant. Merci pour votre temps.',
          translation: 'Hayır, şimdilik yok. Zaman ayırdığınız için teşekkürler.',
          altAccepted: ['Pas de questions merci pour votre temps', 'Rien pour le moment merci'],
          next: 'end_neutral' }
      ]
    }
  },
  endings: {
    end_strong: { id: 'end_strong', kind: 'excellent', title: 'Un entretien remarquable', titleTr: 'Öne çıkan bir görüşme',
      text: 'Des réponses structurées, un défaut honnête et une question finale pertinente. Madame Carter est impressionnée.',
      translation: 'Düzenli cevaplar, dürüst bir zayıflık ve keskin bir kapanış sorusu. Ms. Carter etkilendi.',
      relationshipEffect: 2, coins: 20 },
    end_solid: { id: 'end_solid', kind: 'success', title: 'Un entretien solide', titleTr: 'Sağlam bir görüşme',
      text: 'Tu as bien géré les questions et paru compétent. Une belle prestation.',
      translation: 'Soruları iyi yönettin ve yetenekli göründün. Güçlü bir performans.',
      relationshipEffect: 1, coins: 12 },
    end_neutral: { id: 'end_neutral', kind: 'neutral', title: 'Un entretien correct', titleTr: 'İyi bir görüşme',
      text: 'Tu t’en es sorti, mais quelques réponses étaient un peu prudentes. Pose une question finale forte la prochaine fois — rejoue et essaie !',
      translation: 'Atlattın ama birkaç cevap biraz temkinliydi. Bir dahaki sefere güçlü bir kapanış sorusu sor — tekrar oyna ve dene!',
      coins: 6 }
  }
});

// ── Workplace misunderstanding (B1) ─────────────────────────────────────────
export const workplaceMisunderstanding = createScenario({
  id: 'workplace-misunderstanding',
  title: 'Dissiper un malentendu',
  titleTr: 'Bir yanlış anlaşılmayı gidermek',
  environmentId: 'workplace', sceneType: 'formal-office', level: 'B1',
  goal: 'Règle un quiproquo avec un collègue sans aggraver les choses.',
  goalTr: 'Bir iş arkadaşıyla yaşanan karışıklığı daha kötüye götürmeden çöz.',
  npcIds: ['raj'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'raj', emotion: 'concerned',
      text: 'Hé, je pensais que tu envoyais le rapport au client hier. Ils viennent d’écrire pour demander où il est.',
      translation: 'Selam, raporu dün müşteriye göndereceğini sanıyordum. Az önce nerede olduğunu sorarak e-posta attılar.',
      choices: [
        { id: 'clarify', intentionTr: 'Kibarca yanlış anlaşıldığını açıkla', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Oh, je crois qu’il y a eu un malentendu — j’avais compris que c’était toi qui l’envoyais.',
          translation: 'Ah, sanırım bir karışıklık olmuş — onu senin göndereceğini anlamıştım.',
          altAccepted: ['Je pensais que tu l’envoyais', 'Il y a un malentendu j’avais compris que tu l’envoyais'],
          next: 'check_email' },
        { id: 'defensive', intentionTr: 'Savunmaya geç', tone: 'direct', difficulty: 'medium', xp: 12,
          sentence: 'Ce n’était pas mon travail. Personne ne m’a dit de l’envoyer.',
          translation: 'Bu benim işim değildi. Kimse bana göndermemi söylemedi.',
          altAccepted: ['Ce n’était pas ma tâche personne ne me l’a dit', 'Ce n’est pas mon travail personne ne me l’a demandé'],
          next: 'tension' }
      ]
    },
    check_email: {
      id: 'check_email', speakerId: 'raj', emotion: 'thinking',
      text: 'Ah bon ? Je regarde le fil… Ah, tu as raison, le message n’était pas clair. C’est ma faute. On fait quoi maintenant ?',
      translation: 'Gerçekten mi? Yazışmaya bakayım… Ah, haklısın, mesaj net değildi. Benim hatam. Şimdi ne yapmalıyız?',
      choices: [
        { id: 'take_action', intentionTr: 'Hemen çözüm öner', tone: 'friendly', difficulty: 'medium', xp: 16,
          sentence: 'Pas de problème. Je l’envoie tout de suite et je m’excuse auprès du client pour le retard.',
          translation: 'Sorun değil. Hemen gönderip gecikme için müşteriden özür dilerim.',
          altAccepted: ['Je l’envoie maintenant et je m’excuse pour le retard', 'Je l’envoie tout de suite et je présente nos excuses au client'],
          next: 'end_teamwork', relationshipEffect: 2 },
        { id: 'share_blame', intentionTr: 'Birlikte hallederiz de', tone: 'friendly', difficulty: 'hard', xp: 18,
          sentence: 'Ça arrive. Répondons tous les deux pour que le client sache qu’on s’en occupe.',
          translation: 'Olur böyle şeyler. İkimiz de yanıt verelim ki müşteri ilgilendiğimizi bilsin.',
          altAccepted: ['Répondons tous les deux au client', 'Ça arrive répondons ensemble pour qu’ils le sachent'],
          next: 'end_teamwork', relationshipEffect: 2 }
      ]
    },
    tension: {
      id: 'tension', speakerId: 'raj', emotion: 'concerned',
      text: 'D’accord, pas besoin de t’énerver. Je ne t’accuse pas — je veux juste régler ça. On peut le faire ensemble ?',
      translation: 'Tamam, ters çıkmana gerek yok. Seni suçlamıyorum — sadece düzeltmek istiyorum. Bunu birlikte çözebilir miyiz?',
      choices: [
        { id: 'apologize', intentionTr: 'Ters çıktığın için özür dile', tone: 'polite', difficulty: 'medium', xp: 16,
          sentence: 'Tu as raison, désolé — j’étais un peu stressé. Oui, réglons ça ensemble.',
          translation: 'Haklısın, özür dilerim — biraz stresliydim. Evet, birlikte çözelim.',
          altAccepted: ['Désolé j’étais stressé réglons ça ensemble', 'Tu as raison pardon on va le régler'],
          next: 'end_recovered', relationshipEffect: 1 },
        { id: 'stay_cold', intentionTr: 'Soğuk kal ama işi yap', tone: 'direct', difficulty: 'easy', xp: 10,
          sentence: 'Très bien. J’envoie le rapport maintenant.',
          translation: 'Tamam. Raporu şimdi göndereyim.',
          altAccepted: ['D’accord je l’envoie maintenant', 'Bon j’envoie ça tout de suite'],
          next: 'end_cold' }
      ]
    }
  },
  endings: {
    end_teamwork: { id: 'end_teamwork', kind: 'problem-solved', title: 'Réglé en équipe', titleTr: 'Ekip olarak çözüldü',
      text: 'Tu es resté calme, tu as clarifié le quiproquo et proposé une solution. Raj est ravi de travailler avec toi.',
      translation: 'Sakin kaldın, karışıklığı giderdin ve bir çözüm önerdin. Raj seninle çalışmaktan memnun.',
      relationshipEffect: 1, coins: 16 },
    end_recovered: { id: 'end_recovered', kind: 'relationship', title: 'Bien rattrapé', titleTr: 'İyi toparlandı',
      text: 'Tu as d’abord réagi sur la défensive, mais tu t’es excusé et tu as retourné la situation. Savoir réparer un moment, c’est une vraie compétence.',
      translation: 'Önce savunmaya geçtin ama özür dileyip durumu düzelttin. Bir anı onarmayı bilmek gerçek bir beceri.',
      relationshipEffect: 1, coins: 12 },
    end_cold: { id: 'end_cold', kind: 'neutral', title: 'Le travail a été fait', titleTr: 'İş halledildi',
      text: 'Le rapport est parti, mais l’ambiance est restée froide. La prochaine fois, essaie de détendre l’atmosphère — rejoue et vois la différence.',
      translation: 'Rapor gönderildi ama hava soğuk kaldı. Bir dahaki sefere ortamı yumuşatmayı dene — tekrar oyna ve farkı gör.',
      coins: 5 }
  }
});

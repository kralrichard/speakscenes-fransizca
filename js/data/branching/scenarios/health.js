import { createScenario } from '../scenarioSchema.js?v=6';

// NOTE: These are fictional language-learning conversations. They never give
// real medical advice or diagnoses — the NPC always defers to real care.

// ── Hospital visit (A2) ─────────────────────────────────────────────────────
export const hospitalVisit = createScenario({
  id: 'hospital-visit',
  title: 'Une visite chez le médecin',
  titleTr: 'Doktora bir ziyaret',
  environmentId: 'hospital', sceneType: 'hospital', level: 'A2',
  goal: 'Décris comment tu te sens et comprends les prochaines étapes.',
  goalTr: 'Nasıl hissettiğini anlat ve sonraki adımları anla.',
  npcIds: ['bennett'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'bennett', emotion: 'friendly',
      text: 'Bonjour, entrez et asseyez-vous. Qu’est-ce qui vous amène aujourd’hui ?',
      translation: 'Merhaba, içeri gelin ve oturun. Bugün sorun nedir?',
      choices: [
        { id: 'headache', intentionTr: 'Baş ağrın olduğunu anlat', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'J’ai un fort mal de tête depuis deux jours.',
          translation: 'İki gündür şiddetli bir baş ağrım var.',
          altAccepted: ['J’ai mal à la tête depuis deux jours', 'Ma tête me fait mal depuis deux jours'],
          next: 'when_started' },
        { id: 'stomach', intentionTr: 'Mide ağrın olduğunu anlat', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'J’ai mal au ventre depuis hier.',
          translation: 'Dünden beri midem ağrıyor.',
          altAccepted: ['J’ai des douleurs au ventre depuis hier', 'Mon ventre me fait mal depuis hier'],
          next: 'when_started' },
        { id: 'tired', intentionTr: 'Çok yorgun hissettiğini anlat', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Je me sens très fatigué et je n’arrive pas à bien dormir.',
          translation: 'Çok yorgun hissediyorum ve iyi uyuyamıyorum.',
          altAccepted: ['Je suis très fatigué et je dors mal', 'Je suis tout le temps fatigué et je dors mal'],
          next: 'lifestyle' }
      ]
    },
    when_started: {
      id: 'when_started', speakerId: 'bennett', emotion: 'thinking',
      text: 'Je vois. Et vous avez déjà pris quelque chose, ou c’est la première fois que vous le traitez ?',
      translation: 'Anlıyorum. Bunun için bir şey aldınız mı, yoksa ilk kez mi tedavi ediyorsunuz?',
      choices: [
        { id: 'took_nothing', intentionTr: 'Hiçbir şey almadığını söyle', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'Non, je n’ai encore rien pris.',
          translation: 'Hayır, henüz hiçbir şey almadım.',
          altAccepted: ['Je n’ai rien pris', 'Non rien pour l’instant'],
          next: 'advice' },
        { id: 'took_painkiller', intentionTr: 'Ağrı kesici aldığını ama işe yaramadığını söyle', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'J’ai pris un antidouleur, mais ça n’a pas vraiment aidé.',
          translation: 'Bir ağrı kesici aldım ama pek yardımcı olmadı.',
          altAccepted: ['J’ai pris un antidouleur mais ça n’a pas aidé', 'Un antidouleur n’a pas marché'],
          next: 'advice' }
      ]
    },
    lifestyle: {
      id: 'lifestyle', speakerId: 'bennett', emotion: 'curious',
      text: 'Merci de me le dire. Vous buvez combien d’eau, et comment est votre niveau de stress ces derniers temps ?',
      translation: 'Söylediğiniz için teşekkürler. Ne kadar su içiyorsunuz ve son zamanlarda stres seviyeniz nasıl?',
      choices: [
        { id: 'stressed', intentionTr: 'Çok stresli olduğunu söyle', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'J’ai eu beaucoup de stress au travail récemment.',
          translation: 'Son zamanlarda işte çok stres altındaydım.',
          altAccepted: ['J’ai beaucoup de stress au travail', 'Le travail a été très stressant dernièrement'],
          next: 'advice' },
        { id: 'fine_otherwise', intentionTr: 'Bunun dışında iyi olduğunu söyle', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'À part ça, je me sens bien, juste fatigué tout le temps.',
          translation: 'Bunun dışında iyiyim, sadece sürekli yorgunum.',
          altAccepted: ['Sinon je vais bien', 'À part ça ça va juste fatigué'],
          next: 'advice' }
      ]
    },
    advice: {
      id: 'advice', speakerId: 'bennett', emotion: 'friendly',
      text: 'Rien ici ne m’inquiète sérieusement. Je vais vous noter quelques étapes simples. Vous avez des questions avant de partir ?',
      translation: 'Burada beni ciddi anlamda endişelendiren bir şey yok. Size basit adımlar içeren bir not yazacağım. Gitmeden önce sorunuz var mı?',
      choices: [
        { id: 'ask_followup', intentionTr: 'Ne zaman geri dönmen gerektiğini sor', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Quand est-ce que je devrais revenir si ça ne s’améliore pas ?',
          translation: 'Eğer düzelmezse ne zaman geri gelmeliyim?',
          altAccepted: ['Quand revenir si ça continue', 'Je dois revenir si ça ne va pas mieux'],
          next: 'followup_answer', relationshipEffect: 1 },
        { id: 'thanks', intentionTr: 'Teşekkür et ve ayrıl', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'Non, c’est clair. Merci beaucoup, docteur.',
          translation: 'Hayır, açık. Çok teşekkür ederim, doktor.',
          altAccepted: ['C’est clair merci docteur', 'Pas de questions merci beaucoup'],
          next: 'end_clear' }
      ]
    },
    followup_answer: {
      id: 'followup_answer', speakerId: 'bennett', emotion: 'happy',
      text: 'Bonne question. S’il n’y a pas d’amélioration dans trois jours, reprenez rendez-vous. Prenez soin de vous.',
      translation: 'İyi soru. Üç günde iyileşme olmazsa yeni bir randevu alın. Kendinize iyi bakın.',
      next: 'end_thorough'
    }
  },
  endings: {
    end_clear: { id: 'end_clear', kind: 'success', title: 'Expliqué clairement', titleTr: 'Açıkça anlatıldı',
      text: 'Tu as décrit tes symptômes clairement et compris les conseils. Une visite calme et réussie.',
      translation: 'Belirtilerini net anlattın ve tavsiyeyi anladın. Sakin, başarılı bir ziyaret.',
      coins: 10 },
    end_thorough: { id: 'end_thorough', kind: 'excellent', title: 'Une visite approfondie', titleTr: 'Kapsamlı bir ziyaret',
      text: 'Tu ne t’es pas seulement expliqué, tu as aussi posé une question de suivi intelligente. C’est exactement comme ça qu’on gère une visite médicale en français.',
      translation: 'Sadece kendini anlatmadın, akıllıca bir takip sorusu da sordun. Bir doktor ziyaretini Fransızcada tam da böyle halledersin.',
      relationshipEffect: 1, coins: 14 }
  }
});

// ── Pharmacy visit (A2) ─────────────────────────────────────────────────────
export const pharmacyVisit = createScenario({
  id: 'pharmacy-visit',
  title: 'À la pharmacie',
  titleTr: 'Eczanede',
  environmentId: 'pharmacy', sceneType: 'retail', level: 'A2',
  goal: 'Trouve quelque chose contre le rhume et apprends comment le prendre.',
  goalTr: 'Soğuk algınlığı için bir şey al ve nasıl kullanacağını öğren.',
  npcIds: ['fatima'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'fatima', emotion: 'friendly',
      text: 'Bonjour ! Comment puis-je vous aider aujourd’hui ?',
      translation: 'Merhaba! Bugün size nasıl yardımcı olabilirim?',
      choices: [
        { id: 'cold', intentionTr: 'Soğuk algınlığı için bir şey iste', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'Bonjour, j’ai un rhume. Vous pourriez me conseiller quelque chose ?',
          translation: 'Merhaba, üşüttüm. Bir şey önerebilir misiniz?',
          altAccepted: ['J’ai un rhume vous pouvez me conseiller quelque chose', 'Vous avez quelque chose contre le rhume'],
          next: 'symptoms' },
        { id: 'prescription', intentionTr: 'Reçeteni vermek istediğini söyle', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'J’ai une ordonnance à faire préparer, s’il vous plaît.',
          translation: 'Doldurtmak istediğim bir reçetem var, lütfen.',
          altAccepted: ['Je voudrais faire préparer cette ordonnance', 'Vous pouvez préparer cette ordonnance'],
          next: 'prescription_node' }
      ]
    },
    symptoms: {
      id: 'symptoms', speakerId: 'fatima', emotion: 'curious',
      text: 'Désolée d’entendre ça. Vous avez surtout mal à la gorge, de la toux, ou le nez bouché ?',
      translation: 'Duyduğuma üzüldüm. Daha çok boğaz ağrınız mı, öksürüğünüz mü yoksa burun tıkanıklığınız mı var?',
      choices: [
        { id: 'throat', intentionTr: 'Boğazının ağrıdığını söyle', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'Surtout mal à la gorge et un peu de toux.',
          translation: 'Çoğunlukla boğaz ağrısı ve biraz öksürük.',
          altAccepted: ['Mal à la gorge et une petite toux', 'Surtout la gorge et je tousse un peu'],
          next: 'recommend' },
        { id: 'nose', intentionTr: 'Burnunun tıkalı olduğunu söyle', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'Mon nez est complètement bouché et je n’arrête pas d’éternuer.',
          translation: 'Burnum çok tıkalı ve sürekli hapşırıyorum.',
          altAccepted: ['Mon nez est bouché et j’éternue beaucoup', 'Le nez très bouché et beaucoup d’éternuements'],
          next: 'recommend' }
      ]
    },
    recommend: {
      id: 'recommend', speakerId: 'fatima', emotion: 'friendly',
      text: 'Ce sirop devrait aider. Prenez une cuillère trois fois par jour, après les repas. Vous avez des allergies que je devrais connaître ?',
      translation: 'Bu şurup yardımcı olmalı. Günde üç kez, yemeklerden sonra bir kaşık alın. Bilmem gereken bir alerjiniz var mı?',
      choices: [
        { id: 'no_allergy', intentionTr: 'Alerjin olmadığını söyle', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'Pas d’allergies. Je dois le prendre avec de l’eau ?',
          translation: 'Alerjim yok. Suyla mı almalıyım?',
          altAccepted: ['Pas d’allergies je le prends avec de l’eau', 'Non aucune avec de l’eau'],
          next: 'instructions', relationshipEffect: 1 },
        { id: 'ask_drowsy', intentionTr: 'Uyku yapıp yapmadığını sor', tone: 'polite', difficulty: 'hard', xp: 18,
          sentence: 'Pas d’allergies. Est-ce que ça fait dormir ? Je dois conduire.',
          translation: 'Alerjim yok. Bu beni uyuşuk yapar mı? Araç kullanmam gerekiyor.',
          altAccepted: ['Ça fait dormir je dois conduire', 'Est-ce que ça provoque de la somnolence'],
          next: 'drowsy_answer', relationshipEffect: 1 }
      ]
    },
    prescription_node: {
      id: 'prescription_node', speakerId: 'fatima', emotion: 'neutral',
      text: 'Merci. Il faut environ dix minutes pour la préparer. Vous voulez attendre, ou revenir plus tard ?',
      translation: 'Teşekkürler. Hazırlaması yaklaşık on dakika sürer. Beklemek mi istersiniz yoksa sonra mı gelirsiniz?',
      choices: [
        { id: 'wait', intentionTr: 'Beklemeyi tercih et', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'Je vais attendre, merci.',
          translation: 'Beklerim, teşekkürler.',
          altAccepted: ['J’attends ici merci', 'Je peux attendre'],
          next: 'end_prescription' },
        { id: 'come_back', intentionTr: 'Sonra geleceğini söyle', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'Je reviens dans vingt minutes, merci.',
          translation: 'Yirmi dakikaya geri gelirim, teşekkürler.',
          altAccepted: ['Je reviendrai plus tard', 'Je reviens dans vingt minutes'],
          next: 'end_prescription' }
      ]
    },
    instructions: {
      id: 'instructions', speakerId: 'fatima', emotion: 'happy',
      text: 'Avec de l’eau, c’est très bien. Finissez toute la bouteille même si vous vous sentez mieux. Bon rétablissement !',
      translation: 'Su uygun. Kendinizi iyi hissetseniz bile şişeyi bitirin. Geçmiş olsun!',
      next: 'end_helped'
    },
    drowsy_answer: {
      id: 'drowsy_answer', speakerId: 'fatima', emotion: 'concerned',
      text: 'Bonne question — celui-ci peut faire somnoler. Prenez plutôt la version sans somnolence, un comprimé le matin.',
      translation: 'Sorman iyi oldu — bu uyku yapabilir. Onun yerine uyku yapmayan türü al, sabah bir tablet.',
      next: 'end_careful'
    }
  },
  endings: {
    end_helped: { id: 'end_helped', kind: 'success', title: 'Réglé', titleTr: 'Halledildi',
      text: 'Tu as expliqué tes symptômes et compris comment prendre le médicament. Simple et clair.',
      translation: 'Belirtilerini anlattın ve ilacı nasıl alacağını anladın. Basit ve net.',
      coins: 10 },
    end_careful: { id: 'end_careful', kind: 'excellent', title: 'Une question maligne', titleTr: 'Akıllı bir soru',
      text: 'En demandant les effets secondaires, tu as évité un problème avant de conduire. C’est exactement la bonne question à poser à une pharmacienne.',
      translation: 'Yan etkileri sorarak araç kullanmadan önce bir sorunu önledin. Bir eczacıya sorulacak tam da doğru şey.',
      relationshipEffect: 1, coins: 14 },
    end_prescription: { id: 'end_prescription', kind: 'success', title: 'Ordonnance préparée', titleTr: 'Reçete hazırlandı',
      text: 'Tu as géré l’ordonnance poliment et clairement. C’est fait.',
      translation: 'Reçeteyi kibar ve net biçimde hallettin. Her şey tamam.',
      coins: 8 }
  }
});

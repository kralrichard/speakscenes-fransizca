import { createScenario } from '../scenarioSchema.js?v=6';

// ── Supermarket: finding items (A2) ─────────────────────────────────────────
export const supermarketHelp = createScenario({
  id: 'supermarket-help',
  title: 'Trouver ce qu’il te faut',
  titleTr: 'Aradığını bulmak',
  environmentId: 'supermarket', sceneType: 'retail', level: 'A2',
  goal: 'Demande à un employé de t’aider à trouver des produits.',
  goalTr: 'Ürünleri bulmak için görevliden yardım iste.',
  npcIds: ['tom'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'tom', emotion: 'friendly',
      text: 'Bonjour, vous trouvez tout ce qu’il vous faut ?',
      translation: 'Merhaba, her şeyi bulabiliyor musunuz?',
      choices: [
        { id: 'ask_milk', intentionTr: 'Sütün nerede olduğunu sor', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'En fait, non. Vous pouvez me dire où est le lait ?',
          translation: 'Aslında hayır. Sütün nerede olduğunu söyler misiniz?',
          altAccepted: ['Où est le lait', 'Vous pouvez me dire où se trouve le lait'],
          next: 'milk_dir' },
        { id: 'ask_glutenfree', intentionTr: 'Glutensiz ürün olup olmadığını sor', tone: 'polite', difficulty: 'hard', xp: 18,
          sentence: 'Vous avez du pain sans gluten ? Je n’arrive pas à le trouver.',
          translation: 'Glutensiz ekmeğiniz var mı? Bulamıyorum.',
          altAccepted: ['Vous vendez du pain sans gluten', 'Où est le pain sans gluten'],
          next: 'gf_dir' }
      ]
    },
    milk_dir: {
      id: 'milk_dir', speakerId: 'tom', emotion: 'helpful',
      text: 'Bien sûr — rayon quatre, au fond, dans les frigos. Autre chose ?',
      translation: 'Tabii — dördüncü koridorda, arkada, buzdolaplarında. Başka bir şey?',
      choices: [
        { id: 'also_eggs', intentionTr: 'Yumurta da sor', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Oui, où est-ce que je peux trouver les œufs aussi ?',
          translation: 'Evet, yumurtaları da nerede bulabilirim?',
          altAccepted: ['Où sont les œufs', 'Où je trouve les œufs aussi'],
          next: 'eggs_dir', relationshipEffect: 1 },
        { id: 'thanks', intentionTr: 'Teşekkür et', tone: 'friendly', difficulty: 'easy', xp: 10,
          sentence: 'C’est tout, merci pour votre aide !',
          translation: 'Hepsi bu, yardımın için teşekkürler!',
          altAccepted: ['C’est tout merci', 'Merci c’est tout'],
          next: 'end_found' }
      ]
    },
    gf_dir: {
      id: 'gf_dir', speakerId: 'tom', emotion: 'friendly',
      text: 'Oui ! Au rayon diététique, allée sept. Il y a un bon choix là-bas.',
      translation: 'Var! Sağlıklı gıda bölümünde, yedinci koridorda. Orada güzel bir seçenek var.',
      choices: [
        { id: 'thank_gf', intentionTr: 'Teşekkür et', tone: 'friendly', difficulty: 'easy', xp: 10,
          sentence: 'Parfait, merci beaucoup !',
          translation: 'Mükemmel, çok teşekkürler!',
          altAccepted: ['Merci beaucoup', 'Super merci'],
          next: 'end_found', relationshipEffect: 1 },
        { id: 'ask_more', intentionTr: 'Başka glutensiz ürün var mı sor', tone: 'polite', difficulty: 'hard', xp: 18,
          sentence: 'Génial. Vous avez aussi des pâtes sans gluten dans ce rayon ?',
          translation: 'Harika. O bölümde glutensiz makarna da var mı?',
          altAccepted: ['Il y a aussi des pâtes sans gluten là-bas', 'Vous avez aussi des pâtes sans gluten'],
          next: 'eggs_dir' }
      ]
    },
    eggs_dir: {
      id: 'eggs_dir', speakerId: 'tom', emotion: 'happy',
      text: 'Juste à côté du lait, même rayon. Vous avez tout — bonne journée !',
      translation: 'Tam sütün yanında, aynı koridorda. Hepsi tamam — iyi günler!',
      next: 'end_found'
    }
  },
  endings: {
    end_found: { id: 'end_found', kind: 'success', title: 'Tout trouvé', titleTr: 'Her şey bulundu',
      text: 'Tu as demandé de l’aide clairement et trouvé ce qu’il te fallait. Simple et sympathique.',
      translation: 'Net biçimde yardım istedin ve aradığını buldun. Basit ve dostça.',
      coins: 10 }
  }
});

// ── Clothing store: returning an item (B1) ──────────────────────────────────
export const clothingReturn = createScenario({
  id: 'clothing-return',
  title: 'Rendre une veste',
  titleTr: 'Bir ceketi iade etmek',
  environmentId: 'clothing', sceneType: 'retail', level: 'B1',
  goal: 'Rends un article qui ne va pas et obtiens un remboursement ou un échange.',
  goalTr: 'Olmayan bir ürünü iade et, para iadesi ya da değişim ayarla.',
  npcIds: ['zoe'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'zoe', emotion: 'friendly',
      text: 'Bonjour ! Comment puis-je vous aider aujourd’hui ?',
      translation: 'Merhaba! Bugün nasıl yardımcı olabilirim?',
      choices: [
        { id: 'return_size', intentionTr: 'Beden olmadığı için iade etmek istediğini söyle', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Bonjour, je voudrais rendre cette veste. Elle ne me va pas.',
          translation: 'Merhaba, bu ceketi iade etmek istiyorum. Bana olmadı.',
          altAccepted: ['Je veux rendre cette veste elle ne va pas', 'Je voudrais rendre ça ce n’est pas la bonne taille'],
          next: 'receipt' },
        { id: 'return_faulty', intentionTr: 'Kusurlu olduğu için iade etmek istediğini söyle', tone: 'direct', difficulty: 'hard', xp: 18,
          sentence: 'Je dois rendre cette veste — la fermeture éclair est cassée.',
          translation: 'Bu ceketi iade etmem gerekiyor — fermuarı bozuk.',
          altAccepted: ['La fermeture est cassée je veux la rendre', 'Cette veste a une fermeture cassée'],
          next: 'faulty' }
      ]
    },
    receipt: {
      id: 'receipt', speakerId: 'zoe', emotion: 'neutral',
      text: 'Aucun problème. Vous avez le ticket de caisse avec vous ?',
      translation: 'Hiç sorun değil. Fişiniz yanınızda mı?',
      choices: [
        { id: 'yes_receipt', intentionTr: 'Fişin olduğunu söyle', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'Oui, le voici. Je l’ai achetée lundi.',
          translation: 'Evet, buyurun. Pazartesi almıştım.',
          altAccepted: ['Voici le ticket je l’ai achetée lundi', 'Oui je l’ai ici'],
          next: 'refund_or_exchange' },
        { id: 'no_receipt', intentionTr: 'Fişin olmadığını söyle', tone: 'polite', difficulty: 'hard', xp: 18,
          sentence: 'J’ai bien peur d’avoir perdu le ticket, mais j’ai payé par carte.',
          translation: 'Korkarım fişi kaybettim ama kartla ödemiştim.',
          altAccepted: ['J’ai perdu le ticket mais j’ai payé par carte', 'Pas de ticket mais j’ai le paiement par carte'],
          next: 'card_lookup' }
      ]
    },
    faulty: {
      id: 'faulty', speakerId: 'zoe', emotion: 'apologetic',
      text: 'Oh, je suis désolée ! Un article défectueux — vous avez droit à un remboursement complet. Le ticket ou la carte avec laquelle vous avez payé ?',
      translation: 'Ah, çok üzgünüm! Kusurlu ürün — tam para iadesine hakkınız var. Fiş mi yoksa ödediğiniz kart mı var?',
      choices: [
        { id: 'card_faulty', intentionTr: 'Kartla ödediğini söyle', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'J’ai payé par carte — la voici.',
          translation: 'Kartla ödemiştim — işte burada.',
          altAccepted: ['Par carte la voici', 'J’ai payé par carte tenez'],
          next: 'refund_done', relationshipEffect: 1 },
        { id: 'receipt_faulty', intentionTr: 'Fişin olduğunu söyle', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'J’ai le ticket juste ici.',
          translation: 'Fiş tam burada.',
          altAccepted: ['Voici le ticket', 'J’ai le ticket avec moi'],
          next: 'refund_done' }
      ]
    },
    card_lookup: {
      id: 'card_lookup', speakerId: 'zoe', emotion: 'friendly',
      text: 'Ça marche — je peux retrouver l’achat avec votre carte. Vous préférez un remboursement ou un échange ?',
      translation: 'Sorun değil — alışverişi kartınızla bulabilirim. Para iadesi mi yoksa değişim mi istersiniz?',
      next: 'refund_or_exchange'
    },
    refund_or_exchange: {
      id: 'refund_or_exchange', speakerId: 'zoe', emotion: 'friendly',
      text: 'Très bien. Alors, vous préférez un remboursement, ou l’échanger contre une autre taille ?',
      translation: 'Harika. Peki, para iadesi mi tercih edersiniz yoksa farklı bir bedenle değişim mi?',
      choices: [
        { id: 'exchange', intentionTr: 'Farklı bedenle değiştir', tone: 'friendly', difficulty: 'medium', xp: 14,
          sentence: 'Je voudrais l’échanger contre une taille au-dessus, s’il vous plaît.',
          translation: 'Daha büyük bir bedenle değiştirmek istiyorum, lütfen.',
          altAccepted: ['Je peux l’échanger contre une taille plus grande', 'Je voudrais une taille au-dessus'],
          next: 'end_exchange', relationshipEffect: 1 },
        { id: 'refund', intentionTr: 'Para iadesi iste', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'Un remboursement, ce serait mieux, merci.',
          translation: 'Para iadesi daha iyi olur, teşekkürler.',
          altAccepted: ['Je préfère un remboursement', 'Juste un remboursement s’il vous plaît'],
          next: 'refund_done' }
      ]
    },
    refund_done: {
      id: 'refund_done', speakerId: 'zoe', emotion: 'happy',
      text: 'C’est fait — le remboursement sera sur votre carte dans quelques jours. Merci de votre patience !',
      translation: 'Tamamdır — para birkaç gün içinde kartınıza geri yansır. Sabrınız için teşekkürler!',
      next: 'end_refund'
    }
  },
  endings: {
    end_exchange: { id: 'end_exchange', kind: 'problem-solved', title: 'Échangée contre la bonne taille', titleTr: 'Doğru bedenle değişti',
      text: 'Tu as expliqué le problème et tu es reparti avec une veste qui te va vraiment. Bien joué.',
      translation: 'Sorunu anlattın ve sana gerçekten olan bir ceketle çıktın. Güzel iş.',
      relationshipEffect: 1, coins: 12 },
    end_refund: { id: 'end_refund', kind: 'success', title: 'Remboursement réglé', titleTr: 'İade halledildi',
      text: 'Tu as géré le retour calmement et récupéré ton argent. Clair et poli du début à la fin.',
      translation: 'İadeyi sakince hallettin ve paranı geri aldın. Baştan sona net ve kibar.',
      coins: 10 }
  }
});

import { createScenario } from '../scenarioSchema.js?v=6';

// ── Restaurant order (A2) ───────────────────────────────────────────────────
export const restaurantOrder = createScenario({
  id: 'restaurant-order',
  title: 'Commander le dîner',
  titleTr: 'Akşam yemeği sipariş etmek',
  environmentId: 'restaurant', sceneType: 'restaurant', level: 'A2',
  goal: 'Commande un plat et une boisson comme tu les veux.',
  goalTr: 'İstediğin şekilde bir yemek ve içecek sipariş et.',
  npcIds: ['elena'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'elena', emotion: 'friendly',
      text: 'Bonsoir ! Voici vos menus. Vous êtes prêts à commander, ou vous voulez quelques minutes ?',
      translation: 'İyi akşamlar! Menüleriniz burada. Sipariş vermeye hazır mısınız, yoksa birkaç dakika ister misiniz?',
      choices: [
        { id: 'order_now', intentionTr: 'Hemen sipariş ver', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'Je suis prêt. Je vais prendre le poulet grillé, s’il vous plaît.',
          translation: 'Hazırım. Izgara tavuk alacağım, lütfen.',
          altAccepted: ['Je prends le poulet grillé s’il vous plaît', 'Le poulet grillé s’il vous plaît'],
          next: 'sides' },
        { id: 'need_time', intentionTr: 'Biraz zaman iste', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'On pourrait avoir quelques minutes de plus, s’il vous plaît ?',
          translation: 'Birkaç dakika daha alabilir miyiz, lütfen?',
          altAccepted: ['Quelques minutes de plus s’il vous plaît', 'On peut avoir un peu plus de temps'],
          next: 'back_later' },
        { id: 'recommend', intentionTr: 'Bir öneri iste', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Qu’est-ce que vous recommandez ce soir ?',
          translation: 'Bu akşam ne önerirsiniz?',
          altAccepted: ['Qu’est-ce que vous recommandez', 'Vous avez une recommandation'],
          next: 'recommendation' },
        { id: 'allergy', intentionTr: 'Bir yemekte fıstık olup olmadığını sor', tone: 'polite', difficulty: 'hard', xp: 18,
          sentence: 'Est-ce qu’il y a des noix dans les pâtes ? Je suis allergique.',
          translation: 'Makarnada fındık/fıstık var mı? Alerjim var.',
          altAccepted: ['Il y a des noix dans les pâtes', 'Les pâtes contiennent des noix je suis allergique'],
          next: 'allergy_answer' }
      ]
    },
    recommendation: {
      id: 'recommendation', speakerId: 'elena', emotion: 'happy',
      text: 'Nos pâtes aux fruits de mer sont le plat préféré ce soir, et l’agneau est excellent aussi. Je vous apporte l’un des deux ?',
      translation: 'Bu akşam deniz mahsullü makarnamız favori, kuzu da mükemmel. Bunlardan birini getireyim mi?',
      choices: [
        { id: 'take_pasta', intentionTr: 'Makarnayı seç', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'Les pâtes aux fruits de mer, ça a l’air super. Je vais prendre ça.',
          translation: 'Deniz mahsullü makarna kulağa harika geliyor. Onu alacağım.',
          altAccepted: ['Je prends les pâtes aux fruits de mer', 'Les pâtes ça a l’air bien je prends ça'],
          next: 'sides', relationshipEffect: 1 },
        { id: 'take_lamb', intentionTr: 'Kuzuyu seç', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'Je vais essayer l’agneau, s’il vous plaît.',
          translation: 'Kuzuyu deneyeceğim, lütfen.',
          altAccepted: ['Je prends l’agneau', 'L’agneau s’il vous plaît'],
          next: 'sides' }
      ]
    },
    allergy_answer: {
      id: 'allergy_answer', speakerId: 'elena', emotion: 'concerned',
      text: 'Merci de me le dire. Les pâtes sont sans noix, mais je vais revérifier avec la cuisine pour être sûre. Vous les voulez ?',
      translation: 'Söylediğiniz için teşekkürler. Makarnada fındık/fıstık yok ama emin olmak için mutfağa tekrar sorayım. İster misiniz?',
      choices: [
        { id: 'yes_pasta', intentionTr: 'Evet, makarnayı iste', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'Oui, volontiers, si la cuisine confirme que c’est sans risque.',
          translation: 'Evet, lütfen, mutfak güvenli olduğunu onaylarsa.',
          altAccepted: ['Oui si c’est sans risque', 'Volontiers si la cuisine confirme'],
          next: 'sides', relationshipEffect: 1 },
        { id: 'something_else', intentionTr: 'Güvenli başka bir şey iste', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Pour être sûr, je pourrais avoir le poulet grillé à la place ?',
          translation: 'Güvenli olmak için, onun yerine ızgara tavuk alabilir miyim?',
          altAccepted: ['Je vais prendre le poulet grillé pour être sûr', 'Je peux avoir le poulet à la place'],
          next: 'sides' }
      ]
    },
    sides: {
      id: 'sides', speakerId: 'elena', emotion: 'friendly',
      text: 'Très bon choix. Vous voulez quelque chose à boire avec ça ?',
      translation: 'Harika seçim. Yanında içecek bir şey ister misiniz?',
      choices: [
        { id: 'water', intentionTr: 'Su iste', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'Juste une bouteille d’eau plate, merci.',
          translation: 'Sadece bir şişe sade su, teşekkürler.',
          altAccepted: ['Une bouteille d’eau s’il vous plaît', 'Juste de l’eau plate merci'],
          next: 'end_ordered' },
        { id: 'wine', intentionTr: 'Şarap önerisi iste', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Vous pourriez me conseiller un verre de vin pour aller avec ?',
          translation: 'Yanına uygun bir kadeh şarap önerebilir misiniz?',
          altAccepted: ['Quel vin va bien avec', 'Vous pouvez conseiller un vin'],
          next: 'end_ordered', relationshipEffect: 1 }
      ]
    },
    back_later: {
      id: 'back_later', speakerId: 'elena', emotion: 'friendly',
      text: 'Bien sûr, prenez votre temps. Je reviens tout de suite. (Une minute plus tard) C’est bon maintenant ?',
      translation: 'Tabii, acele etmeyin. Hemen dönerim. (Bir dakika sonra) Şimdi hazır mısınız?',
      next: 'recommendation'
    }
  },
  endings: {
    end_ordered: { id: 'end_ordered', kind: 'success', title: 'Commande passée', titleTr: 'Sipariş verildi',
      text: 'Tu as commandé ton plat et ta boisson clairement et poliment. Bon appétit !',
      translation: 'Yemeğini ve içeceğini net ve kibar biçimde sipariş ettin. Afiyet olsun!',
      relationshipEffect: 1, coins: 10 }
  }
});

// ── Wrong order / complaint (B1) ────────────────────────────────────────────
export const wrongOrder = createScenario({
  id: 'wrong-order',
  title: 'Ce n’est pas ce que j’ai commandé',
  titleTr: 'Bu sipariş ettiğim şey değil',
  environmentId: 'restaurant', sceneType: 'restaurant', level: 'B1',
  goal: 'Fais corriger poliment une commande erronée, sans faire d’histoires.',
  goalTr: 'Yanlış siparişi kibarca, sorun çıkarmadan düzelt.',
  npcIds: ['elena', 'marco'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'elena', emotion: 'happy',
      text: 'Et voilà — un burger au bœuf. Bon appétit !',
      translation: 'Buyurun — bir dana burger. Afiyet olsun!',
      choices: [
        { id: 'polite_correct', intentionTr: 'Kibarca yanlış olduğunu söyle', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Excusez-moi, mais je crois qu’il y a une erreur — j’avais commandé le burger végétarien.',
          translation: 'Pardon ama sanırım bir hata var — sebzeli burger sipariş etmiştim.',
          altAccepted: ['J’avais commandé le burger végétarien pas ça', 'Je crois que c’est une erreur j’ai demandé le burger végétarien'],
          next: 'apology' },
        { id: 'direct_correct', intentionTr: 'Doğrudan yanlış olduğunu söyle', tone: 'direct', difficulty: 'medium', xp: 14,
          sentence: 'Ce n’est pas ce que j’ai commandé. J’avais demandé le burger végétarien.',
          translation: 'Bu sipariş ettiğim şey değil. Sebzeli burger istemiştim.',
          altAccepted: ['C’est la mauvaise commande je voulais le burger végétarien', 'Je n’ai pas commandé ça je voulais le végétarien'],
          next: 'apology' }
      ]
    },
    apology: {
      id: 'apology', speakerId: 'elena', emotion: 'apologetic',
      text: 'Oh non, je suis vraiment désolée ! C’est ma faute. Je vous apporte le burger végétarien tout de suite. Je peux vous apporter quelque chose en attendant ?',
      translation: 'Ah hayır, çok özür dilerim! Benim hatam. Sebzeli burgeri hemen getireceğim. Beklerken size bir şey getirebilir miyim?',
      choices: [
        { id: 'no_worries', intentionTr: 'Sorun olmadığını söyle', tone: 'friendly', difficulty: 'easy', xp: 10,
          sentence: 'Pas de souci, ça arrive. Juste un peu d’eau, merci.',
          translation: 'Sorun değil, olur böyle şeyler. Sadece biraz su, teşekkürler.',
          altAccepted: ['C’est pas grave juste de l’eau merci', 'Pas de problème de l’eau ce serait bien'],
          next: 'end_gracious', relationshipEffect: 2 },
        { id: 'ask_speed', intentionTr: 'Acele olduğunu söyle', tone: 'polite', difficulty: 'hard', xp: 18,
          sentence: 'Ce n’est rien, mais ça pourrait aller vite ? Je suis un peu pressé.',
          translation: 'Sorun değil ama çabuk olabilir mi? Biraz acelem var.',
          altAccepted: ['Vous pourriez faire vite je suis pressé', 'Ça peut aller vite je suis pressé'],
          next: 'manager' }
      ]
    },
    manager: {
      id: 'manager', speakerId: 'marco', emotion: 'apologetic',
      text: 'Je suis le directeur — on m’a parlé de l’erreur. Votre bonne commande arrive en priorité, et c’est offert par la maison. Encore toutes mes excuses.',
      translation: 'Ben müdürüm — bir karışıklık olduğunu duydum. Doğru siparişiniz hızlandırılıyor ve ikramımız. Tekrar özür dilerim.',
      choices: [
        { id: 'thank_manager', intentionTr: 'Teşekkür et ve nazik ol', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'C’est très gentil de votre part. Merci d’avoir réglé ça si vite.',
          translation: 'Çok naziksiniz. Bu kadar hızlı çözdüğünüz için teşekkürler.',
          altAccepted: ['Merci d’avoir réglé ça si vite', 'C’est gentil merci pour la rapidité'],
          next: 'end_comped', relationshipEffect: 2 },
        { id: 'decline_free', intentionTr: 'Ücretsiz olmasına gerek yok de', tone: 'friendly', difficulty: 'hard', xp: 18,
          sentence: 'Merci, mais ce n’est vraiment pas nécessaire. Je paierai avec plaisir.',
          translation: 'Teşekkürler ama gerçekten gerek yok. Ödemekten memnuniyet duyarım.',
          altAccepted: ['Ce n’est pas nécessaire je paie avec plaisir', 'Vous n’êtes pas obligé je vais payer'],
          next: 'end_generous', relationshipEffect: 2 }
      ]
    }
  },
  endings: {
    end_gracious: { id: 'end_gracious', kind: 'relationship', title: 'Réglé avec élégance', titleTr: 'Nazikçe halledildi',
      text: 'Tu as corrigé la commande gentiment et rassuré Elena. Un petit moment, géré comme un natif.',
      translation: 'Siparişi nazikçe düzelttin ve Elena’yı rahatlattın. Küçük bir an, ana dili gibi halledildi.',
      relationshipEffect: 1, coins: 12 },
    end_comped: { id: 'end_comped', kind: 'problem-solved', title: 'Repas offert, sans drame', titleTr: 'Ücretsiz yemek, sorunsuz',
      text: 'Tu as dit clairement que tu étais pressé, tu es resté poli, et le directeur t’a offert le repas. Bien négocié.',
      translation: 'Acelen olduğunu net söyledin, kibar kaldın ve müdür yemeğini ikram etti. İyi bir pazarlık.',
      relationshipEffect: 1, coins: 16 },
    end_generous: { id: 'end_generous', kind: 'relationship', title: 'Un client généreux', titleTr: 'Cömert bir misafir',
      text: 'Tu as refusé le repas offert avec élégance. Le directeur a insisté quand même — et tout le restaurant t’adore maintenant.',
      translation: 'Ücretsiz yemeği nezaketle geri çevirdin. Müdür yine de ısrar etti — ve tüm restoranı kendine dost ettin.',
      relationshipEffect: 2, coins: 14 }
  }
});

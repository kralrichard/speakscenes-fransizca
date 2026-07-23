import { createScenario } from '../scenarioSchema.js?v=6';

// ── Airport check-in (A2) ───────────────────────────────────────────────────
export const airportCheckin = createScenario({
  id: 'airport-checkin',
  title: 'Enregistrement pour ton vol',
  titleTr: 'Uçuşun için check-in yapmak',
  environmentId: 'airport', sceneType: 'airport', level: 'A2',
  goal: 'Enregistre-toi, règle la question du bagage et récupère ta carte d’embarquement.',
  goalTr: 'Check-in yap, bavulunu hallet ve biniş kartını al.',
  npcIds: ['priya'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'priya', emotion: 'friendly',
      text: 'Bonjour ! Je peux voir votre passeport et votre réservation, s’il vous plaît ?',
      translation: 'Günaydın! Pasaportunuzu ve rezervasyonunuzu görebilir miyim, lütfen?',
      choices: [
        { id: 'give_docs', intentionTr: 'Belgeleri ver', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'Voici — mon passeport et ma réservation sur le téléphone.',
          translation: 'Buyurun — pasaportum ve telefondaki rezervasyonum.',
          altAccepted: ['Voici mon passeport et ma réservation', 'Tenez passeport et réservation'],
          next: 'bags', relationshipEffect: 1 },
        { id: 'no_print', intentionTr: 'Dijital biletin geçerli olup olmadığını sor', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Je n’ai qu’une réservation numérique. C’est bon quand même ?',
          translation: 'Sadece dijital rezervasyonum var. Uygun mu?',
          altAccepted: ['Une réservation numérique ça va', 'Je l’ai seulement sur mon téléphone ça marche'],
          next: 'digital_ok' }
      ]
    },
    digital_ok: {
      id: 'digital_ok', speakerId: 'priya', emotion: 'friendly',
      text: 'Une réservation numérique, c’est parfait. Merci — alors, vous enregistrez des bagages aujourd’hui ?',
      translation: 'Dijital rezervasyon gayet uygun. Teşekkürler — peki bugün bavul verecek misiniz?',
      next: 'bags'
    },
    bags: {
      id: 'bags', speakerId: 'priya', emotion: 'neutral',
      text: 'Vous enregistrez des bagages, ou juste le bagage cabine aujourd’hui ?',
      translation: 'Bavul verecek misiniz, yoksa bugün sadece bir el bagajı mı var?',
      choices: [
        { id: 'one_bag', intentionTr: 'Bir bavul vereceğini söyle', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'J’ai une valise à enregistrer, s’il vous plaît.',
          translation: 'Check-in için bir valizim var, lütfen.',
          altAccepted: ['J’ai un bagage à enregistrer', 'Juste une valise à enregistrer'],
          next: 'overweight' },
        { id: 'carry_only', intentionTr: 'Sadece el bagajı olduğunu söyle', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'Non, juste ce bagage cabine avec moi.',
          translation: 'Hayır, sadece bu el bagajı var.',
          altAccepted: ['Juste le bagage cabine', 'Non seulement ce sac cabine'],
          next: 'seat' },
        { id: 'ask_gate', intentionTr: 'Kapının nerede olduğunu sor', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Juste un bagage cabine. Au fait, vous pouvez me dire quelle porte je dois prendre ?',
          translation: 'Sadece el bagajı. Bu arada hangi kapıya gitmem gerektiğini söyler misiniz?',
          altAccepted: ['Quelle porte je dois prendre', 'Vous pouvez me dire ma porte d’embarquement'],
          next: 'gate_info' }
      ]
    },
    overweight: {
      id: 'overweight', speakerId: 'priya', emotion: 'concerned',
      text: 'Pesons-la… ah, elle dépasse la limite de deux kilos. Il y a un petit supplément, ou vous pouvez passer quelques affaires dans votre bagage cabine.',
      translation: 'Tartalım… ah, limitin iki kilo üzerinde. Küçük bir fazlalık ücreti var ya da birkaç eşyayı el bagajına alabilirsiniz.',
      choices: [
        { id: 'pay_fee', intentionTr: 'Ücreti ödemeyi kabul et', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Ce n’est pas grave, je paierai le supplément.',
          translation: 'Sorun değil, fazlalık ücretini öderim.',
          altAccepted: ['Je paie le supplément', 'C’est bon je paie l’extra'],
          next: 'seat' },
        { id: 'move_items', intentionTr: 'Eşyaları taşımayı tercih et', tone: 'casual', difficulty: 'medium', xp: 14,
          sentence: 'Je vais plutôt passer quelques affaires dans mon bagage cabine.',
          translation: 'Bunun yerine birkaç şeyi el bagajıma alayım.',
          altAccepted: ['Je vais déplacer quelques affaires', 'Plutôt mettre des affaires dans le sac cabine'],
          next: 'seat', relationshipEffect: 1 }
      ]
    },
    seat: {
      id: 'seat', speakerId: 'priya', emotion: 'friendly',
      text: 'C’est tout bon. Vous préférez une place côté hublot ou côté couloir ?',
      translation: 'Her şey hazır. Cam kenarı mı yoksa koridor tarafı mı istersiniz?',
      choices: [
        { id: 'window', intentionTr: 'Cam kenarı iste', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'Côté hublot, s’il vous plaît. J’adore la vue.',
          translation: 'Cam kenarı, lütfen. Manzarayı severim.',
          altAccepted: ['Hublot s’il vous plaît', 'Je voudrais une place côté hublot'],
          next: 'done' },
        { id: 'aisle', intentionTr: 'Koridor tarafı iste', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'Une place côté couloir, ce serait mieux, merci.',
          translation: 'Koridor tarafı daha iyi olur, teşekkürler.',
          altAccepted: ['Couloir s’il vous plaît', 'Je préfère côté couloir'],
          next: 'done' }
      ]
    },
    gate_info: {
      id: 'gate_info', speakerId: 'priya', emotion: 'helpful',
      text: 'Bien sûr — vous embarquez porte B12. C’est à dix minutes à pied, prévoyez un peu de temps. Alors, hublot ou couloir ?',
      translation: 'Tabii — B12 kapısından bineceksiniz. On dakikalık yürüyüş, biraz zaman bırakın. Şimdi, cam kenarı mı koridor mu?',
      next: 'seat'
    },
    done: {
      id: 'done', speakerId: 'priya', emotion: 'happy',
      text: 'Voici votre carte d’embarquement. Porte B12, embarquement à 10 h 40. Excellent vol !',
      translation: 'Biniş kartınız burada. B12 kapısı, 10:40’ta biniş. İyi uçuşlar!',
      next: 'end_success'
    }
  },
  endings: {
    end_success: { id: 'end_success', kind: 'success', title: 'Enregistré et prêt', titleTr: 'Check-in tamam, hazırsın',
      text: 'Passeport, bagage et siège — tout géré clairement. Carte d’embarquement en main.',
      translation: 'Pasaport, bavul ve koltuk — hepsi net biçimde halledildi. Biniş kartı elinde.',
      relationshipEffect: 1, coins: 10 }
  }
});

// ── Missing your flight (B1) ────────────────────────────────────────────────
export const missingFlight = createScenario({
  id: 'missing-flight',
  title: 'Tu es sur le point de rater ton vol',
  titleTr: 'Uçuşunu kaçırmak üzeresin',
  environmentId: 'airport', sceneType: 'airport', level: 'B1',
  goal: 'Explique la situation calmement et trouve la meilleure option.',
  goalTr: 'Durumu sakince anlat ve en iyi seçeneği bul.',
  npcIds: ['omar'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'omar', emotion: 'concerned',
      text: 'Je suis désolé, la porte du vol 208 vient de fermer. Qu’est-ce que je peux faire pour vous ?',
      translation: 'Üzgünüm, 208 sefer sayılı uçuşun kapısı az önce kapandı. Sizin için ne yapabilirim?',
      choices: [
        { id: 'explain', intentionTr: 'Sakince ne olduğunu anlat', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Mon vol de correspondance a été retardé, donc je n’ai pas pu arriver à temps.',
          translation: 'Aktarma uçuşum rötar yaptı, bu yüzden zamanında gelemedim.',
          altAccepted: ['Ma correspondance a été retardée', 'J’étais en retard parce que mon autre vol avait du retard'],
          next: 'next_flight' },
        { id: 'panic', intentionTr: 'Panikle bir sonraki uçağa binmek istediğini söyle', tone: 'direct', difficulty: 'medium', xp: 14,
          sentence: 'S’il vous plaît, il faut vraiment que je prenne le prochain vol pour Rome.',
          translation: 'Lütfen, Roma’ya bir sonraki uçağa gerçekten binmem gerekiyor.',
          altAccepted: ['Il me faut le prochain vol pour Rome', 'Vous pouvez me mettre sur le prochain vol pour Rome'],
          next: 'next_flight' }
      ]
    },
    next_flight: {
      id: 'next_flight', speakerId: 'omar', emotion: 'thinking',
      text: 'Je regarde… Il y a un vol dans trois heures, mais il est presque plein. Ou un vol du soir avec des places libres. Vous préférez lequel ?',
      translation: 'Bakayım… Üç saat sonra başka bir uçuş var ama neredeyse dolu. Ya da boş koltukları olan bir akşam uçuşu. Hangisini tercih edersiniz?',
      choices: [
        { id: 'sooner', intentionTr: 'Erken uçuşu iste', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Je préférerais le plus tôt, même si je dois attendre à la porte.',
          translation: 'Kapıda beklemek zorunda kalsam bile erken olanı tercih ederim.',
          altAccepted: ['Je préfère le vol le plus tôt', 'Le plus tôt s’il vous plaît'],
          next: 'fee_question' },
        { id: 'evening', intentionTr: 'Rahat olan akşam uçuşunu seç', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'Le vol du soir, c’est bien. Je préfère une place garantie.',
          translation: 'Akşam uçuşu uygun. Garantili bir koltuğu tercih ederim.',
          altAccepted: ['Je prends le vol du soir', 'Le vol du soir ça me va'],
          next: 'rebooked_free' }
      ]
    },
    fee_question: {
      id: 'fee_question', speakerId: 'omar', emotion: 'neutral',
      text: 'Comme le retard était la faute de la compagnie, il n’y a pas de frais de modification. Mais il ne reste qu’une place du milieu sur ce vol. Vous la voulez quand même ?',
      translation: 'Rötar havayolunun hatası olduğundan yeniden rezervasyon ücreti yok. Ama o uçuşta sadece orta koltuk kaldı. Yine de ister misiniz?',
      choices: [
        { id: 'take_middle', intentionTr: 'Orta koltuğu kabul et', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'Une place du milieu, ça ira — je veux juste arriver.',
          translation: 'Orta koltuk uygun — sadece oraya varmak istiyorum.',
          altAccepted: ['La place du milieu ça va', 'Je prends la place du milieu'],
          next: 'rebooked_sooner' },
        { id: 'ask_lounge', intentionTr: 'Bekleme için bir şey iste', tone: 'formal', difficulty: 'hard', xp: 18,
          sentence: 'Je la prends. Vu le retard, je pourrais avoir un accès au salon pendant l’attente ?',
          translation: 'Alıyorum. Rötar göz önüne alınırsa, beklerken bir lounge kartı alabilir miyim?',
          altAccepted: ['Je pourrais avoir un pass salon pendant l’attente', 'Un accès au salon pour l’attente c’est possible'],
          next: 'lounge_granted' }
      ]
    },
    rebooked_sooner: {
      id: 'rebooked_sooner', speakerId: 'omar', emotion: 'friendly',
      text: 'C’est fait — vous êtes confirmé sur le vol de quinze heures, porte C4. Encore désolé pour le retard.',
      translation: 'Tamam — saat üç uçuşuna onaylandınız, kapı C4. Rötar için tekrar özür dilerim.',
      next: 'end_rebooked'
    },
    lounge_granted: {
      id: 'lounge_granted', speakerId: 'omar', emotion: 'happy',
      text: 'C’est juste. Voici un pass salon et votre nouvelle carte d’embarquement. Détendez-vous jusqu’à quinze heures — vous l’avez bien mérité.',
      translation: 'Bu adil. İşte bir lounge kartı ve yeni biniş kartınız. Saat üçe kadar dinlenin — hak ettiniz.',
      next: 'end_excellent'
    },
    rebooked_free: {
      id: 'rebooked_free', speakerId: 'omar', emotion: 'friendly',
      text: 'Vous êtes sur le vol du soir, côté hublot, sans frais. Un choix serein — merci de votre patience.',
      translation: 'Akşam uçuşundasınız, cam kenarı, ücretsiz. Sakin bir tercih — sabrınız için teşekkürler.',
      next: 'end_calm'
    }
  },
  endings: {
    end_rebooked: { id: 'end_rebooked', kind: 'problem-solved', title: 'De nouveau sur un vol', titleTr: 'Yeniden uçuşta',
      text: 'Tu as expliqué le retard calmement et obtenu le tout prochain vol. Crise gérée.',
      translation: 'Rötarı sakince anlattın ve hemen bir sonraki uçağa bindin. Kriz yönetildi.',
      relationshipEffect: 1, coins: 12 },
    end_excellent: { id: 'end_excellent', kind: 'excellent', title: 'Rebooké avec un bonus', titleTr: 'Ekstra ile yeniden rezervasyon',
      text: 'Tu es resté poli, tu connaissais tes droits et tu as même obtenu l’accès au salon. Excellente résolution de problème en français.',
      translation: 'Kibar kaldın, haklarını bildin ve hatta lounge erişimi aldın. Fransızcada mükemmel sorun çözme.',
      relationshipEffect: 2, coins: 18 },
    end_calm: { id: 'end_calm', kind: 'success', title: 'Une modification tranquille', titleTr: 'Rahat bir yeniden rezervasyon',
      text: 'Tu as choisi la certitude plutôt que la vitesse et obtenu une place hublot garantie. Raisonnable et sans stress.',
      translation: 'Hızdan çok kesinliği seçtin ve garantili bir cam kenarı koltuk aldın. Mantıklı ve stressiz.',
      coins: 10 }
  }
});

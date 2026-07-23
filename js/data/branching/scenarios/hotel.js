import { createScenario } from '../scenarioSchema.js?v=6';

// ── Hotel check-in (A2) — the flagship: 4 decision points, 4 endings ────────
export const hotelCheckin = createScenario({
  id: 'hotel-checkin',
  title: 'Arrivée à l’hôtel Sunrise',
  titleTr: 'Sunrise Otel’e giriş yapmak',
  environmentId: 'hotel', sceneType: 'hotel-lobby', level: 'A2',
  goal: 'Fais ton check-in et règle les petits problèmes.',
  goalTr: 'Odana giriş yap ve küçük sorunları çöz.',
  npcIds: ['grace', 'daniel'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'grace', emotion: 'friendly',
      text: 'Bonsoir et bienvenue à l’hôtel Sunrise. Vous avez une réservation chez nous ?',
      translation: 'İyi akşamlar, Sunrise Otel’e hoş geldiniz. Bizde bir rezervasyonunuz var mı?',
      choices: [
        { id: 'confirm', intentionTr: 'Rezervasyonun olduğunu söyle', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'Oui, j’ai une réservation au nom d’Alex.',
          translation: 'Evet, Alex adına bir rezervasyonum var.',
          altAccepted: ['J’ai une réservation au nom d’Alex', 'Oui la réservation est au nom d’Alex'],
          next: 'find_reservation', relationshipEffect: 1 },
        { id: 'no_reservation', intentionTr: 'Rezervasyonun olmadığını söyle', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Non, je n’en ai pas. Vous avez des chambres libres ce soir ?',
          translation: 'Hayır, yok. Bu gece boş odanız var mı?',
          altAccepted: ['Non vous avez des chambres libres', 'Je n’en ai pas il reste des chambres ce soir'],
          next: 'walk_in' },
        { id: 'wrong_hotel', intentionTr: 'Yanlış otelde olabileceğini fark et', tone: 'casual', difficulty: 'medium', xp: 14,
          sentence: 'En fait, je crois que je me suis trompé d’hôtel.',
          translation: 'Aslında sanırım yanlış oteldeyim.',
          altAccepted: ['Je crois que je me suis trompé d’hôtel', 'Pardon je crois que ce n’est pas le bon hôtel'],
          next: 'wrong_hotel_node' }
      ]
    },
    find_reservation: {
      id: 'find_reservation', speakerId: 'grace', emotion: 'thinking',
      text: 'Je vérifie… Alex, oui ! Deux nuits en chambre double. Comment souhaitez-vous payer ?',
      translation: 'Bakayım… Alex, evet! İki gece, çift kişilik oda. Nasıl ödemek istediğinizi söyler misiniz?',
      choices: [
        { id: 'pay_card', intentionTr: 'Kartla ödeyeceğini söyle', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'Je voudrais payer par carte, s’il vous plaît.',
          translation: 'Kartla ödemek istiyorum, lütfen.',
          altAccepted: ['Je paie par carte', 'Par carte s’il vous plaît', 'Je peux payer par carte'],
          next: 'room_ready', relationshipEffect: 1 },
        { id: 'ask_breakfast', intentionTr: 'Kahvaltının dahil olup olmadığını sor', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Avant ça — le petit-déjeuner est compris dans le prix ?',
          translation: 'Ondan önce, kahvaltı fiyata dahil mi?',
          altAccepted: ['Le petit-déjeuner est compris', 'Le prix inclut le petit-déjeuner'],
          next: 'breakfast_info' }
      ]
    },
    breakfast_info: {
      id: 'breakfast_info', speakerId: 'grace', emotion: 'happy',
      text: 'Oui, un petit-déjeuner complet est compris, servi de sept à dix heures dans la grande salle. Je vous enregistre maintenant ?',
      translation: 'Evet, tam kahvaltı dahil, ana salonda yedi ile on arası servis ediliyor. Şimdi girişinizi yapayım mı?',
      choices: [
        { id: 'yes_checkin', intentionTr: 'Evet, girişi yap', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'Oui, s’il vous plaît. Je paierai par carte.',
          translation: 'Evet, lütfen. Kartla ödeyeceğim.',
          altAccepted: ['Oui s’il vous plaît je paie par carte', 'D’accord par carte s’il vous plaît'],
          next: 'room_ready', relationshipEffect: 1 },
        { id: 'ask_late', intentionTr: 'Geç çıkış isteyip istemediğini sor', tone: 'polite', difficulty: 'hard', xp: 18,
          sentence: 'Une dernière chose — un départ tardif serait possible ?',
          translation: 'Bir şey daha — geç çıkış mümkün olur mu?',
          altAccepted: ['Un départ tardif est possible', 'Je pourrais partir plus tard'],
          next: 'late_checkout' }
      ]
    },
    late_checkout: {
      id: 'late_checkout', speakerId: 'grace', emotion: 'friendly',
      text: 'Bien sûr. Je peux vous proposer un départ jusqu’à treize heures sans supplément. Vous êtes en chambre 214 — voici votre clé.',
      translation: 'Tabii ki. Ekstra ücret olmadan saat bire kadar çıkış verebilirim. Oda 214’tesiniz — anahtarınız.',
      next: 'end_excellent'
    },
    room_ready: {
      id: 'room_ready', speakerId: 'grace', emotion: 'happy',
      text: 'Parfait. Tout est prêt — chambre 214 au deuxième étage. Voici votre carte-clé. Bon séjour !',
      translation: 'Harika. Her şey hazır — ikinci katta oda 214. Anahtar kartınız burada. İyi konaklamalar!',
      next: 'end_success'
    },
    walk_in: {
      id: 'walk_in', speakerId: 'grace', emotion: 'thinking',
      text: 'Voyons voir… il nous reste une chambre standard à quatre-vingt-dix euros la nuit. Elle vous intéresse ?',
      translation: 'Bir bakayım… gecesi doksan euro olan tek bir standart odamız kaldı. İster misiniz?',
      choices: [
        { id: 'take_room', intentionTr: 'Odayı kabul et', tone: 'friendly', difficulty: 'easy', xp: 10,
          sentence: 'Ça me va. Je la prends pour une nuit.',
          translation: 'Kulağa güzel geliyor. Bir geceliğine alıyorum.',
          altAccepted: ['Je la prends pour une nuit', 'Oui je prends la chambre pour ce soir'],
          next: 'room_ready', relationshipEffect: 1 },
        { id: 'too_expensive', intentionTr: 'Çok pahalı olduğunu kibarca söyle', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'C’est un peu plus que ce que je voulais dépenser. Vous avez quelque chose de moins cher ?',
          translation: 'Umduğumdan biraz fazla. Daha ucuz bir şey var mı?',
          altAccepted: ['Vous avez quelque chose de moins cher', 'Il y a une chambre moins chère'],
          next: 'cheaper' }
      ]
    },
    cheaper: {
      id: 'cheaper', speakerId: 'daniel', emotion: 'friendly',
      text: 'Bonjour, je suis le responsable de service. Je ne peux pas baisser le prix de la chambre, mais je peux offrir le petit-déjeuner. Ça vous va ?',
      translation: 'Merhaba, ben nöbetçi müdürüm. Oda fiyatını düşüremem ama ücretsiz kahvaltı ekleyebilirim. Olur mu?',
      choices: [
        { id: 'accept_deal', intentionTr: 'Teklifi kabul et', tone: 'friendly', difficulty: 'medium', xp: 14,
          sentence: 'C’est très gentil — oui, je prends la chambre avec le petit-déjeuner.',
          translation: 'Çok naziksiniz — evet, odayı kahvaltıyla alıyorum.',
          altAccepted: ['Oui je la prends avec le petit-déjeuner', 'Ça marche je prends la chambre'],
          next: 'room_ready', relationshipEffect: 2 },
        { id: 'decline', intentionTr: 'Kibarca reddet ve ayrıl', tone: 'polite', difficulty: 'hard', xp: 18,
          sentence: 'Merci, mais je crois que je vais chercher ailleurs ce soir.',
          translation: 'Teşekkürler ama sanırım bu gece başka bir yere bakacağım.',
          altAccepted: ['Merci mais je vais voir ailleurs', 'Merci j’essaierai un autre endroit'],
          next: 'end_neutral' }
      ]
    },
    wrong_hotel_node: {
      id: 'wrong_hotel_node', speakerId: 'grace', emotion: 'surprised',
      text: 'Oh ! Quel hôtel cherchez-vous ? Je peux peut-être vous indiquer le chemin.',
      translation: 'Aa! Hangi oteli arıyorsunuz? Belki sizi doğru yöne yönlendirebilirim.',
      choices: [
        { id: 'ask_directions', intentionTr: 'Yol tarifi iste', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Je cherche l’hôtel Moonlight. Vous pouvez me dire comment y aller ?',
          translation: 'Moonlight Otel’i arıyorum. Oraya nasıl gideceğimi söyler misiniz?',
          altAccepted: ['Comment aller à l’hôtel Moonlight', 'Vous pouvez m’indiquer le chemin vers l’hôtel Moonlight'],
          next: 'directions_given', relationshipEffect: 1 },
        { id: 'stay_anyway', intentionTr: 'Aslında burada kalmaya karar ver', tone: 'friendly', difficulty: 'medium', xp: 14,
          sentence: 'Vous savez quoi, votre hôtel a l’air charmant. Vous avez une chambre ce soir ?',
          translation: 'Aslına bakarsanız oteliniz çok hoş görünüyor. Bu gece odanız var mı?',
          altAccepted: ['Vous avez une chambre ce soir', 'Votre hôtel a l’air bien il reste une chambre'],
          next: 'walk_in' }
      ]
    },
    directions_given: {
      id: 'directions_given', speakerId: 'grace', emotion: 'friendly',
      text: 'C’est à deux rues d’ici, sur votre gauche, juste à côté de la pharmacie. Impossible de le rater !',
      translation: 'Sadece iki sokak aşağıda, solunuzda, eczanenin yanında. Kaçırmanız imkânsız!',
      next: 'end_helpful'
    }
  },
  endings: {
    end_excellent: { id: 'end_excellent', kind: 'excellent', title: 'Check-in parfait', titleTr: 'Kusursuz giriş',
      text: 'Chambre, petit-déjeuner et départ tardif — tu as géré chaque étape poliment et clairement. Grace est ravie de t’accueillir.',
      translation: 'Oda, kahvaltı ve geç çıkış — her adımı kibar ve net biçimde hallettin. Grace seni ağırlamaktan çok memnun.',
      relationshipEffect: 2, coins: 15 },
    end_success: { id: 'end_success', kind: 'success', title: 'Enregistré', titleTr: 'Giriş yapıldı',
      text: 'Tu es enregistré et en route vers la chambre 214. Fluide et sympathique.',
      translation: 'Girişini yaptın ve 214 numaralı odaya doğru yola çıktın. Sorunsuz ve dostça.',
      relationshipEffect: 1, coins: 10 },
    end_neutral: { id: 'end_neutral', kind: 'neutral', title: 'En route ailleurs', titleTr: 'Başka yere bakmaya',
      text: 'Tu as refusé l’offre poliment. Pas de chambre ce soir, mais tu as laissé une bonne impression — tu peux toujours revenir.',
      translation: 'Teklifi kibarca geri çevirdin. Bu gece oda yok ama iyi bir izlenim bıraktın — her zaman geri dönebilirsin.',
      coins: 5 },
    end_helpful: { id: 'end_helpful', kind: 'problem-solved', title: 'De retour sur la bonne voie', titleTr: 'Yeniden yolda',
      text: 'Tu as compris que tu étais au mauvais hôtel et obtenu un itinéraire clair vers le bon. Problème réglé !',
      translation: 'Yanlış otelde olduğunu fark ettin ve doğru otele net bir yol tarifi aldın. Sorun çözüldü!',
      coins: 8 }
  }
});

// ── Hotel room problem (B1) — 3 decision points, 3 endings ──────────────────
export const hotelRoomProblem = createScenario({
  id: 'hotel-room-problem',
  title: 'Un problème avec ta chambre',
  titleTr: 'Odanla ilgili bir sorun',
  environmentId: 'hotel', sceneType: 'hotel-lobby', level: 'B1',
  goal: 'Signale un problème avec ta chambre et fais-le régler.',
  goalTr: 'Odandaki sorunu bildir ve çözdür.',
  npcIds: ['daniel', 'grace'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'daniel', emotion: 'friendly',
      text: 'Bonsoir. Vous avez l’air un peu contrarié — tout va bien avec votre chambre ?',
      translation: 'İyi akşamlar. Biraz sinirli görünüyorsunuz — odanızla ilgili her şey yolunda mı?',
      choices: [
        { id: 'dirty', intentionTr: 'Odanın temiz olmadığını söyle', tone: 'direct', difficulty: 'medium', xp: 14,
          sentence: 'En fait, non. Ma chambre n’a pas été bien nettoyée.',
          translation: 'Aslında hayır. Odam düzgün temizlenmemiş.',
          altAccepted: ['Ma chambre n’est pas propre', 'La chambre n’a pas été nettoyée correctement'],
          next: 'apologize_clean' },
        { id: 'noise', intentionTr: 'Çok gürültülü olduğundan şikâyet et', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'La chambre à côté de la mienne est très bruyante, et je n’arrive pas à dormir.',
          translation: 'Yan odam çok gürültülü ve uyuyamıyorum.',
          altAccepted: ['La chambre d’à côté est trop bruyante', 'C’est très bruyant à côté et je ne peux pas dormir'],
          next: 'apologize_noise' },
        { id: 'ac', intentionTr: 'Klimanın çalışmadığını söyle', tone: 'direct', difficulty: 'hard', xp: 18,
          sentence: 'La climatisation de ma chambre ne marche pas du tout.',
          translation: 'Odamdaki klima hiç çalışmıyor.',
          altAccepted: ['La climatisation ne marche pas', 'Ma clim ne fonctionne pas'],
          next: 'apologize_ac' }
      ]
    },
    apologize_clean: {
      id: 'apologize_clean', speakerId: 'daniel', emotion: 'apologetic',
      text: 'Je suis vraiment désolé. Vous préférez que j’envoie le ménage tout de suite, ou que je vous installe dans une chambre propre ?',
      translation: 'Bunun için çok üzgünüm. Hemen kat görevlisi mi göndereyim, yoksa sizi temiz bir odaya mı taşıyayım?',
      choices: [
        { id: 'move', intentionTr: 'Başka odaya taşınmayı iste', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Je préférerais changer de chambre, si c’est possible.',
          translation: 'Mümkünse başka bir odaya taşınmayı tercih ederim.',
          altAccepted: ['Vous pouvez me changer de chambre', 'Je préférerais une autre chambre'],
          next: 'resolved_move', relationshipEffect: 1 },
        { id: 'clean_now', intentionTr: 'Hemen temizlenmesini iste', tone: 'direct', difficulty: 'easy', xp: 10,
          sentence: 'Envoyez juste quelqu’un pour la nettoyer maintenant, s’il vous plaît.',
          translation: 'Lütfen sadece hemen temizlemesi için birini gönderin.',
          altAccepted: ['Envoyez quelqu’un pour nettoyer maintenant', 'Faites-la nettoyer tout de suite s’il vous plaît'],
          next: 'resolved_clean' }
      ]
    },
    apologize_noise: {
      id: 'apologize_noise', speakerId: 'daniel', emotion: 'apologetic',
      text: 'C’est inacceptable à cette heure-ci. Je peux vous installer dans une chambre calme à l’arrière — ça vous aiderait ?',
      translation: 'Bu saatte kabul edilemez. Sizi arkadaki sessiz bir odaya taşıyabilirim — bu yardımcı olur mu?',
      choices: [
        { id: 'yes_move', intentionTr: 'Evet, taşınmayı kabul et', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'Oui, une chambre calme serait parfaite. Merci.',
          translation: 'Evet, sessiz bir oda harika olur. Teşekkürler.',
          altAccepted: ['Oui une chambre calme ce serait super', 'Ce serait parfait merci'],
          next: 'resolved_move', relationshipEffect: 1 },
        { id: 'compensation', intentionTr: 'Bir tür telafi iste', tone: 'formal', difficulty: 'hard', xp: 18,
          sentence: 'J’apprécie, mais je m’attendrais aussi à un geste commercial pour le dérangement.',
          translation: 'Bunu takdir ediyorum ama bu zahmet için bir telafi de beklerdim.',
          altAccepted: ['Je m’attendrais aussi à une compensation', 'Je pense qu’une compensation serait juste'],
          next: 'offer_compensation' }
      ]
    },
    apologize_ac: {
      id: 'apologize_ac', speakerId: 'daniel', emotion: 'concerned',
      text: 'Toutes mes excuses. Notre technicien est parti pour la nuit, donc la solution la plus rapide est une nouvelle chambre. Ça vous convient ?',
      translation: 'Özür dilerim. Teknisyenimiz bu gece ayrıldı, en hızlı çözüm yeni bir oda. Uygun mu?',
      choices: [
        { id: 'accept_new', intentionTr: 'Yeni odayı kabul et', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'Très bien. Une nouvelle chambre me convient.',
          translation: 'Sorun değil. Yeni bir oda benim için uygun.',
          altAccepted: ['Une nouvelle chambre c’est bien', 'Ça me convient'],
          next: 'resolved_move', relationshipEffect: 1 },
        { id: 'insist_tech', intentionTr: 'Yine de teknisyende ısrar et', tone: 'direct', difficulty: 'hard', xp: 18,
          sentence: 'Je préférerais vraiment garder ma chambre. Un technicien pourrait venir demain à la première heure ?',
          translation: 'Gerçekten kendi odamda kalmayı tercih ederim. Teknisyen yarın ilk iş gelebilir mi?',
          altAccepted: ['Un technicien peut venir demain matin', 'Je préfère garder ma chambre et réparer demain'],
          next: 'offer_compensation' }
      ]
    },
    offer_compensation: {
      id: 'offer_compensation', speakerId: 'daniel', emotion: 'friendly',
      text: 'C’est raisonnable. Je retire vingt pour cent du tarif de ce soir et je fais monter le petit-déjeuner dans votre chambre. Marché conclu ?',
      translation: 'Bu makul. Bu geceki ücretten yüzde yirmi indirim yapıp odanıza kahvaltı göndereceğim. Anlaştık mı?',
      next: 'resolved_deal'
    },
    resolved_move: {
      id: 'resolved_move', speakerId: 'daniel', emotion: 'happy',
      text: 'C’est fait. Vous êtes maintenant en chambre 302 — bien mieux. Je fais monter vos bagages. Passez une nuit reposante.',
      translation: 'Tamamdır. Artık 302 numaralı odadasınız — çok daha iyi. Bavullarınızı yukarı getirteceğim. Rahat bir gece geçirin.',
      next: 'end_moved'
    },
    resolved_clean: {
      id: 'resolved_clean', speakerId: 'daniel', emotion: 'friendly',
      text: 'Le ménage est en route et sera là dans cinq minutes. Merci de votre patience.',
      translation: 'Kat görevlisi yolda ve beş dakikaya orada olacak. Sabrınız için teşekkürler.',
      next: 'end_cleaned'
    },
    resolved_deal: {
      id: 'resolved_deal', speakerId: 'daniel', emotion: 'happy',
      text: 'Excellent. Tout est arrangé. Encore désolé pour le dérangement — merci de votre compréhension.',
      translation: 'Mükemmel. Her şey ayarlandı. Zahmet için tekrar özür dilerim — bu kadar anlayışlı olduğunuz için teşekkürler.',
      next: 'end_deal'
    }
  },
  endings: {
    end_moved: { id: 'end_moved', kind: 'problem-solved', title: 'Déménagé et installé', titleTr: 'Taşındın ve yerleştin',
      text: 'Tu as expliqué le problème clairement et obtenu une meilleure chambre. Bien joué.',
      translation: 'Sorunu net anlattın ve daha iyi bir oda aldın. İyi hallettin.',
      relationshipEffect: 1, coins: 12 },
    end_cleaned: { id: 'end_cleaned', kind: 'success', title: 'Réglé rapidement', titleTr: 'Hızlıca çözüldü',
      text: 'Une demande rapide et directe a envoyé le ménage en route. Simple et efficace.',
      translation: 'Hızlı, doğrudan bir istek kat görevlisini yola çıkardı. Basit ve etkili.',
      coins: 8 },
    end_deal: { id: 'end_deal', kind: 'excellent', title: 'Un accord équitable', titleTr: 'Adil bir anlaşma',
      text: 'Tu as défendu tes intérêts poliment et négocié une réduction plus le petit-déjeuner. C’est du français de niveau avancé.',
      translation: 'Kibarca hakkını aradın ve indirim artı kahvaltı için pazarlık ettin. İşte ileri seviye Fransızca.',
      relationshipEffect: 2, coins: 18 }
  }
});

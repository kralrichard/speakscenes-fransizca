// ============================================================================
// Quick-Practice phrasebook — the "easy way" to add lots of content at scale.
//
// Instead of authoring a full branching graph, each entry is one compact
// [french, turkish] tuple grouped by place → topic → CEFR level. A tiny
// builder flattens them into practice items the Quick Practice screen scores
// with the SAME speech recognizer + scorer + TTS as Story Mode. Adding 20 more
// phrases is literally 20 more one-line tuples — no engine or UI changes.
//
// PhraseItem = { id, en, tr, level, locationId, topic }  (`en` = target lang)
// ============================================================================

// place → topic → { LEVEL: [[fr, tr], ...] }
const RAW = {
  hotel: {
    'Check-in & rezervasyon': {
      A1: [
        ['J’ai une réservation.', 'Bir rezervasyonum var.'],
        ['Je m’appelle Alex Turner.', 'Adım Alex Turner.'],
        ['Voici mon passeport.', 'İşte pasaportum.'],
        ['Une chambre pour deux nuits, s’il vous plaît.', 'İki geceliğine bir oda, lütfen.']
      ],
      A2: [
        ['Je voudrais faire le check-in, s’il vous plaît.', 'Giriş yapmak istiyorum, lütfen.'],
        ['Le petit-déjeuner est compris dans le prix ?', 'Kahvaltı fiyata dahil mi?'],
        ['À quelle heure est le check-out ?', 'Çıkış saati kaçta?'],
        ['Je pourrais avoir une chambre avec vue ?', 'Manzaralı bir oda alabilir miyim?']
      ],
      B1: [
        ['Serait-il possible d’avoir un départ tardif ?', 'Geç çıkış mümkün olur mu?'],
        ['Vous avez des chambres libres pour ce soir ?', 'Bu gece için boş odanız var mı?']
      ]
    },
    'Sorunlar & istekler': {
      A2: [
        ['Je pourrais avoir des serviettes en plus ?', 'Biraz fazladan havlu alabilir miyim?'],
        ['Quel est le mot de passe du Wi-Fi ?', 'Wi-Fi şifresi nedir?'],
        ['La climatisation ne marche pas.', 'Klima çalışmıyor.']
      ],
      B1: [
        ['J’ai bien peur que la chambre d’à côté soit très bruyante.', 'Maalesef yan oda çok gürültülü.'],
        ['Ma chambre n’a pas encore été nettoyée.', 'Odam henüz temizlenmedi.'],
        ['Quelqu’un pourrait m’aider avec mes bagages ?', 'Bavulumla biri yardım edebilir mi?']
      ]
    }
  },

  airport: {
    'Check-in & bagaj': {
      A1: [
        ['Voici ma carte d’embarquement.', 'İşte biniş kartım.'],
        ['J’ai un bagage à enregistrer.', 'Check-in için bir bavulum var.'],
        ['Où est la porte d’embarquement ?', 'Kapı nerede?']
      ],
      A2: [
        ['Je m’enregistre pour le vol pour Rome.', 'Roma uçuşu için check-in yapıyorum.'],
        ['Mon bagage dépasse la limite de poids ?', 'Bavulum ağırlık limitini aşıyor mu?'],
        ['Je pourrais avoir une place côté hublot, s’il vous plaît ?', 'Cam kenarı koltuk alabilir miyim, lütfen?']
      ],
      B1: [
        ['Une carte d’embarquement numérique, c’est accepté ?', 'Dijital biniş kartı geçerli mi?'],
        ['Combien coûte le supplément bagage ?', 'Fazla bagaj ücreti ne kadar?']
      ]
    },
    'Sorunlar': {
      B1: [
        ['Mon vol de correspondance a été retardé.', 'Aktarma uçuşum rötar yaptı.'],
        ['Je crois que j’ai raté mon vol.', 'Sanırım uçuşumu kaçırdım.'],
        ['Vous pourriez me mettre sur le prochain vol ?', 'Beni bir sonraki uçağa alabilir misiniz?'],
        ['Ma valise n’est pas arrivée sur le tapis.', 'Valizim banttan çıkmadı.']
      ],
      B2: [
        ['Comme le retard était de votre faute, je ne m’attends à aucuns frais de modification.', 'Rötar sizin hatanız olduğu için yeniden rezervasyon ücreti beklemem.']
      ]
    }
  },

  restaurant: {
    'Sipariş verme': {
      A1: [
        ['Une table pour deux, s’il vous plaît.', 'İki kişilik bir masa, lütfen.'],
        ['Je peux voir le menu ?', 'Menüyü görebilir miyim?'],
        ['Je vais prendre le poulet, s’il vous plaît.', 'Tavuğu alacağım, lütfen.'],
        ['Juste de l’eau pour moi, merci.', 'Bana sadece su, teşekkürler.']
      ],
      A2: [
        ['Qu’est-ce que vous recommandez ?', 'Ne önerirsiniz?'],
        ['On pourrait avoir quelques minutes de plus ?', 'Birkaç dakika daha alabilir miyiz?'],
        ['Ce plat contient des noix ?', 'Bu yemekte fındık/fıstık var mı?']
      ],
      B1: [
        ['Je suis allergique aux fruits de mer, donc je vais éviter ça.', 'Deniz ürünlerine alerjim var, o yüzden ondan uzak duracağım.']
      ]
    },
    'Ödeme & sorunlar': {
      A2: [
        ['On pourrait avoir l’addition, s’il vous plaît ?', 'Hesabı alabilir miyiz, lütfen?'],
        ['Je peux payer par carte ?', 'Kartla ödeyebilir miyim?'],
        ['Gardez la monnaie.', 'Üstü kalsın.']
      ],
      B1: [
        ['Je suis désolé, mais ce n’est pas ce que j’ai commandé.', 'Üzgünüm ama bu sipariş ettiğim şey değil.'],
        ['Le plat est un peu froid, j’en ai peur.', 'Maalesef yemek biraz soğuk.']
      ]
    }
  },

  cafe: {
    'Tezgahta': {
      A1: [
        ['Un café, s’il vous plaît.', 'Bir kahve, lütfen.'],
        ['Je peux avoir une tasse de thé ?', 'Bir fincan çay alabilir miyim?'],
        ['À emporter, s’il vous plaît.', 'Dışarı alacağım, lütfen.'],
        ['C’est combien ?', 'Ne kadar?']
      ],
      A2: [
        ['Je vais prendre un grand latte, s’il vous plaît.', 'Büyük boy bir latte alacağım, lütfen.'],
        ['Vous avez du lait d’avoine ?', 'Yulaf sütünüz var mı?'],
        ['Je pourrais l’avoir avec moins de sucre ?', 'Onu daha az şekerli alabilir miyim?']
      ]
    },
    'İnsanlarla tanışma': {
      B1: [
        ['Ça fait une éternité — comment tu vas ?', 'Çok uzun zaman oldu — nasılsın?'],
        ['Quelle coïncidence de te voir ici !', 'Seni burada görmek ne tesadüf!'],
        ['On prend une table pour discuter ?', 'Bir masa tutup sohbet edelim mi?']
      ]
    }
  },

  hospital: {
    'Belirtileri anlatma': {
      A1: [
        ['Je ne me sens pas bien.', 'Kendimi iyi hissetmiyorum.'],
        ['J’ai mal à la tête.', 'Başım ağrıyor.'],
        ['J’ai mal à la gorge.', 'Boğazım ağrıyor.']
      ],
      A2: [
        ['J’ai de la fièvre depuis hier.', 'Dünden beri ateşim var.'],
        ['La douleur a commencé il y a deux jours.', 'Ağrı iki gün önce başladı.'],
        ['J’ai des vertiges quand je me lève.', 'Ayağa kalkınca başım dönüyor.']
      ],
      B1: [
        ['Je me sens épuisé et je n’arrive pas à dormir.', 'Çok bitkin hissediyorum ve uyuyamıyorum.'],
        ['J’ai pris un antidouleur, mais ça n’a pas aidé.', 'Ağrı kesici aldım ama işe yaramadı.']
      ]
    },
    'Randevular': {
      A2: [
        ['Je voudrais prendre rendez-vous.', 'Randevu almak istiyorum.'],
        ['Quand est-ce que je devrais revenir ?', 'Ne zaman geri gelmeliyim?']
      ]
    }
  },

  pharmacy: {
    'İlaç alma': {
      A1: [
        ['J’ai un rhume.', 'Üşüttüm.'],
        ['Vous avez quelque chose contre la toux ?', 'Öksürük için bir şeyiniz var mı?']
      ],
      A2: [
        ['Vous pourriez conseiller quelque chose pour le mal de gorge ?', 'Boğaz ağrısı için bir şey önerebilir misiniz?'],
        ['Je dois le prendre à quelle fréquence ?', 'Bunu ne sıklıkta almalıyım?'],
        ['Je voudrais faire préparer cette ordonnance.', 'Bu reçeteyi doldurtmak istiyorum.']
      ],
      B1: [
        ['Ce médicament va me faire somnoler ?', 'Bu ilaç beni uykulu yapar mı?'],
        ['C’est sans risque de le prendre en mangeant ?', 'Yemekle almak güvenli mi?']
      ]
    }
  },

  supermarket: {
    'Bulma & satın alma': {
      A1: [
        ['Où est le lait ?', 'Süt nerede?'],
        ['C’est combien ?', 'Bu ne kadar?'],
        ['Vous avez du pain ?', 'Ekmeğiniz var mı?']
      ],
      A2: [
        ['Les œufs sont dans quel rayon ?', 'Yumurtalar hangi koridorda?'],
        ['Vous vendez des produits sans gluten ?', 'Glutensiz ürün satıyor musunuz?'],
        ['Je peux payer par carte ici ?', 'Burada kartla ödeyebilir miyim?']
      ],
      B1: [
        ['Excusez-moi, je crois qu’on m’a facturé ça deux fois.', 'Pardon, sanırım bunun için iki kez ücret alındı.']
      ]
    }
  },

  clothing: {
    'Kıyafet alışverişi': {
      A1: [
        ['Je peux l’essayer ?', 'Bunu deneyebilir miyim?'],
        ['Vous l’avez en taille M ?', 'Bunun orta bedeni var mı?'],
        ['Elle coûte combien, cette veste ?', 'Bu ceket ne kadar?']
      ],
      A2: [
        ['Vous l’avez dans une autre couleur ?', 'Bunun farklı bir rengi var mı?'],
        ['C’est un peu trop serré.', 'Bu biraz fazla dar.'],
        ['Où sont les cabines d’essayage ?', 'Deneme kabinleri nerede?']
      ],
      B1: [
        ['Je voudrais rendre ça — ça ne me va pas.', 'Bunu iade etmek istiyorum — bana olmadı.'],
        ['Je peux l’échanger contre une taille plus grande ?', 'Daha büyük bir bedenle değiştirebilir miyim?']
      ]
    }
  },

  train: {
    'Biletler & seyahat': {
      A1: [
        ['Un billet pour Londres, s’il vous plaît.', 'Londra’ya bir bilet, lütfen.'],
        ['C’est quelle voie ?', 'Hangi peron?'],
        ['À quelle heure part le train ?', 'Tren saat kaçta kalkıyor?']
      ],
      A2: [
        ['Un aller-retour, s’il vous plaît.', 'Gidiş-dönüş bilet, lütfen.'],
        ['Quand est le prochain train pour le centre-ville ?', 'Şehre bir sonraki tren ne zaman?'],
        ['Cette place est prise ?', 'Bu koltuk dolu mu?']
      ],
      B1: [
        ['Il y a une réduction étudiante ?', 'Öğrenci indirimi var mı?'],
        ['Je crois que je suis monté dans le mauvais train.', 'Sanırım yanlış trene bindim.']
      ]
    }
  },

  taxi: {
    'Taksiye binme': {
      A1: [
        ['À l’aéroport, s’il vous plaît.', 'Havalimanına, lütfen.'],
        ['C’est combien ?', 'Ne kadar?'],
        ['Arrêtez-vous ici, s’il vous plaît.', 'Burada durun, lütfen.']
      ],
      A2: [
        ['Vous pourriez m’emmener à l’hôtel Sunrise ?', 'Beni Sunrise Otel’e götürür müsünüz?'],
        ['Je suis un peu pressé.', 'Biraz acelem var.'],
        ['Je peux payer par carte ?', 'Kartla ödeyebilir miyim?']
      ],
      B1: [
        ['Vous pourriez prendre la route la plus rapide, s’il vous plaît ?', 'En hızlı yoldan gider misiniz, lütfen?']
      ]
    }
  },

  bank: {
    'Bankada': {
      A2: [
        ['Je voudrais ouvrir un compte.', 'Bir hesap açmak istiyorum.'],
        ['J’ai besoin de changer de l’argent.', 'Biraz para bozdurmam gerekiyor.'],
        ['Quel est le taux de change aujourd’hui ?', 'Bugün döviz kuru nedir?']
      ],
      B1: [
        ['Je crois que j’ai perdu ma carte bancaire.', 'Sanırım banka kartımı kaybettim.'],
        ['Il y a un paiement que je ne reconnais pas.', 'Tanımadığım bir ödeme var.'],
        ['Vous pourriez bloquer ma carte, s’il vous plaît ?', 'Kartımı bloke edebilir misiniz, lütfen?']
      ]
    }
  },

  police: {
    'Bildirimde bulunma': {
      B1: [
        ['Je voudrais déclarer un téléphone perdu.', 'Kayıp bir telefon bildirmek istiyorum.'],
        ['Je crois qu’on m’a volé mon sac.', 'Sanırım çantam çalındı.'],
        ['C’est arrivé il y a environ une heure.', 'Yaklaşık bir saat önce oldu.'],
        ['Je pourrais avoir une copie de la déclaration ?', 'Tutanağın bir kopyasını alabilir miyim?']
      ],
      B2: [
        ['J’aurai besoin de ce document pour ma demande d’assurance.', 'Bu belge sigorta talebim için gerekecek.']
      ]
    }
  },

  street: {
    'Yol tarifi & sohbet': {
      A1: [
        ['Excusez-moi, où est la gare ?', 'Pardon, istasyon nerede?'],
        ['C’est loin d’ici ?', 'Buraya uzak mı?'],
        ['Merci pour votre aide.', 'Yardımın için teşekkürler.']
      ],
      A2: [
        ['Vous pourriez me dire comment aller au musée ?', 'Müzeye nasıl gideceğimi söyler misiniz?'],
        ['Il y a une pharmacie près d’ici ?', 'Buralarda bir eczane var mı?'],
        ['Enchanté. Je suis nouveau ici.', 'Tanıştığıma memnun oldum. Buraya yeniyim.']
      ],
      B1: [
        ['Vous pourriez me dire où est la banque la plus proche ?', 'En yakın bankanın nerede olduğunu söyler misiniz?'],
        ['Tu veux te joindre à nous pour un café ?', 'Bize kahveye katılmak ister misin?']
      ]
    }
  },

  workplace: {
    'Görüşmeler & ofis': {
      B1: [
        ['Merci de m’avoir invité à l’entretien.', 'Görüşmeye davet ettiğiniz için teşekkürler.'],
        ['J’ai trois ans d’expérience dans ce domaine.', 'Bu alanda üç yıllık deneyimim var.'],
        ['Vous pourriez m’en dire plus sur le poste ?', 'Bu pozisyon hakkında biraz daha bilgi verir misiniz?']
      ],
      B2: [
        ['Avant, je prenais trop sur moi, mais j’apprends à déléguer.', 'Eskiden fazla iş üstlenirdim ama yetki devretmeyi öğreniyorum.'],
        ['À quoi ressemble la réussite dans les six premiers mois ?', 'İlk altı ayda başarı neye benzer?'],
        ['Je crois qu’il y a eu un malentendu — laissez-moi expliquer.', 'Sanırım bir yanlış anlaşılma oldu — açıklayayım.'],
        ['Réglons ça ensemble.', 'Bunu birlikte çözelim.']
      ]
    }
  },

  home: {
    'Günlük ev sohbeti': {
      A1: [
        ['Bonjour ! Tu as bien dormi ?', 'Günaydın! İyi uyudun mu?'],
        ['Qu’est-ce qu’il y a au petit-déjeuner ?', 'Kahvaltıda ne var?'],
        ['Je suis encore un peu fatigué.', 'Hâlâ biraz yorgunum.'],
        ['À plus tard !', 'Sonra görüşürüz!']
      ],
      A2: [
        ['C’est quoi tes plans pour aujourd’hui ?', 'Bugün planların ne?'],
        ['Tu veux aller au marché ensemble ?', 'Birlikte pazara gitmek ister misin?'],
        ['Tu peux m’aider avec ça, s’il te plaît ?', 'Bunda bana yardım eder misin, lütfen?']
      ]
    }
  }
};

// Second batch — same compact format. Kept separate purely so the file stays
// easy to scan; merged with RAW below. Adding more content = add more tuples.
const RAW_EXTRA = {
  hotel: {
    'Resepsiyonda dahası': {
      A2: [
        ['Vous pourriez m’appeler un taxi pour huit heures ?', 'Saat sekiz için bana bir taksi çağırır mısınız?'],
        ['Il y a une salle de sport ou une piscine dans l’hôtel ?', 'Otelde spor salonu ya da havuz var mı?'],
        ['À quelle heure ouvre le restaurant ?', 'Restoran saat kaçta açılıyor?'],
        ['Je pourrais laisser mes bagages ici jusqu’à midi ?', 'Bavullarımı öğlene kadar burada bırakabilir miyim?']
      ],
      B1: [
        ['Je voudrais prolonger mon séjour d’une nuit.', 'Konaklamamı bir gece uzatmak istiyorum.'],
        ['Il y a une navette pour l’aéroport ?', 'Havalimanına servis var mı?']
      ]
    }
  },
  airport: {
    'Biniş & uçakta': {
      A2: [
        ['Où est le contrôle des passeports ?', 'Pasaport kontrolü nerede?'],
        ['L’embarquement pour le vol de Paris a commencé ?', 'Paris uçuşu binişe başladı mı?'],
        ['Je pourrais avoir un verre d’eau, s’il vous plaît ?', 'Bir bardak su alabilir miyim, lütfen?']
      ],
      B1: [
        ['Je suis ici en vacances pour deux semaines.', 'İki haftalığına tatil için buradayım.'],
        ['Je vais loger dans un hôtel du centre-ville.', 'Şehir merkezindeki bir otelde kalacağım.']
      ]
    }
  },
  restaurant: {
    'Ekstra istekler': {
      A2: [
        ['On pourrait s’asseoir près de la fenêtre ?', 'Pencere kenarına oturabilir miyiz?'],
        ['Je peux l’avoir sans oignons ?', 'Bunu soğansız alabilir miyim?'],
        ['Je pourrais avoir la recette ? C’est délicieux !', 'Tarifini alabilir miyim? Çok lezzetli!']
      ],
      B1: [
        ['Tout était excellent, merci.', 'Her şey mükemmeldi, teşekkürler.'],
        ['On pourrait partager l’addition, s’il vous plaît ?', 'Hesabı bölüşebilir miyiz, lütfen?']
      ]
    }
  },
  cafe: {
    'Kafede dahası': {
      A1: [
        ['Cette place est libre ?', 'Bu koltuk boş mu?'],
        ['Je peux avoir un verre d’eau aussi ?', 'Bir de bir bardak su alabilir miyim?']
      ],
      A2: [
        ['Vous avez des gâteaux aujourd’hui ?', 'Bugün kekiniz var mı?'],
        ['Je pourrais avoir le mot de passe du Wi-Fi ?', 'Wi-Fi şifresini alabilir miyim?']
      ]
    }
  },
  hospital: {
    'Klinikte': {
      A2: [
        ['J’ai besoin d’une ordonnance pour ça ?', 'Bunun için reçeteye ihtiyacım var mı?'],
        ['Les résultats prendront combien de temps ?', 'Sonuçlar ne kadar sürer?'],
        ['Je devrais me reposer quelques jours ?', 'Birkaç gün dinlenmeli miyim?']
      ],
      B1: [
        ['Il y a quelque chose que je devrais éviter de manger ?', 'Yememem gereken bir şey var mı?']
      ]
    }
  },
  pharmacy: {
    'Eczanede dahası': {
      A1: [
        ['Vous avez des antidouleurs ?', 'Ağrı kesiciniz var mı?'],
        ['Il me faut des pansements, s’il vous plaît.', 'Biraz yara bandı gerekiyor, lütfen.']
      ],
      A2: [
        ['Je peux le prendre avec d’autres médicaments ?', 'Bunu başka ilaçla alabilir miyim?'],
        ['Il y a une version sans sucre ?', 'Şekersiz bir türü var mı?']
      ]
    }
  },
  supermarket: {
    'Kasada': {
      A1: [
        ['Vous avez un sac ?', 'Poşetiniz var mı?'],
        ['Je peux avoir un ticket ?', 'Fiş alabilir miyim?']
      ],
      A2: [
        ['C’est en promotion aujourd’hui ?', 'Bu bugün indirimde mi?'],
        ['Où est-ce que je trouve les surgelés ?', 'Dondurulmuş gıdaları nerede bulabilirim?'],
        ['Vous avez une carte de fidélité ?', 'Sadakat kartınız var mı?']
      ]
    }
  },
  clothing: {
    'Daha fazla alışveriş': {
      A2: [
        ['Vous avez ces chaussures en 42 ?', 'Bu ayakkabıların 42 numarası var mı?'],
        ['C’est en solde ?', 'Bu indirimde mi?'],
        ['Je peux payer en espèces ?', 'Nakit ödeyebilir miyim?']
      ],
      B1: [
        ['Vous remboursez sans ticket de caisse ?', 'Fişsiz para iadesi yapıyor musunuz?']
      ]
    }
  },
  train: {
    'Peronda': {
      A1: [
        ['C’est le train pour Londres ?', 'Bu Londra treni mi?'],
        ['Excusez-moi, cette place est libre ?', 'Pardon, bu koltuk boş mu?']
      ],
      A2: [
        ['Je dois changer de train ?', 'Aktarma yapmam gerekiyor mu?'],
        ['Le trajet dure combien de temps ?', 'Yolculuk ne kadar sürüyor?']
      ]
    }
  },
  taxi: {
    'Yolda': {
      A2: [
        ['Vous pourriez ralentir un peu, s’il vous plaît ?', 'Biraz yavaşlar mısınız, lütfen?'],
        ['C’est loin d’ici ?', 'Buraya uzak mı?'],
        ['Vous pourriez attendre quelques minutes ?', 'Birkaç dakika bekler misiniz?']
      ]
    }
  },
  bank: {
    'Bankada dahası': {
      A2: [
        ['Je voudrais retirer de l’argent.', 'Biraz para çekmek istiyorum.'],
        ['Où est le distributeur le plus proche ?', 'En yakın bankamatik nerede?']
      ],
      B1: [
        ['La nouvelle carte mettra combien de temps à arriver ?', 'Yeni kart ne zaman gelir?'],
        ['Vous pourriez l’envoyer à mon adresse ?', 'Adresime gönderebilir misiniz?']
      ]
    }
  },
  police: {
    'Daha fazla ayrıntı': {
      B1: [
        ['Je peux vous contacter par e-mail ?', 'Sizinle e-posta ile iletişim kurabilir miyim?'],
        ['C’est un téléphone noir avec une coque bleue.', 'Mavi kılıfta siyah bir telefon.'],
        ['Je l’avais pour la dernière fois dans le bus numéro 12.', 'En son 12 numaralı otobüste elimdeydi.']
      ]
    }
  },
  street: {
    'Daha fazla yol tarifi': {
      A2: [
        ['Tournez à gauche aux feux.', 'Trafik ışıklarında sola dön.'],
        ['Continuez tout droit pendant environ cinq minutes.', 'Yaklaşık beş dakika düz git.'],
        ['C’est à côté de la pharmacie.', 'Eczanenin yanında.'],
        ['Je suis dans la bonne direction ?', 'Doğru yolda mıyım?']
      ]
    },
    'Günlük temel cümleler': {
      A1: [
        ['Excusez-moi, vous pouvez m’aider ?', 'Pardon, yardım edebilir misiniz?'],
        ['Je suis désolé, je ne comprends pas.', 'Üzgünüm, anlamıyorum.'],
        ['Vous pourriez répéter, s’il vous plaît ?', 'Bunu tekrar söyler misiniz, lütfen?'],
        ['Vous pourriez parler plus lentement, s’il vous plaît ?', 'Biraz daha yavaş konuşur musunuz, lütfen?'],
        ['Comment on dit ça en français ?', 'Bu Fransızca nasıl söylenir?'],
        ['Merci beaucoup pour votre aide.', 'Yardımınız için çok teşekkürler.']
      ]
    }
  },
  workplace: {
    'Günlük ofis': {
      A2: [
        ['Tu pourrais m’aider avec cette tâche ?', 'Bu işte bana yardım eder misin?'],
        ['Je t’enverrai le rapport par e-mail.', 'Raporu sana e-posta ile göndereceğim.'],
        ['On peut prévoir une réunion pour demain ?', 'Yarın için bir toplantı ayarlayabilir miyiz?']
      ],
      B1: [
        ['Je suis désolé, je l’envoie tout de suite.', 'Özür dilerim, hemen gönderiyorum.']
      ]
    }
  },
  home: {
    'Evin içinde': {
      A1: [
        ['Tu peux me passer le sel, s’il te plaît ?', 'Tuzu uzatır mısın, lütfen?'],
        ['Je vais au magasin. Tu as besoin de quelque chose ?', 'Markete gidiyorum. Bir şeye ihtiyacın var mı?'],
        ['Le dîner est prêt !', 'Yemek hazır!']
      ],
      A2: [
        ['Tu pourrais baisser un peu la musique ?', 'Müziği biraz kısar mısın?'],
        ['Je ferai la vaisselle ce soir.', 'Bulaşıkları bu gece ben yıkarım.']
      ]
    }
  }
};

// Deep-merge two RAW objects (place → topic → level arrays never collide here
// because RAW_EXTRA uses distinct topic names).
function mergeRaw(a, b) {
  const out = JSON.parse(JSON.stringify(a));
  for (const [place, topics] of Object.entries(b)) {
    out[place] = { ...(out[place] || {}), ...topics };
  }
  return out;
}

// Flatten RAW into a single array with stable ids.
function build(raw) {
  const out = [];
  for (const [locationId, topics] of Object.entries(raw)) {
    for (const [topic, byLevel] of Object.entries(topics)) {
      for (const [level, pairs] of Object.entries(byLevel)) {
        pairs.forEach(([en, tr], i) => {
          out.push({
            id: `${locationId}-${topic.replace(/[^a-z]/gi, '').slice(0, 8)}-${level}-${i}`.toLowerCase(),
            en, tr, level, locationId, topic
          });
        });
      }
    }
  }
  return out;
}

export const PHRASEBOOK = build(mergeRaw(RAW, RAW_EXTRA));

// Group metadata for the Quick Practice screen (icon/label per place), reusing
// the Story environments where possible.
export const PHRASE_PLACES = {
  hotel:       { icon: '🏨', label: 'Hôtel',            labelTr: 'Otel' },
  airport:     { icon: '✈️', label: 'Aéroport',         labelTr: 'Havalimanı' },
  restaurant:  { icon: '🍽️', label: 'Restaurant',       labelTr: 'Restoran' },
  cafe:        { icon: '☕', label: 'Café',              labelTr: 'Kafe' },
  hospital:    { icon: '🏥', label: 'Hôpital',          labelTr: 'Hastane' },
  pharmacy:    { icon: '💊', label: 'Pharmacie',        labelTr: 'Eczane' },
  supermarket: { icon: '🛒', label: 'Supermarché',      labelTr: 'Market' },
  clothing:    { icon: '👕', label: 'Magasin de vêtements', labelTr: 'Giyim' },
  train:       { icon: '🚆', label: 'Gare',             labelTr: 'Tren Garı' },
  taxi:        { icon: '🚕', label: 'Taxi',             labelTr: 'Taksi' },
  bank:        { icon: '🏦', label: 'Banque',           labelTr: 'Banka' },
  police:      { icon: '🚓', label: 'Police',           labelTr: 'Karakol' },
  street:      { icon: '🚶', label: 'En ville',         labelTr: 'Dışarıda' },
  workplace:   { icon: '💼', label: 'Travail',          labelTr: 'İş Yeri' },
  home:        { icon: '🏠', label: 'Maison',           labelTr: 'Ev' }
};

export function phrasesForPlace(locationId) {
  return PHRASEBOOK.filter(p => p.locationId === locationId);
}

export const PHRASEBOOK_COUNT = PHRASEBOOK.length;

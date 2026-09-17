export default [
  {
    _id: 'Jesus',
    title: 'Jesus Christ',
    pageType: 'topic',
    color: '#FDB913',
    shortDesc:
      'Discusses Jesus Christ, the Son and second person of the Trinity.',
    longDesc:
      'Jesus of Nazareth is the most consequential figure in history. He has been called many things by many people, but to Christians He is the risen Christ, the Messiah, who came to judge the living and the dead. Jesus Christ died, was buried, and rose again on the third day to forgive our sins and reconcile us to the Father. But, is the Christian perspective correct? Who is Jesus?',
    rows: [
      {
        _id: 'row1',
        type: 'list',
        content: [
          {
            _id: 'Jesus_dual_nature',
            name: 'The Dual Nature of Jesus',
            type: 'theology',
            shortDesc:
              'Jesus is both fully God and fully Man. How is this possible?',
            links: [], // Links here are compiled during runtime
          },
          {
            _id: 'Jesus_ministry',
            name: "Jesus's Ministry",
            type: 'topic',
            links: [],
          },
          {
            _id: 'Jesus_birth',
            name: "Jesus's Birth",
            type: 'topic',
            shortDesc:
              'Jesus was born by a virgin and conceived by the Holy Spirit.',
            links: [],
          },
          {
            _id: 'parables',
            name: 'The Parables',
            type: 'topic',
            shortDesc:
              'Jesus loved teaching in the form of parables, or illustrative stories that contain theological meaning.',
            links: [],
          },
        ],
      },
      {
        _id: 'sub',
        type: 'card',
        content: [
          'Jesus_resurrection',
          'christophanies',
          'crucifixion',
          'atonement',
        ], // TODO: Maybe this will just be IDs? Also calculated at runtime? This would assume many topics have a "Sub-Topic" category
      },
      {
        _id: 'related',
        type: 'card',
        content: ['trinity', 'acts', 'gospels', 'revelation'],
      },
    ],
  },
  {
    _id: 'Jesus',
    name: 'Jesus Christ',
    type: 'topic',
    color: '#FDB913',
    shortDesc:
      'Discusses Jesus Christ, the Son and second person of the Trinity.',
    longDesc:
      'Jesus of Nazareth is the most consequential figure in history. He has been called many things by many people, but to Christians He is the risen Christ, the Messiah, who came to judge the living and the dead. Jesus Christ died, was buried, and rose again on the third day to forgive our sins and reconcile us to the Father. But, is the Christian perspective correct? Who is Jesus?',
    badges: ['topic', 'apologetics', 'theology', 'commentary'],
    links: [],
    categories: ['God'],
  },
  // TODO: One day, there could be a youtube playlist card
  {
    _id: 'Holy_Spirit',
    name: 'Holy Spirit',
    type: 'topic',
    color: '#FDB913',
    shortDesc: 'Discusses the Holy Spirit, the third person of the Trinity.',
    longDesc: '...',
    badges: ['topic', 'apologetics', 'theology', 'commentary'],
    links: [],
    categories: ['God'],
  },
  {
    _id: 'resurrection',
    name: 'The Resurrection of Jesus',
    type: 'topic',
    color: '#DFCF9F',
    shortDesc: 'Did Jesus really rise from the dead?',
    longDesc:
      "Jesus of Nazareth is the most important figure in human history. He claimed to be the unique Son of God and the Messiah of the world. The Bible records accounts of his triumphant resurrection. But can a man really rise from the dead? Are the claims about Jesus's resurrection true?",
    badges: ['topic', 'question', 'apologetics', 'theology'],
    links: [
      {
        platform: 'youtube',
        url: 'https://youtube.com/playlist?list=PL1mr9ZTZb3TUYymBPce08oyuhnHLLkR_B&si=F-l8fR4dJ7EqlE9q',
        displayText: 'InspiringPhilosophy - The Resurrection of Jesus',
      },
      {
        platform: 'scholarly_article',
        url: 'https://ntwrightpage.com/2016/07/12/jesus-resurrection-and-christian-origins/',
        displayText: "N.T. Wright - Jesus' Resurrection and Christian Origins",
      },
    ],
  },
  {
    _id: 'stars',
    name: 'The Stars',
    type: 'topic',
    color: '#7d6e96',
    shortDesc:
      'Explores the nature of the stars through a Christian worldview.',
    longDesc: '...',
    badges: ['topic', 'theology'],
    links: [
      {
        platform: 'youtube',
        url: 'https://youtu.be/pey9uQna2U4?si=KVDn0Wk5PiGKlrKB',
        displayText: 'Gavin Ortlund - The Stars',
      },
    ],
    categories: ['theology_intro'],
  },
  {
    _id: 'paul',
    name: 'Who was Paul the Apostle',
    type: 'topic',
    color: '#A32D13',
    shortDesc: 'Describes the life and ministry of Saul of Tarsus (later Paul)',
    longDesc:
      'Many claims have been made about the man Saul of Tarsus. Some hold that he was the "inventor" of Christianity, while others believe him to have been a secret Roman spy. But who was Saul of Tarsus really? Did he really have a miraculous conversion at Damascus? What did he (now Paul) actually write about?',
    badges: [
      'topic',
      'question',
      'video',
      'scholarly_article',
      'article',
      'book',
      'apologetics',
    ],
    links: [
      {
        platform: 'youtube',
        url: 'https://youtu.be/rfysCq8XOS4?si=hMSxe6DdInjEq9UW',
        displayText:
          'InspiringPhilosophy - Could Paul Arrest Christians in Damascus?',
      },
      {
        platform: 'books',
        url: 'https://www.christianbook.com/paul-a-biography-n-t-wright/9780061730580/pd/1730580?event=BRSRCG%7CPSEN',
        displayText: 'N.T. Wright - Paul: A Biography',
      },
    ],
  },
  {
    _id: 'synoptic_gospels',
    name: 'The Synoptic Gospels',
    type: 'topic',
    color: '#AC2121',
    shortDesc:
      'Dives into the reliability and truth of Matthew, Mark, and Luke',
    longDesc:
      'The Synoptic Gospels (Matthew, Mark, and Luke) are 1st century accounts that describe the life and ministry of Jesus of Nazareth. Some skeptical scholars question the truthfullness of the synoptics, largely from presuppositions about the Resurrection being false. But do their claims have any merit? Are there contradictions in the Synoptic Gospels? Were they really written by Matthew, Mark, and Luke?',
    badges: [
      'topic',
      'video',
      'scholarly_article',
      'article',
      'book',
      'apologetics',
      'theology',
    ],
    links: [
      {
        platform: 'youtube',
        url: 'https://youtube.com/playlist?list=PL1mr9ZTZb3TUDsgjzdyFz8f38YxV3QdX0&si=Cu7ZH5MqbqOr2LbV',
        displayText: 'InspiringPhilosophy - The Reliability of the Gospels',
      },
    ],
  },
  {
    _id: 'gospel',
    name: 'The Gospel',
    type: 'topic',
    color: '#FDB913',
    shortDesc:
      'The Gospel is the amazing news that Jesus Christ died for our sins and was resurrected.',
    longDesc:
      'The Gospel ("good news") is the truth that Jesus Christ died for the forgiveness of our sins and was resurrected. There were four gospels written (Matthew, Mark, Luke, John). But, what exactly does this "Gospel" mean? Are these documents reliable history? This topic houses resources to answer all of your questions about the Gospel.',
    badges: [
      'topic',
      'video',
      'scholarly_article',
      'article',
      'book',
      'apologetics',
      'theology',
    ],
    links: [
      {
        platform: 'youtube',
        url: 'https://youtube.com/playlist?list=PL1mr9ZTZb3TUDsgjzdyFz8f38YxV3QdX0&si=Cu7ZH5MqbqOr2LbV',
        displayText: 'InspiringPhilosophy - The Reliability of the Gospels',
      },
    ],
  },
  {
    _id: 'isaiah',
    name: 'Isaiah',
    type: 'topic',
    shortDesc:
      'Dives into the reliability and truth of Matthew, Mark, and Luke',
    longDesc:
      'The Synoptic Gospels (Matthew, Mark, and Luke) are 1st century accounts that describe the life and ministry of Jesus of Nazareth. Some skeptical scholars question the truthfullness of the synoptics, largely from presuppositions about the Resurrection being false. But do their claims have any merit? Are there contradictions in the Synoptic Gospels? Were they really written by Matthew, Mark, and Luke?',
    badges: [
      'topic',
      'video',
      'scholarly_article',
      'article',
      'book',
      'apologetics',
      'theology',
    ],
    links: [
      {
        platform: 'youtube',
        url: 'https://youtube.com/playlist?list=PL1mr9ZTZb3TUDsgjzdyFz8f38YxV3QdX0&si=Cu7ZH5MqbqOr2LbV',
        displayText: 'InspiringPhilosophy - The Reliability of the Gospels',
      },
    ],
  },
  {
    _id: 'daniel_prophecies',
    name: 'The Prophecies of Daniel',
    type: 'topic',
    shortDesc:
      'Dives into the reliability and truth of Matthew, Mark, and Luke',
    longDesc:
      'The Synoptic Gospels (Matthew, Mark, and Luke) are 1st century accounts that describe the life and ministry of Jesus of Nazareth. Some skeptical scholars question the truthfullness of the synoptics, largely from presuppositions about the Resurrection being false. But do their claims have any merit? Are there contradictions in the Synoptic Gospels? Were they really written by Matthew, Mark, and Luke?',
    badges: [
      'topic',
      'video',
      'scholarly_article',
      'article',
      'book',
      'apologetics',
      'theology',
    ],
    links: [
      {
        platform: 'youtube',
        url: 'https://youtube.com/playlist?list=PL1mr9ZTZb3TUDsgjzdyFz8f38YxV3QdX0&si=Cu7ZH5MqbqOr2LbV',
        displayText: 'InspiringPhilosophy - The Reliability of the Gospels',
      },
    ],
  },
  {
    _id: 'luke',
    name: 'Luke the Evangelist',
    type: 'topic',
    shortDesc:
      'Dives into the reliability and truth of Matthew, Mark, and Luke',
    longDesc:
      'The Synoptic Gospels (Matthew, Mark, and Luke) are 1st century accounts that describe the life and ministry of Jesus of Nazareth. Some skeptical scholars question the truthfullness of the synoptics, largely from presuppositions about the Resurrection being false. But do their claims have any merit? Are there contradictions in the Synoptic Gospels? Were they really written by Matthew, Mark, and Luke?',
    badges: [
      'topic',
      'video',
      'scholarly_article',
      'article',
      'book',
      'apologetics',
      'theology',
    ],
    links: [
      {
        platform: 'youtube',
        url: 'https://youtube.com/playlist?list=PL1mr9ZTZb3TUDsgjzdyFz8f38YxV3QdX0&si=Cu7ZH5MqbqOr2LbV',
        displayText: 'InspiringPhilosophy - The Reliability of the Gospels',
      },
    ],
  },
  {
    _id: 'john_apostle',
    name: 'Who was John the Apostle?',
    type: 'topic',
    shortDesc:
      'Dives into the reliability and truth of Matthew, Mark, and Luke',
    longDesc:
      'The Synoptic Gospels (Matthew, Mark, and Luke) are 1st century accounts that describe the life and ministry of Jesus of Nazareth. Some skeptical scholars question the truthfullness of the synoptics, largely from presuppositions about the Resurrection being false. But do their claims have any merit? Are there contradictions in the Synoptic Gospels? Were they really written by Matthew, Mark, and Luke?',
    badges: [
      'topic',
      'video',
      'scholarly_article',
      'article',
      'book',
      'apologetics',
      'theology',
    ],
    links: [
      {
        platform: 'youtube',
        url: 'https://youtube.com/playlist?list=PL1mr9ZTZb3TUDsgjzdyFz8f38YxV3QdX0&si=Cu7ZH5MqbqOr2LbV',
        displayText: 'InspiringPhilosophy - The Reliability of the Gospels',
      },
    ],
  },
  {
    _id: 'revelation',
    name: 'The Revelation',
    type: 'topic',
    shortDesc:
      'Dives into the reliability and truth of Matthew, Mark, and Luke',
    longDesc:
      'The Synoptic Gospels (Matthew, Mark, and Luke) are 1st century accounts that describe the life and ministry of Jesus of Nazareth. Some skeptical scholars question the truthfullness of the synoptics, largely from presuppositions about the Resurrection being false. But do their claims have any merit? Are there contradictions in the Synoptic Gospels? Were they really written by Matthew, Mark, and Luke?',
    badges: [
      'topic',
      'video',
      'scholarly_article',
      'article',
      'book',
      'apologetics',
      'theology',
    ],
    links: [
      {
        platform: 'youtube',
        url: 'https://youtube.com/playlist?list=PL1mr9ZTZb3TUDsgjzdyFz8f38YxV3QdX0&si=Cu7ZH5MqbqOr2LbV',
        displayText: 'InspiringPhilosophy - The Reliability of the Gospels',
      },
    ],
  },
  {
    _id: 'pauline_letters',
    name: 'The Letters of Paul',
    type: 'topic',
    color: '#AC2121',
    shortDesc:
      'Dives into the reliability and truth of Matthew, Mark, and Luke',
    longDesc:
      'The Synoptic Gospels (Matthew, Mark, and Luke) are 1st century accounts that describe the life and ministry of Jesus of Nazareth. Some skeptical scholars question the truthfullness of the synoptics, largely from presuppositions about the Resurrection being false. But do their claims have any merit? Are there contradictions in the Synoptic Gospels? Were they really written by Matthew, Mark, and Luke?',
    badges: [
      'topic',
      'video',
      'scholarly_article',
      'article',
      'book',
      'apologetics',
      'theology',
    ],
    links: [
      {
        platform: 'youtube',
        url: 'https://youtube.com/playlist?list=PL1mr9ZTZb3TUDsgjzdyFz8f38YxV3QdX0&si=Cu7ZH5MqbqOr2LbV',
        displayText: 'InspiringPhilosophy - The Reliability of the Gospels',
      },
    ],
  },
  {
    _id: 'christophanies',
    name: 'Christophanies',
    type: 'topic',
    shortDesc:
      'Dives into the reliability and truth of Matthew, Mark, and Luke',
    longDesc:
      'The Synoptic Gospels (Matthew, Mark, and Luke) are 1st century accounts that describe the life and ministry of Jesus of Nazareth. Some skeptical scholars question the truthfullness of the synoptics, largely from presuppositions about the Resurrection being false. But do their claims have any merit? Are there contradictions in the Synoptic Gospels? Were they really written by Matthew, Mark, and Luke?',
    badges: [
      'topic',
      'video',
      'scholarly_article',
      'article',
      'book',
      'apologetics',
      'theology',
    ],
    categories: ['God'],
    links: [
      {
        platform: 'youtube',
        url: 'https://youtube.com/playlist?list=PL1mr9ZTZb3TUDsgjzdyFz8f38YxV3QdX0&si=Cu7ZH5MqbqOr2LbV',
        displayText: 'InspiringPhilosophy - The Reliability of the Gospels',
      },
    ],
  },
  {
    _id: 'trinity',
    name: 'The Trinity',
    type: 'topic',
    color: '#A9A247',
    shortDesc:
      'The Trinity is the true God in the form of three, co-equal persons.',
    longDesc:
      'The Trinity is the true God in the form of three, co-equal persons: the Father, the Son, and the Holy Spirit. It cannot be explained by human metaphors or worldly aspects, and each person of the Trinity is eternal, 100% God, and have different functions in the Bible. But, what exactly is the Trinity? Is it possible to wrap our heads around the nature of God?',
    badges: ['topic', 'theology', 'apologetics'],
    links: [
      {
        platform: 'youtube',
        url: 'https://youtube.com/playlist?list=PL1mr9ZTZb3TUDsgjzdyFz8f38YxV3QdX0&si=Cu7ZH5MqbqOr2LbV',
        displayText: 'InspiringPhilosophy - The Reliability of the Gospels',
      },
    ],
    categories: ['theology_intro', 'God'],
  },
  {
    _id: 'ot',
    name: 'The Old Testament',
    type: 'topic',
    color: '#AB9266',
    shortDesc: '...',
    longDesc: '...',
    badges: ['topic', 'theology', 'apologetics', 'commentary'],
    links: [
      {
        platform: 'youtube',
        url: 'placeholder',
        displayText: 'placeholder',
      },
    ],
  },
  {
    _id: 'nt',
    name: 'The New Testament',
    type: 'topic',
    color: '#39ded0',
    shortDesc:
      'Follows the life, ministry, death, and resurrection of Jesus in addition to the early Church.',
    longDesc:
      'The New Testament is best known for the Gospels, which include the good news that Jesus is risen! However, there are many other books in the New Testament too that take place after the ascension of Jesus to heaven. The New Testament follows the journey of the early church, beginning with the book of the Acts of the Apostles and ending with The Revelation of the end of the world.',
    badges: ['topic', 'theology', 'apologetics', 'commentary'],
    links: [
      {
        platform: 'youtube',
        url: 'placeholder',
        displayText: 'placeholder',
      },
    ],
  },
];

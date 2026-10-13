export default [
  {
    _id: 'genesis',
    title: 'Genesis',
    pageType: 'bibleBook',
  },
  {
    _id: 'acts',
    title: 'Book of Acts',
    longTitle: 'The Acts of the Apostles',
    pageType: 'bibleBook',
    color: '#ec3636',
    shortDesc:
      'Recounts the early church immediately following the resurrection of Jesus Christ.',
    longDesc:
      'In the Acts of the Apostles (commonly shortened to "Acts"), Luke gives a detailed account of the early church immediately following the death and resurrection of Jesus Christ. He writes about the spread of Christianity and highlights Saul of Tarsus\'s conversion to Christianity following a supernatural encounter with the risen Christ on the road to Damascus.\n\nThis page houses commentary for select topics of the book, in addition to general Bible commentary ministries and platforms that write about Acts.',
    rows: [],
    related: ['gospels', 'pentecost', 'paul', 'peter'],
  },
  {
    _id: 'daniel',
    title: 'Daniel',
    longTitle: 'The Book of Daniel',
    pageType: 'bibleBook',
    color: '#db9036',
    shortDesc: "Recounts stories about Daniel's faithfulness and prophecies.",
    longDesc:
      "The Book of Daniel (written by Daniel) follows his story as a Jewish exile living in Babylon. Daniel's faithfulness to God shines through, proving that Christians can be a light even in the darkest of places. The most famous story, Daniel in the lions' den, is widely known even by atheists. Aside from this, Daniel recounts his interactions with various Babylonian and Medo-Persian kings (Nebuchadnezzar II, Belshazzar, Darius the Mede, Cyrus the Great) and details end-times prophecy.",
    rows: [],
    related: ['ot', 'prophecy', 'major_prophets', 'hosea'],
  },

  // The Gospels
  {
    _id: 'matthew',
    title: 'Gospel of Matthew',
    longTitle: 'The Gospel According to Matthew',
    pageType: 'bibleBook',
    color: '#d22c2c',
    shortDesc:
      "Matthew's account of the life, death, and resurrection of Jesus Christ.",
    longDesc:
      "The Gospel of Matthew is the first of the Gospels, and is one of the three Synoptic Gospels alongside Mark and Luke. Matthew' intended audience was primarily Jewish, and as such his recounted highlights, themes, and details pertain to converting the Israelites to Christianity ().\n\nThis page houses various resources with commentary on Matthew, highlights specific topics of discussion within the book, and aims to answer any objections raised about the legitimacy and historicity of Matthew's Gospel.",
    rows: [],
    tags: ['commentary_matthew', 'gospels'],
    related: ['gospels', 'gospel', 'Jesus', 'Jesus_resurrection'],
  },
  {
    _id: 'mark',
    title: 'Gospel of Mark',
    longTtitle: 'The Gospel According to Mark',
    pageType: 'bibleBook',
    color: '#d22c2c',
    shortDesc:
      "Mark's account of the life, death, and resurrection of Jesus Christ.",
    longDesc:
      "The Gospel of Mark is the second of the Gospels, and is one of the three Synoptic Gospels alongside Matthew and Luke. Mark'\s Gospel is traditionally attributed as the first written Gospel account out of the four, at around 50-70 A.D. In it, Mark gives a detailed account of the life, ministry, death, and resurrection of Jesus Christ, beginning with the story of John the Baptist. Mark is thought to have had a primarily gentile audience, as evidenced by his explaining of Jewish customs.\n\nThis page houses various resources with commentary on Mark, highlights specific topics of discussion within the book, and aims to answer any objections raised about the legitimacy and historicity of Mark's Gospel.",
    rows: [],
    tags: ['commentary_mark', 'gospels'],
    related: ['gospels', 'gospel', 'Jesus', 'Jesus_resurrection'],
  },
  {
    _id: 'luke',
    title: 'Gospel of Luke',
    longTitle: 'The Gospel According to Luke',
    pageType: 'bibleBook',
    color: '#d22c2c',
    shortDesc:
      "Luke's account of the life, death, and resurrection of Jesus Christ.",
    longDesc:
      'The Gospel of Luke is the third of the Gospels, and is one of the three Synoptic Gospels alongside Matthew and Mark. Luke, as a physician and historian, has a precise and distinct writing style, and his Gospel account was written to "most excellent Theophilus", who is attributed as being a single individual. Nevertheless, his account recounts the life, ministry, death, and resurrection of Jesus Christ. Luke is also the author of Acts, wherein he expands upon the story of the early church.\n\nThis page houses various resources with commentary on Luke, highlights specific topics of discussion within the book, and aims to answer any objections raised about the legitimacy and historicity of Luke\'s Gospel.',
    rows: [],
    tags: ['commentary_luke', 'gospels'],
    related: ['gospels', 'acts', 'Jesus', 'Jesus_resurrection'],
  },
  {
    _id: 'john',
    title: 'Gospel of John',
    longTitle: 'The Gospel According to John',
    pageType: 'bibleBook',
    color: '#d22c2c',
    shortDesc:
      "John's account of the life, death, and resurrection of Jesus Christ.",
    longDesc:
      'The Gospel of John is the fourth of the Gospels, and is likely the last Gospel written. John\'s Gospel differentiates between the Synoptic Gospels (Matthew, Mark, and Luke) with a more theological angle, opening by describing Jesus as the Word of God. John was a disciple of Jesus Christ and identifies himself as "the disciple who Jesus loved". His account describes the life, ministry, death, and resurrection of Jesus.\n\nThis page houses various resources with commentary on John, highlights specific topics of discussion within the book, and aims to answer any objections raised about the legitimacy and historicity of John\'s Gospel.',
    rows: [],
    tags: ['commentary_john', 'gospels'],
    related: ['gospels', 'gospel', 'Jesus', 'Jesus_resurrection'],
  },

  {
    _id: 'revelation',
    title: 'Revelation',
    longTitle: 'The Revelation of John',
    pageType: 'bibleBook',
    color: '#83a952',
    shortDesc: "John's end-times vision given by Christ.",
    longDesc:
      "The Book of Revelation reveals John's vision of Christ while in exile on the island of Patmos. Jesus gives instructions to seven churches, but more famously details the end-times (or eschatology). The book is understandably a difficult read for many people, with many interpretations existing surrounding the final events of Judgement.\n\nBut what are these different views? How can we understand the Revelation? I've gathered resources here to answer any questions you may have around this difficult book.",
    rows: [],
    related: ['nt', 'judgement', 'end_times'],
  },
  // {
  //   _id: '',
  //   title: '',
  //   pageType: 'bibleBook',
  //   color: '#',
  //   shortDesc: '',
  //   longDesc: '',
  //   rows: [],
  //   related: ['gospels'],
  // },
];

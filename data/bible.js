export default [
  {
    _id: 'ot',
    title: 'The Old Testament',
    pageType: 'topic',
    color: '#ab9266',
    shortDesc:
      'Describes the story of humanity and Israel prior to the birth of Jesus.',
    longDesc:
      "The Old Testament makes up 82% of the Bible. It begins with the Book of Genesis, which describes how God created the universe and humanity. The Old Testament follows the story of Israel, first through Abraham, who was blessed by the Lord as the father of nations. The Old Testament follows the Israelites as God's chosen people who live under the Mosaic Law. God sends judges, prophets, and other nations to judge, prophecy, and punish Israel for unrepentance and sin, and a cycle emerges of sin, exile, repentance, and restoration.\n\nJesus and His mission is consistently prophecied in the Old Testament through prophets like Daniel and Isaiah. The last book of the Old Testament was written 400 years before the birth of Jesus, and this in-between is known as the 400 Year Silence.\n\nBut, what exactly does the Old Testament teach us about God, humanity, and Israel? Is the narration reliable? What are the different interpretations of recorded events? This page is intended to give a more high-level overview of Old Testament debates, theology, and storylines, but houses many sub-topics that dive into greater detail.",
    rows: [
      {
        _id: 'row1',
        type: 'list',
        content: [
          {
            _id: 'ot_overview',
            name: 'Overview',
            links: [],
          },
          {
            _id: 'major_prophets',
            name: 'Major Prophets',
            links: ['daniel', 'jeremiah', 'lamentations', 'ezekiel', 'isaiah'],
          },
          {
            _id: 'ot_apologetics',
            name: 'High-Level Apologetics',
            links: [],
          },
          {
            _id: 'ot_sections',
            name: 'Commentary by Section',
            links: [
              'pentateuch',
              'history',
              'wisdom',
              'major_prophets',
              'minor_prophets',
            ],
          },
        ],
      },
      {
        _id: 'ot_popular_topics',
        type: 'card',
        name: 'Popular Topics',
        content: ['creation', 'exodus', 'genesis', 'isaiah'],
      },
      {
        _id: 'mosaic_law',
        name: 'The Mosaic Law',
        type: 'card',
        content: ['mosaic_law', 'exodus', 'leviticus', 'deuteronomy'],
      },
      {
        _id: 'ot_debates',
        name: 'Common Old Testament Debates',
        type: 'card',
        content: [
          'yec_v_oec',
          'local_v_global_flood',
          'mosaic_law',
          'conquest_of_caanan',
        ],
      },
      {
        _id: 'ot_scholars',
        name: 'Old Testament Scholars',
        type: 'card',
        content: [
          'gregory_beale',
          'michael_heiser',
          'david_gunn',
          'william_dever',
        ], // TODO: These are all placeholders. I don't know much about each scholar aside from passing references
      },
    ],
    sub: [
      'creation',
      'flood',
      'abraham',
      'exodus',
      'major_prophets',
      'minor_prophets',
      'judges',
    ],
  },
  {
    _id: 'nt',
    title: 'The New Testament',
    pageType: 'topic',
    color: '#ab9266',
    shortDesc:
      '27 Books of the Bible focusing on the life, death, and resurrection of Jesus Christ.',
    longDesc:
      'The New Testament focuses on the life, ministry, death, and resurrection of Jesus Christ. All four Gospel accounts are within the New Testament, alongside the epistles from the apostles such as Peter and James. Much of the New Testament was written by the apostle Paul, who experienced the risen Christ after a life persecuting the early church. The New Testament contains his letters to various churches around the Middle East, Africa, and Europe. The New Testament ends with the Revelation of John, describing the end-times judgement and return of Christ.\n\nBut, is the New Testament reliable? Can we trust the epistles were actually written by the apostles? This page is intended to provide a more high-level overview of the New Testament, including commentary, some apologetics, and theological information. This contains many sub-topics, which contain additional details about the specific sections and books of the New Testament.',
    rows: [
      {
        _id: 'row1',
        type: 'list',
        content: [
          {
            _id: 'nt_overview',
            name: 'Overview',
            links: [],
          },
          {
            _id: 'epistles',
            name: 'The Epistles',
            links: [
              'hebrews',
              'james',
              '1_peter',
              '2_peter',
              '1_john',
              '2_john',
              '3_john',
              'jude',
            ],
          },
          {
            _id: 'nt_apologetics',
            name: 'High-Level Apologetics',
            links: [],
          },
          {
            _id: '',
          },
        ],
      },
      {
        _id: 'ot_popular_topics',
        type: 'card',
        name: 'Popular Topics',
        content: [
          'Jesus_resurrection',
          'pauline_letters',
          'revelation',
          'gospels',
        ],
      },
      {
        _id: 'nt_sections',
        name: 'Sections of the New Testament',
        type: 'card',
        content: [
          'gospels',
          'acts',
          'pauline_letters',
          'epistles',
          'revelation',
        ],
      },
      {
        _id: 'nt_debates',
        name: 'Common New Testament Debates',
        type: 'card',
        content: [
          'lost_gospels',
          'Jesus_dual_nature',
          'eucharist',
          'Jesus_resurrection',
        ],
      },
      {
        _id: 'nt_scholars',
        name: 'New Testament Scholars',
        type: 'card',
        content: ['wes_huff', 'nt_wright', 'bart_ehrman', 'richard_bauckham'],
      },
    ],
    sub: [
      'creation',
      'flood',
      'abraham',
      'exodus',
      'major_prophets',
      'minor_prophets',
      'judges',
    ],
  },

  {
    _id: 'acts',
    title: 'The Acts of the Apostles',
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
    pageType: 'bibleBook',
    color: '#db9036',
    shortDesc: "Recounts stories about Daniel's faithfulness and prophecies.",
    longDesc:
      "The Book of Daniel (written by Daniel) follows his story as a Jewish exile living in Babylon. Daniel's faithfulness to God shines through, proving that Christians can be a light even in the darkest of places. The most famous story, Daniel in the lions' den, is widely known even by atheists. Aside from this, Daniel recounts his interactions with various Babylonian and Medo-Persian kings (Nebuchadnezzar II, Belshazzar, Darius the Mede, Cyrus the Great) and details end-times prophecy.",
    rows: [],
    related: ['ot', 'prophecy', 'major_prophets', 'hosea'],
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

// {
//   _id: '',
//   title: '',
//   pageType: 'bibleBook',
//   color: '#',
//   shortDesc:
//     '',
//   longDesc:
//     '',
//   rows: [],
//   related: ['gospels'],
// },

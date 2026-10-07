export default [
  {
    _id: 'Jesus',
    title: 'Jesus Christ',
    pageType: 'topic',
    color: '#FDB913',
    shortDesc:
      'Discusses Jesus Christ, the Son and second person of the Trinity.',
    longDesc:
      "Jesus of Nazareth is the most consequential figure in history. He has been called many things by many people, but to Christians He is the risen Christ, the Messiah, who came to judge the living and the dead. Jesus Christ died, was buried, and rose again on the third day to forgive our sins and reconcile us to the Father. But, is the Christian perspective correct? Who is Jesus?\n\nIn this page, I've compiled some resources to answer your theological questions about Christ, in addition to some other apologetics resources about His life.",
    rows: [
      {
        _id: 'row1',
        type: 'list',
        content: [
          {
            _id: 'Jesus_dual_nature',
            name: 'The Dual Nature of Jesus',
            type: 'theology',
            shortDesc: 'Explores Jesus as being both fully God and fully Man.',
            links: [], // Links here are compiled during runtime
          },
          {
            _id: 'Jesus_ministry',
            name: "Jesus' Ministry",
            type: 'topic',
            links: [],
          },
          {
            _id: 'Jesus_birth',
            name: "Jesus' Birth",
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
              'Jesus loved teaching in the form of stories that contain theological meaning.',
            links: [],
          },
        ],
      },
    ],
    sub: ['Jesus_resurrection', 'christophanies', 'crucifixion', 'atonement'],
    tags: ['God', 'Jesus'],
    related: ['trinity', 'acts', 'gospel', 'revelation'],
  },

  {
    _id: 'Jesus_resurrection',
    title: 'The Resurrection of Jesus Christ',
    pageType: 'topic',
    color: '#d4d4d4',
    shortDesc:
      'Explores the historical and theological resurrection of Jesus Christ',
    longDesc:
      "The resurrection of Jesus Christ is the most consequential event in human history. It is the single historic event that Christianity's credibility is dependent on (1 Corinthians 15:14). For many, this one event is a stumbling block to accepting Christ as Lord, while others have grown up believing this event.\n\nBut, what is the evidence for the resurrection of Christ? Are there alternative theories about the beginnings of Christianity? Resources in this page include discussing the theology behind the resurrection in addition to apologetics resources regarding evidence of the resurrection.",
    rows: [],
    tags: ['God', 'Jesus'],
    related: ['Jesus', 'crucifixion', 'atonement'],
  },

  {
    _id: 'crucifixion',
    title: 'The Crucifixion of Jesus Christ',
    pageType: 'topic',
    color: '#7a7a7a', // TODO: Maybe the color here could be some sort of "highlight" color in each page for differentiation?
    shortDesc: 'Discusses the brutal death of Christ on the cross.',
    longDesc:
      "The death of Jesus Christ by crucifixion is one of the most sure facts of history. Nearly every scholar, be skeptic or Christian, acknowledges the historical accuracy of this event. Christians believe this death was the crux of God's ultimate plan for the salvation of the world.\n\nBut, did Jesus really die this way? What evidence is there for this event? This page houses resources to answer your questions about the death of Jesus Christ.",
    rows: [],
    tags: ['Jesus', 'atonement'],
    related: ['Jesus', 'atonement', 'crucifixion', 'Jesus_resurrection'],
  },

  {
    _id: 'christophanies',
    title: 'Christophanies',
    pageType: 'topic',
    color: '#e88cc7',
    shortDesc: 'Discusses manifestations of Jesus Christ in the Old Testament.',
    longDesc:
      'Given the nature of Jesus as being God, scholars and Christians have sought to answer whether or not Jesus revealed Himself to figures in the Old Testament. These manifestations of Jesus are called "Christophanies". Examples may include the "angel of the Lord" and the burning bush that Moses talked to.',
    rows: [],
    related: ['Jesus', 'ot'],
  },

  {
    _id: 'atonement',
    title: 'The Atonement',
    pageType: 'topic',
    color: '#45d5f5',
    shortDesc:
      "There are various theories which explain what was accomplished during Jesus's death and resurrection.",
    longDesc:
      'The impact of the death and resurrection of Jesus Christ for the forgiveness of sins has various interpretations by scholars. These atonement theories do not necessarily contradict each other.\n\nPenal Substitutionary Atonement (PSA) is the most popular atonement theory in the United States, while some such as Christus Victor, Ransom Theory, and Recapitulation are other interpretations of the atoning work of Christ.\n\nBut, what do these atonement theories mean? How are they different? Are they all correct? This page houses resources about each mainstream atonement theory and discusses differences among them.',
    rows: [],
    related: ['Jesus', 'crucifixion'],
  },

  {
    _id: 'trinity',
    title: 'The Trinity',
    pageType: 'topic',
    color: '#fdb913',
    shortDesc: 'Discusses God as one being in three persons.',
    longDesc:
      'Christians have historically believed that God was triune-or one being in three persons; The Father, the Son (Jesus Christ) and the Holy Spirit. For some, this seeming logical contradiction has been a stumbling block in faith. Many false teachings about the Trinity can be made very easily, such as Modalism, Arianism, and Partialism.\n\nBut, how can we comprehend the Trinity? What does it mean for our faith? Did God actually reveal Himself as three distinct persons in Scripture? This page contains a comprehensive list of resources to help you understand this complex topic.',
    rows: [],
    sub: ['Jesus', 'God_Father', 'Holy_Spirit', 'Christophanies'],
    related: ['God', 'pauline_letters', 'john'],
  },

  {
    _id: 'gospel',
    title: 'The Gospel',
    pageType: 'topic',
    color: '#ff9839',
    shortDesc:
      'Jesus Christ died and was resurrected for the forgiveness of our sins.',
    longDesc:
      'The word "Gospel" literally means "Good News". It is the news that Jesus Christ died and was resurrected for the forgiveness of our sins. He is risen!\n\nBut wait, what exactly is the Gospel? This page is dedicated to the theology of the Gospel. If you wish to find resources regarding the Gospel books (Matthew, Mark, Luke, John), search "Gospels" above. This page has some resources relating to these books, but focuses on the Gospel message itself.',
    rows: [],
    related: ['gospels', 'atonement', 'crucifixion', 'Jesus'],
  },

  {
    _id: 'mosaic_law',
    title: 'The Mosaic Law',
    pageType: 'topic',
    color: '#a1a1a1',
    shortDesc: 'The commandments and laws that governed ancient Israel.',
    longDesc:
      'The Law was given to Isreal by God to help them shine above all the other nations. It was seen as a judicial code of precedents and laws which were enacted to reveal the brokenness of humanity.\n\nBut, were these laws unjust as some allege? Were they even helpful? This page dives into the purpose, theology, and imperfection of the Law and how Christ fulfilled it.',
    rows: [],
    related: ['moses', 'exodus', 'leviticus', 'deuteronomy'],
  },

  {
    _id: 'gospels',
    title: 'The Gospels',
    pageType: 'topic',
    color: '',
    shortDesc:
      'The Gospels describe the life, ministry, death, and resurrection of Jesus Christ',
    longDesc:
      'The Gospels (Matthew, Mark, Luke, and John) are four books in the New Testament that illustrate the life, ministry, death, and resurrection of Jesus Christ. Each author wrote to specific audiences and contexts, and thus each Gospel contains unique stories about Jesus not found in the others.\n\nThe Gospels are a common target of skeptical scholars and individuals, as discrediting the Gospels strikes at the core of Christian doctrine and faith. But are they right? Are the Gospels a-historic and not representative of the real events of Jesus? Did the claimed authors even write them?\n\nThis page contains primarily apologetics content relating to the truth of the Gospel accounts. Here, you will find resources about the historicity of the Gospels, defenses of their credibility, and a deeper look at their theology. If you wish to learn more about the Gospel message itself, please check out Solomon\'s page entitled "The Gospel" for more information.',
    rows: [
      {
        _id: 'row1',
        type: 'list',
        content: [
          {
            _id: 'gospels_intro',
            name: 'What are the Gospels?',
            type: 'question',
            links: [],
          },
          {
            _id: 'bibleproject_gospel_summary',
            name: 'BibleProject Gospel Summary',
            type: 'commentary',
            links: [],
          },
          {
            _id: 'gospels_accuracy',
            name: 'Historical Accuracy',
            type: 'apologetics',
            links: [],
          },
          {
            _id: 'gospels_contradictions',
            name: 'Supposed Contradictions',
            shortDesc: 'Debunks "contradictions" within the Gospel accounts',
            type: 'apologetics',
            links: [],
          },
        ],
      },
      {
        _id: 'gospel_apologists',
        title: 'Gospel Apologists',
        type: 'card',
        content: [
          'inspiringphilosophy',
          'wes_huff',
          'bible_thinker',
          'truth_unites',
        ],
      },
    ],
    related: ['bible_accuracy', 'Jesus', 'Jesus_resurrection', 'crucifixion'],
    sub: ['matthew', 'mark', 'luke', 'john'],
  },

  {
    _id: 'pauline_letters',
    title: 'The Letters of Paul',
    pageType: 'topic',
    color: '#AC2121',
    shortDesc:
      'Illustrates the 13 letters Paul wrote to various churches and Christians during his ministry.',
    longDesc:
      "Paul wrote a majority of the New Testament in the form of letters to various churches and Christians. His work was instrumental in bringing the Gospel to the Gentiles. This topic includes all of Paul's letters.",
    rows: [
      {
        _id: 'pauline_letters_churches',
        title: "Paul's Letters to the Churches",
        type: 'card',
        content: [
          'romans',
          '1_corinthians',
          '2_corinthians',
          'galatians',
          'ephesians',
          'philippians',
          'colossians',
          '1_thessalonians',
          '2_thessalonians',
        ],
      },
      {
        _id: 'pauline_letters_individuals',
        title: "Paul's Letters to Individuals",
        type: 'card',
        content: ['1_timothy', '2_timothy', 'titus', 'philemon'],
      },
    ],
  },
  {
    _id: 'ot',
    title: 'The Old Testament',
    pageType: 'bibleBook',
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
        title: 'Popular Topics',
        content: ['creation', 'exodus', 'genesis', 'isaiah'],
      },
      {
        _id: 'mosaic_law',
        title: 'The Mosaic Law',
        type: 'card',
        content: ['mosaic_law', 'exodus', 'leviticus', 'deuteronomy'],
      },
      {
        _id: 'ot_debates',
        title: 'Common Old Testament Debates',
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
        title: 'Old Testament Scholars',
        type: 'card',
        content: [
          'gregory_beale',
          'michael_heiser',
          'david_gunn',
          'william_dever',
        ], // TODO: These are all placeholders. I don't know much about each scholar aside from passing references
      },
    ],
    related: ['nt', 'gospels', 'prophecies', 'christophanies'],
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
    pageType: 'bibleBook',
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
        ],
      },
      {
        _id: 'ot_popular_topics',
        type: 'card',
        title: 'Popular Topics',
        content: [
          'Jesus_resurrection',
          'pauline_letters',
          'revelation',
          'gospels',
        ],
      },
      {
        _id: 'nt_sections',
        title: 'Sections of the New Testament',
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
        title: 'Common New Testament Debates',
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
        title: 'New Testament Scholars',
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
];

// {
//   _id: '',
//   title: '',
//   pageType: 'topic',
//   color: '#ffffff',
//   shortDesc: '',
//   longDesc: '',
//   rows: [],
// },

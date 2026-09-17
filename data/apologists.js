export default [
  {
    _id: 'william_lane_craig',
    name: 'William Lane Craig',
    type: 'person',
    color: '#00679A',
    shortDesc: 'Reformed Theologian focusing on apologetics, debates, and more',
    categories: ['theology_intro', 'deeper_apologetics'],
    badges: [
      'video',
      'website',
      'podcast',
      'apologetics',
      'theology',
      'ministry',
    ],
    links: [
      {
        platform: 'personal',
        url: 'https://www.reasonablefaith.org/william-lane-craig',
        displayText: 'reasonablefaith.org',
      },
      {
        platform: 'linktree',
        url: 'https://linktr.ee/reasonablefaith',
        displayText: 'linktree/reasonablefaith',
      },
      {
        platform: 'youtube',
        url: 'https://www.youtube.com/@drcraigvideos',
        displayText: 'youtube/drcraigvideos',
      },
      {
        platform: 'youtube',
        url: 'https://www.youtube.com/user/ReasonableFaithOrg',
        displayText: 'youtube/ReasonableFaithOrg',
      },
      {
        platform: 'x',
        url: 'https://x.com/RFupdates',
        displayText: 'x/RFupdates',
      },
      {
        platform: 'facebook',
        url: 'https://www.facebook.com/reasonablefaithorg/wall/?filter=3',
        displayText: 'facebook/reasonablefaithorg',
      },
      {
        platform: 'podcast',
        url: 'https://www.reasonablefaith.org/media/reasonable-faith-podcast',
        displayText: 'podcast/reasonable-faith-podcast',
      },
    ],
  },
  {
    _id: 'truth_unites',
    name: 'Truth Unites',
    creator: 'Gavin Ortlund',
    image: 'truth_unites.png',
    type: 'ministry',
    shortDesc:
      '\u201CPromoting Gospel Assurance Through Theological Depth\u201D',
    longDesc:
      'Gavin Ortlund (PhD, Fuller Theological Seminary) is President of Truth Unites, Visiting Professor of Historical Theology at Phoenix Seminary, and Theologian-in-Residence at Immanuel Nashville. He is also an Evangelical theologian and content creator focusing on Christian doctrine, with a particular emphasis on the historical church.\n\nHis content includes refuting particular doctrines, such as the Papacy, responding to other theologions such as C.S. Lewis and Trent Horn, and defending Evangelical and Protestant beliefs, such as Sola Scriptura. All of his content is available for free on YouTube and other podcast sites, and he also sells books online.',
    color: '#104b88',
    badges: ['video', 'podcast', 'website', 'apologetics', 'theology'],
    categories: ['theology_intro', 'deeper_apologetics'],
    api: {
      platform: 'youtube',
      queryParam: 'TruthUnites',
    },
    links: [
      {
        platform: 'youtube',
        url: 'https://www.youtube.com/@TruthUnites',
        displayText: 'youtube/truthunites',
        priority: true,
      },
      {
        platform: 'personal',
        url: 'https://truthunites.org',
        displayText: 'truthunites.org',
      },
      {
        platform: 'x',
        url: 'twitter.com/gavinortlund',
        displayText: 'x/gavinortlund',
      },
      {
        platform: 'instagram',
        url: 'instagram.com/truth.unites',
        displayText: 'instagram/truth.unites',
      },
      {
        platform: 'books',
        url: 'truthunites.org/mypublications',
        displayText: 'truthunites.org/mypublications',
      },
      {
        platform: 'spotify',
        url: 'https://open.spotify.com/show/5pwOh3BIp7rQaeZpmy8SF8',
        displayText: 'spotify',
      },
      {
        platform: 'applepodcasts',
        url: 'https://podcasts.apple.com/us/podcast/truth-unites/id1700282740',
        displayText: 'apple podcasts',
      },
      {
        platform: 'patreon',
        url: 'https://www.patreon.com/truthunites',
        displayText: 'patreon/truthunites',
      },
      {
        platform: 'donate',
        url: 'https://truthunites.org/donate/',
        displayText: 'donate',
      },
      {
        platform: 'facebook',
        url: 'facebook.com/TruthUnitesPage',
        displayText: 'facebook/TruthUnitesPage',
      },
    ],
  },
  {
    _id: 'tim_keller',
    name: 'Timothy Keller',
    type: 'person',
    shortDesc: 'American Presbyterian pastor, theologian, and apologist',
    longDesc: '',
    color: '#FF6602',
    badges: [
      'video',
      'website',
      'church',
      'apologetics',
      'theology',
      'ministry',
    ],
    categories: ['theology_intro', 'deeper_apologetics'],
    links: [
      {
        platform: 'personal',
        url: 'https://timothykeller.com/',
        displayText: 'timothykeller.com',
      },
      {
        platform: 'personal',
        url: 'https://gospelinlife.com/',
        displayText: 'sermons',
      },
    ],
  },
  {
    _id: 'lee_strobel',
    name: 'Lee Strobel',
    type: 'person',
    color: '#255088',
    shortDesc: 'Former Atheist known for writing books defending Christianity',
    longDesc:
      'Lee Strobel became convinced of the truthfullness of Christianity after diving into reserach to disprove his wife, who is Chritian. Subsequently, he became an outspoken apologist and theologian, and is known for writing books such as "The Case for Christ"',
    badges: ['website', 'book', 'apologetics'],
    categories: ['deeper_apologetics'],
    links: [
      {
        platform: 'personal',
        url: 'https://leestrobel.com/',
        displayText: 'leestrobel.com',
        priority: true,
      },
      {
        platform: 'instagram',
        url: 'https://www.instagram.com/lee_strobel/',
        displayText: 'instagram/lee_strobel',
      },
      {
        platform: 'x',
        url: 'https://x.com/LeeStrobel',
        displayText: 'x/LeeStrobel',
      },
      {
        platform: 'facebook',
        url: 'https://www.facebook.com/LeeStrobel/',
        displayText: 'facebook/LeeStrobel',
      },
      {
        platform: 'books',
        url: 'https://leestrobel.com/books',
        displayText: 'leestrobel.com/books',
      },
    ],
  },
  {
    _id: 'bible_thinker',
    name: 'BibleThinker',
    creator: 'Mike Winger',
    image: 'bible_thinker.png',
    type: 'ministry',
    color: '#F4B803',
    shortDesc: '"Think Biblically About Everything"',
    longDesc: '...',
    badges: ['video', 'podcast', 'apologetics', 'theology'],
    categories: ['theology_intro'],
    api: {
      platform: 'youtube',
      queryParam: 'MikeWinger',
    },
    links: [
      {
        platform: 'personal',
        url: 'https://biblethinker.org/',
        displayText: 'biblethinker.org',
      },
      {
        platform: 'facebook',
        url: 'https://www.facebook.com/MikeWingerBibleThinker',
        displayText: 'facebook/MikeWingerBibleThinker',
      },
      {
        platform: 'x',
        url: 'https://x.com/mikewingerii',
        displayText: 'x/mikewingerii',
      },
      {
        platform: 'youtube',
        url: 'https://www.youtube.com/channel/UC7u2HaYBKDaLPcWmldxgGEA',
        displayText: 'youtube/MikeWinger',
        priority: true,
      },
    ],
  },
];

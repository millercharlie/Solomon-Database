import { categoryType, pageType } from '../src/enums';

const categories: Record<
  pageType,
  { _id: string; pretty: string; shortDesc?: string; type: categoryType }[]
> = {
  [pageType.dashboard]: [
    {
      _id: 'theology_intro',
      pretty: 'Introduction to Theology',
      type: categoryType.card,
    },
    {
      _id: 'high_level_commentary',
      pretty: 'High-Level Bible Commentary',
      type: categoryType.card,
    },
    {
      _id: 'deeper_apologetics',
      pretty: 'Deeper Apologetics',
      type: categoryType.card,
    },
    {
      _id: 'topics_new_believers',
      pretty: 'Topics for New Believers',
      type: categoryType.card,
    },
    {
      _id: 'common_questions',
      pretty: 'Common Questions',
      type: categoryType.card,
    },
  ],
  [pageType.theology]: [
    {
      _id: 'topics_popular',
      pretty: 'Popular Topics',
      type: categoryType.list,
    },
    {
      _id: 'christophanies',
      pretty: 'Christophanies',
      shortDesc: 'Studies manifestations of Jesus Christ in the Old Testament.',
      type: categoryType.list,
    },
    {
      _id: 'reformation_theologians',
      pretty: 'Reformation Theologians',
      type: categoryType.list,
    },
    {
      _id: 'historic_theologians',
      pretty: 'Historic Theologians',
      type: categoryType.list,
    },
    {
      _id: 'book_recommendations',
      pretty: 'Book Recommendations',
      type: categoryType.list,
    },
    {
      _id: 'creation',
      pretty: 'Creation',
      type: categoryType.list,
    },
    {
      _id: 'podcasts',
      pretty: 'Podcasts',
      type: categoryType.list,
    },
    {
      _id: 'theology_intro',
      pretty: 'Introduction to Theology',
      type: categoryType.card,
    },
    {
      _id: 'God',
      pretty: 'Who is God?',
      type: categoryType.card,
    },
    {
      _id: 'church_fathers',
      pretty: 'The Church Fathers',
      type: categoryType.card,
    },
  ],
  apologetics: [
    {
      _id: 'apologetics_popular',
      pretty: 'Popular Topics',
      type: categoryType.list,
    },
    {
      _id: 'apologetics_overview',
      pretty: 'High-Level Apologetics',
      type: categoryType.list,
    },
    {
      _id: 'apologetics_pentateuch',
      pretty: 'The Pentateuch',
      shortDesc: 'Discusses the truthfulness of the Pentateuch',
      type: categoryType.list,
    },
    {
      _id: 'apologetics_gospels',
      pretty: 'The Gospels',
      shortDesc: 'Defending the reliability of the Gospels',
      type: categoryType.list,
    },
    {
      _id: 'apologetics_podcast',
      pretty: 'Podcasts',
      type: categoryType.list,
    },
    {
      _id: 'apologetics_online',
      pretty: 'Online Apologetics',
      type: categoryType.card,
    },
    {
      _id: 'early_christian_apologists',
      pretty: 'Early Christian Apologists',
      type: categoryType.card,
    },
  ],
  [pageType.commentary]: [
    {
      _id: 'verse_by_verse_commentary',
      pretty: 'Verse by Verse Commentary',
      type: categoryType.list,
    },
    {
      _id: 'ot_common_topics',
      pretty: 'Common Topics',
      type: categoryType.list,
    },
    {
      _id: 'commentary_genesis',
      pretty: 'Genesis',
      type: categoryType.list,
    },
    {
      _id: 'commentary_exodus',
      pretty: 'Exodus',
      type: categoryType.list,
    },
    {
      _id: 'commentary_leviticus',
      pretty: 'Leviticus',
      type: categoryType.list,
    },
    {
      _id: 'commentary_numbers',
      pretty: 'Numbers',
      type: categoryType.list,
    },
    {
      _id: 'commentary_deuteronomy',
      pretty: 'Deuteronomy',
      type: categoryType.list,
    },
    {
      _id: 'commentary_joshua',
      pretty: 'Joshua',
      type: categoryType.list,
    },
    {
      _id: 'commentary_judges',
      pretty: 'Judges',
      type: categoryType.list,
    },
    {
      _id: 'commentary_ruth',
      pretty: 'Ruth',
      type: categoryType.list,
    },
    {
      _id: 'commentary_1_samuel',
      pretty: '1 Samuel',
      type: categoryType.list,
    },
    {
      _id: 'commentary_2_samuel',
      pretty: '2 Samuel',
      type: categoryType.list,
    },
    {
      _id: 'commentary_1_kings',
      pretty: '1 Kings',
      type: categoryType.list,
    },
    {
      _id: 'commentary_2_kings',
      pretty: '2 Kings',
      type: categoryType.list,
    },
    {
      _id: 'commentary_1_chronicles',
      pretty: '1 Chronicles',
      type: categoryType.list,
    },
    {
      _id: 'commentary_2_chronicles',
      pretty: '2 Chronicles',
      type: categoryType.list,
    },
    {
      _id: 'commentary_ezra',
      pretty: 'Ezra',
      type: categoryType.list,
    },
    {
      _id: 'commentary_nehemiah',
      pretty: 'Nehemiah',
      type: categoryType.list,
    },
    {
      _id: 'commentary_esther',
      pretty: 'Esther',
      type: categoryType.list,
    },
    {
      _id: 'commentary_job',
      pretty: 'Job',
      type: categoryType.list,
    },
    {
      _id: 'commentary_psalms',
      pretty: 'Psalms',
      type: categoryType.list,
    },
    {
      _id: 'commentary_proverbs',
      pretty: 'Proverbs',
      type: categoryType.list,
    },
    {
      _id: 'commentary_ecclesiastes',
      pretty: 'Ecclesiastes',
      type: categoryType.list,
    },
    {
      _id: 'commentary_song_of_solomon',
      pretty: 'Song of Solomon',
      type: categoryType.list,
    },
    {
      _id: 'commentary_isaiah',
      pretty: 'Isaiah',
      type: categoryType.list,
    },
    {
      _id: 'commentary_jeremiah',
      pretty: 'Jeremiah',
      type: categoryType.list,
    },
    {
      _id: 'commentary_lamentations',
      pretty: 'Lamentations',
      type: categoryType.list,
    },
    {
      _id: 'commentary_ezekiel',
      pretty: 'Ezekiel',
      type: categoryType.list,
    },
    {
      _id: 'commentary_daniel',
      pretty: 'Daniel',
      type: categoryType.list,
    },
    {
      _id: 'commentary_hosea',
      pretty: 'Hosea',
      type: categoryType.list,
    },
    {
      _id: 'commentary_joel',
      pretty: 'Joel',
      type: categoryType.list,
    },
    {
      _id: 'commentary_amos',
      pretty: 'Amos',
      type: categoryType.list,
    },
    {
      _id: 'commentary_obadiah',
      pretty: 'Obadiah',
      type: categoryType.list,
    },
    {
      _id: 'commentary_jonah',
      pretty: 'Jonah',
      type: categoryType.list,
    },
    {
      _id: 'commentary_micah',
      pretty: 'Micah',
      type: categoryType.list,
    },
    {
      _id: 'commentary_nahum',
      pretty: 'Nahum',
      type: categoryType.list,
    },
    {
      _id: 'commentary_habakkuk',
      pretty: 'Habakkuk',
      type: categoryType.list,
    },
    {
      _id: 'commentary_zephaniah',
      pretty: 'Zephaniah',
      type: categoryType.list,
    },
    {
      _id: 'commentary_haggai',
      pretty: 'Haggai',
      type: categoryType.list,
    },
    {
      _id: 'commentary_zechariah',
      pretty: 'Zechariah',
      type: categoryType.list,
    },
    {
      _id: 'commentary_malachi',
      pretty: 'Malachi',
      type: categoryType.list,
    },
    {
      _id: 'commentary_matthew',
      pretty: 'Gospel of Matthew',
      type: categoryType.list,
    },
    {
      _id: 'commentary_mark',
      pretty: 'Gospel of Mark',
      type: categoryType.list,
    },
    {
      _id: 'commentary_luke',
      pretty: 'Gospel of Luke',
      type: categoryType.list,
    },
    {
      _id: 'commentary_john',
      pretty: 'Gospel of John',
      type: categoryType.list,
    },
    {
      _id: 'commentary_acts',
      pretty: 'Acts of the Apostles',
      type: categoryType.list,
    },
    {
      _id: 'commentary_romans',
      pretty: 'Romans',
      type: categoryType.list,
    },
    {
      _id: 'commentary_1_corinthians',
      pretty: '1 Corinthians',
      type: categoryType.list,
    },
    {
      _id: 'commentary_2_corinthians',
      pretty: '2 Corinthians',
      type: categoryType.list,
    },
    {
      _id: 'commentary_galatians',
      pretty: 'Galatians',
      type: categoryType.list,
    },
    {
      _id: 'commentary_ephesians',
      pretty: 'Ephesians',
      type: categoryType.list,
    },
    {
      _id: 'commentary_philippians',
      pretty: 'Philippians',
      type: categoryType.list,
    },
    {
      _id: 'commentary_colossians',
      pretty: 'Colossians',
      type: categoryType.list,
    },
    {
      _id: 'commentary_1_thessalonians',
      pretty: '1 Thessalonians',
      type: categoryType.list,
    },
    {
      _id: 'commentary_2_thessalonians',
      pretty: '2 Thessalonians',
      type: categoryType.list,
    },
    {
      _id: 'commentary_1_timoty',
      pretty: '1 Timothy',
      type: categoryType.list,
    },
    {
      _id: 'commentary_2_timothy',
      pretty: '2 Timothy',
      type: categoryType.list,
    },
    {
      _id: 'commentary_titus',
      pretty: 'Titus',
      type: categoryType.list,
    },
    {
      _id: 'commentary_philemon',
      pretty: 'Philemon',
      type: categoryType.list,
    },
    {
      _id: 'commentary_hebrews',
      pretty: 'Hebrews',
      type: categoryType.list,
    },
    {
      _id: 'commentary_james',
      pretty: 'James',
      type: categoryType.list,
    },
    {
      _id: 'commentary_1_peter',
      pretty: '1 Peter',
      type: categoryType.list,
    },
    {
      _id: 'commentary_2_peter',
      pretty: '2 Peter',
      type: categoryType.list,
    },
    {
      _id: 'commentary_1_john',
      pretty: '1 John',
      type: categoryType.list,
    },
    {
      _id: 'commentary_2_john',
      pretty: '2 John',
      type: categoryType.list,
    },
    {
      _id: 'commentary_3_john',
      pretty: '3 John',
      type: categoryType.list,
    },
    {
      _id: 'commentary_jude',
      pretty: 'Jude',
      type: categoryType.list,
    },
    {
      _id: 'commentary_revelation',
      pretty: 'Revelation',
      type: categoryType.list,
    },
    {
      _id: 'torah',
      pretty: 'Torah',
      type: categoryType.list,
    },
    {
      _id: 'law',
      pretty: 'The Mosaic Law',
      type: categoryType.list,
    },
    {
      _id: 'commentary_by_category',
      pretty: 'By Biblical Category',
      type: categoryType.card,
    },
    {
      _id: 'gospels',
      pretty: 'The Gospels',
      type: categoryType.card,
    },
    {
      _id: 'prophets_major',
      pretty: 'Major Prophets',
      type: categoryType.list,
    },
    {
      _id: 'prophets_minor',
      pretty: 'Minor Prophets',
      type: categoryType.list,
    },
    {
      _id: 'epistles',
      pretty: 'Epistles',
      type: categoryType.list,
    },
    {
      _id: 'Jesus_sermons',
      pretty: 'Sermons of Jesus',
      type: categoryType.list,
    },
  ],
  [pageType.topic]: [],
  [pageType.glossary]: [],
  [pageType.about]: [],
  [pageType.notfound]: [],
  [pageType.add]: [],
  [pageType.bibleBook]: [],
};

/**
 * {
      _id: '',
      pretty: ''
    },
 */

export default categories;

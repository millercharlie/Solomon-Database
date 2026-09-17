import { SidebarItem } from '../models/Pages';

export const defaultSidebar: SidebarItem[] = [
  {
    _id: 'trending_topics',
    title: 'Trending Topics',
    icon: 'fire.svg',
    content: [
      {
        url: '',
        displayText: 'The Existence of God',
        platform: 'Topic',
      },
      {
        url: '',
        displayText: 'The Prophecies of Daniel',
        platform: 'Topic',
      },
      {
        url: '',
        displayText: 'The Reliability of the Synoptic Gospels',
        platform: 'Topic',
      },
    ],
  },
  {
    _id: 'recently_added',
    title: 'Recently Added',
    icon: 'recent_clock.svg',
    content: [
      {
        url: '',
        displayText: 'Does the Bible have 40,000 Contradictions?',
        platform: 'YouTube',
      },
      {
        url: '',
        displayText: 'Adam and Eve',
        platform: 'Topic',
      },
      {
        url: '',
        displayText: 'Jesus v. Horus',
        platform: 'YouTube',
      },
    ],
  },
  {
    _id: 'daily_verse',
    title: 'Verse of the Day', // TODO: Add indicator for Bible version
    icon: 'open_book.svg',
    content: [
      {
        url: '',
        displayText:
          '“Do not be overcome by evil, but overcome evil with good” \u2013 Romans 12:21',
        platform: '',
      },
    ],
  },
  {
    _id: 'favorites',
    title: 'Favorites',
    icon: 'topic.svg',
    content: [
      {
        url: '',
        displayText: 'The Resurrection of Christ',
        platform: 'Topic',
      },
      {
        url: '',
        displayText: 'Who was Luke the Evangelist?',
        platform: 'Topic',
      },
      {
        url: '',
        displayText: 'Who was Paul the Apostle?',
        platform: 'Topic',
      },
    ],
  },
  {
    _id: 'by_church',
    title: 'By Church',
    icon: 'church.svg',
    content: [
      {
        url: '',
        displayText: 'Baptist',
        platform: '',
      },
      {
        url: '',
        displayText: 'Presbyterian',
        platform: '',
      },
      {
        url: '',
        displayText: 'Methodist/Wesleyan',
        platform: '',
      },
      {
        url: '',
        displayText: 'Non-Denominational',
        platform: '',
      },
      {
        url: '',
        displayText: 'Roman Catholic',
        platform: '',
      },
      {
        url: '',
        displayText: 'Eastern Orthodox',
        platform: '',
      },
      {
        url: '',
        displayText: 'Anabaptist',
        platform: '',
      },
      {
        url: '',
        displayText: 'Anglican',
        platform: '',
      },
    ],
  },
];

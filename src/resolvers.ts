import SolomonDao from './dao';

export function buildResolvers(db: any) {
  const dao = SolomonDao(db);

  return {
    Query: {
      // ntApologeticsTopics: () => dao.fetchNTApologeticsTopics(),
      // otApologeticsTopics: () => dao.fetchOTApologeticsTopics(),
      // ntTheologyTopics: () => dao.fetchNTTheologyTopics(),
      // otTheologyTopics: () => dao.fetchOTTheologyTopics(),
      // creators: () => dao.fetchCreators(),
      // theologians: () => dao.fetchTheologians(),
      apologists: () => dao.fetchApologists(),
      commentaries: () => dao.fetchCommentaries(),
    },
  };
}

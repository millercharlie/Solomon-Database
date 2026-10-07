import { IResource } from '../models/Resources';
import { solomonDao } from './dao';
import express, { Application, Request, Response } from 'express';
import { categoryType, pageType } from './enums';

export default function DataRoutes(app: Application) {
  const dao = solomonDao;

  const fetchAllResources = async (req: Request, res: Response) => {
    try {
      const resources = await dao.getAllResources();
      res.json(resources);
    } catch (e) {
      res.status(500).json({ error: 'Failed to fetch all resources' });
    }
  };
  const fetchResourceById = async (
    req: Request<{ id: string }>,
    res: Response
  ) => {
    try {
      const fetched = await dao.getResourceById(req.params.id);
      if (!fetched) {
        return res.status(404).json({
          error: `Failed to find resource by id: ${req.params.id}`,
        });
      }
      res.json(fetched);
    } catch (e) {
      res.status(500).json({
        error: `Failed to find resource by id: ${req.params.id}`,
      });
    }
  };
  const addNewResource = async (
    req: Request<{ resource: IResource }>,
    res: Response
  ) => {
    try {
      const data = await dao.addResource(req.body);
      console.log(data);

      res.status(201).json({
        message: 'Resource added successfully! :D',
        data,
      });
    } catch (e) {
      res.status(500).json({
        error: 'Failed to add resource.',
      });
    }
  };

  const fetchDashboard = async (req: Request, res: Response) => {
    try {
      const dashboard = await dao.getDashboard();
      res.json(dashboard);
    } catch (e) {
      res.status(500).json({ error: 'Failed to fetch dashboard page' });
    }
  };
  const fetchTheology = async (req: Request, res: Response) => {
    try {
      const theology = await dao.getTheology();
      res.json(theology);
    } catch (e) {
      res.status(500).json({ error: `Failed to fetch theology page. ${e}` });
    }
  };
  const fetchCommentary = async (req: Request, res: Response) => {
    try {
      const commentary = await dao.getCommentary();
      res.json(commentary);
    } catch (e) {
      res
        .status(500)
        .json({ error: `Failed to fetch Bible commentary page. ${e}` });
    }
  };
  const fetchGlossary = async (req: Request, res: Response) => {
    try {
      const glossary = await dao.getGlossary();
      res.json(glossary);
    } catch (e) {
      res.status(500).json({ error: `Failed to fetch glossary. ${e}` });
    }
  };

  const fetchTopic = async (req: Request, res: Response) => {
    try {
      const topicId = req.params.topicId as string; // TODO: No idea if casting will break this
      const topic = await dao.getTopic(topicId);
      res.json(topic);
    } catch (e) {
      res.status(500).json({ error: `Failed to fetch topic page. ${e}` });
    }
  };
  const fetchBibleInfo = async (req: Request, res: Response) => {
    try {
      console.log(req.params);
      const dataId = req.params.dataId as string;
      const bibleInfo = await dao.getBibleInfo(dataId);
      res.json(bibleInfo);
    } catch (e) {
      res.status(500).json({ error: `Failed to fetch Bible book. ${e}` });
    }
  };
  const fetchBibleBook = async (req: Request, res: Response) => {
    try {
      const bookId = req.params.bookId as string;
      const bibleBook = await dao.getBibleBook(bookId);
      res.json(bibleBook);
    } catch (e) {
      res.status(500).json({ error: `Failed to fetch Bible book. ${e}` });
    }
  };
  const fetchAllBibleBooks = async (req: Request, res: Response) => {
    try {
      const bible = await dao.getAllBibleBooks();
      res.json(bible);
    } catch (e) {
      res.status(500).json({ error: `Failed to fetch all Bible books. ${e}` });
    }
  };

  const fetchCategoriesByPageAndType = async (req: Request, res: Response) => {
    try {
      const pageId = req.params.pageId as pageType;
      const categoryType = req.params.categoryType as categoryType;
      const data = await dao.getCategoriesByPageAndType(pageId, categoryType);
      res.json(data);
    } catch (e) {
      res.status(500).json({
        error: `Failed to fetch categories by page and type. ${e}`,
      });
    }
  };

  const search = async (req: Request, res: Response) => {
    try {
      const results = await dao.search(req.params.query as string);
      res.json(results);
    } catch (e) {
      res.status(500).json({ error: `Search query failed. ${e}` });
    }
  };

  const youtube = async (req: Request, res: Response) => {
    try {
      const youtubeData = await dao.getYoutubeDataForCreator(
        req.params.userId as string
      );
      res.json(youtubeData);
    } catch (e) {
      res
        .status(500)
        .json({ error: `Failed to fetch YouTube data for creator. ${e}` });
    }
  };

  app.use(express.json());

  // Fetch various pages
  app.get('/api/pages/dashboard', fetchDashboard);
  app.get('/api/pages/theology', fetchTheology);
  app.get('/api/pages/commentary', fetchCommentary);
  app.get('/api/pages/glossary', fetchGlossary);

  // Retrieve resources
  app.get('/api/resources', fetchAllResources);
  app.get('/api/resource/:id', fetchResourceById);
  app.post('/api/resources', addNewResource);

  // Retrieve topics
  app.get('/api/pages/:pageId/:categoryType', fetchCategoriesByPageAndType);
  app.get('/api/topic/:topicId', fetchTopic);

  // Retrieve Bible information
  app.get('/api/bible/books', fetchAllBibleBooks);
  app.get('/api/bible/:topicId', fetchTopic);
  app.get('/api/bible/book/:bookId', fetchBibleBook);

  // Search functionality
  app.get('/api/search/:query', search);

  // External APIs
  app.get('/api/youtube/:userId', youtube);
}

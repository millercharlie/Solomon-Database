import { IResource } from '../models/Resources';
import { solomonDao } from './dao';
import express, { Application, Request, Response } from 'express';

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

  const fetchCategoriesByPageAndType = async (req: Request, res: Response) => {
    try {
      const data = await dao.getCategoriesByPageAndType(
        req.params.pageId,
        req.params.categoryType
      );
      res.json(data);
    } catch (e) {
      res.status(500).json({
        error: `Failed to fetch categories by page and type. ${e}`,
      });
    }
  };

  app.use(express.json());

  // Fetch various pages
  app.get('/api/pages/dashboard', fetchDashboard);
  app.get('/api/pages/theology', fetchTheology);
  app.get('/api/pages/glossary', fetchGlossary);

  // Retrieve resources
  app.get('/api/resources', fetchAllResources);
  app.get('/api/resource/:id', fetchResourceById);
  app.post('/api/resources', addNewResource);

  app.get('/api/pages/:pageId/:categoryType', fetchCategoriesByPageAndType);
  app.get('/api/topic/:topicId', fetchTopic);
}

import { solomonDao } from './dao';
import { Application, Request, Response } from 'express';

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
          error: `Failed to find resource by provided id: ${req.params.id}`,
        });
      }
      res.json(fetched);
    } catch (e) {
      res.status(500).json({
        error: `Failed to find resource by provided id: ${req.params.id}`,
      });
    }
  };

  app.get('/api/resources', fetchAllResources);
  app.get('/api/resources/:id', fetchResourceById);
}

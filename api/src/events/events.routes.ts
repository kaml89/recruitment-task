import { CommonRoutesConfig } from '../common/common.routes.config';
import EventsController from './events.controller';
import { body } from 'express-validator';
import BodyValidationMiddleware from '../common/body.validation.middleware';
import EventsMiddleware from './events.middleware';

import express from 'express';

export class EventsRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'EventsRoutes');
  }

  configureRoutes(): express.Application {
    this.app
      .route(`/events`)
        .get(EventsController.getEvents)
        .post(
          body('firstName').isString(),
          body('lastName').isString(),
          body('email').isEmail().withMessage('Must be valid email'),
          body('date').isISO8601().withMessage('Must be valid date').toDate(),

          BodyValidationMiddleware.verifyBodyFieldsErrors,
          EventsMiddleware.validateDate,
          EventsController.addEvent
        );
    return this.app;
  }
}
import express from 'express';

class EventsMiddleware {
  async validateDate(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const date = new Date(req.body.date);
    const currentDate = new Date(); 
    if (date < currentDate) {
      const error = {
        value: date,
        msg: "Past dates disallowed",
        param: "date",
      }
        res.status(400).send({ errors: [error] });
    } else {
        next();
    }
  }
}

export default new EventsMiddleware();
import express from 'express';
import eventsService from './events.service';

class EventsMiddleware {
    async validateDate(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        // const date = req.body.date;
        // if (date !== 'bla') {
        //   const error = {
        //     value: date,
        //     msg: "Invalid date",
        //     param: "date",
        //   }
        //     res.status(400).send({ errors: [error] });
        // } else {
        //     next();
        // }
        next()
    }
}

export default new EventsMiddleware();
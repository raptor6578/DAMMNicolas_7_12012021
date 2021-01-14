import express from "express";

class AuthController {
    public signup(req: express.Request, res: express.Response) {
        res.send('ok');
    }
    public login(req: express.Request, res: express.Response) {
        res.send('ok');
    }
}

export default new AuthController();

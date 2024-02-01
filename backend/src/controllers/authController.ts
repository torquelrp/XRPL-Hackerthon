import { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import { registerUser } from '../services/authService';
import { User } from '@prisma/client';

export const register = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    try {
        const user = await registerUser(username, password);
        if (user) {
            res.status(200).send('User registered successfully');
        } else {
            res.status(400).send('Username already taken');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred during registration');
    }
};

export const login = (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('local', (err: any, user: Express.User, info: { message: any; }) => {
        if (err) { return next(err); }
        if (!user) { return res.status(401).send(info.message); }
        req.logIn(user, (err) => {
            if (err) { return next(err); }
            res.status(200).send('Login successful');
        });
    })(req, res, next);
};


export const logout = (req: Request, res: Response) => {
    req.logout((err) => {
        if (err) {
            return res.status(500).send('Error logging out');
        }
        res.status(200).send('Logout successful');
    });
};

export const status = (req: Request, res: Response) => {
    const user = req.user as User;
    if (req.isAuthenticated() && user && user.username) {
        res.json({ loggedIn: true, username: user.username });
    } else {
        res.json({ loggedIn: false });
    }
}
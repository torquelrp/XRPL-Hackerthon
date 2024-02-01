import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { validateUser } from './services/authService';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

passport.use(new LocalStrategy(
    async (username, password, done) => {
        try {
            const user = await validateUser(username, password);
            if (user) {
                return done(null, user);
            } else {
                return done(null, false, { message: 'Invalid username or password' });
            }
        } catch (error) {
            return done(error);
        }
    }
));

passport.serializeUser((user: any, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id: number, done) => {
    try {
        const user = await prisma.user.findUnique({ where: { id } });
        done(null, user);
    } catch (error) {
        done(error);
    }
});
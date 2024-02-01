import { PrismaClient } from '@prisma/client';
import { compare, hash } from 'bcrypt';

const prisma = new PrismaClient();

export const registerUser = async (username: string, password: string) => {
    const existingUser = await prisma.user.findUnique({ where: { username } });
    if (existingUser) {
        return null;
    }

    const hashedPassword = await hash(password, 10);
    //TODO
    //UPDATE THIS TO CORRECT CREATE
    return await prisma.user.create({ data: { username, password: hashedPassword, balance: 0, classicAddress: '' } });
};

export const validateUser = async (username: string, password: string) => {
    const user = await prisma.user.findUnique({ where: { username } });
    if (!user) return false;
    const isValid = await compare(password, user.password);
    return isValid ? user : false;
};
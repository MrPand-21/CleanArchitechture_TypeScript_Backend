import { Request } from 'express';

export type HttpUserPayload = {
    id: string,
    email: string,
    role: number
};

export type HttpRequestWithUser = Request & { user: HttpUserPayload };

export type HttpJwtPayload = {
    id: string,
};

export type HttpLoggedInUser = {
    id: string,
    accessToken: string,
};
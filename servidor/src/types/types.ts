import express from 'express';


interface Auth {
  userId: string | undefined;
}

interface AuthenticatedRequest extends express.Request {
  auth: Auth;
}

interface Response {
  json: (body: any) => void;
}



export type { Auth, AuthenticatedRequest, Response };
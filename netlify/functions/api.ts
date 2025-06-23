
import { Handler } from '@netlify/functions';
import express from 'express';
import { registerRoutes } from '../../server/routes.js';

// Create Express app
const app = express();

// Refactor register routes to handle asynchronously
async function initApp() {
  await registerRoutes(app);
}

initApp().catch(err => {
  console.error('Error initializing app:', err);
});

// Netlify function handler
export const handler: Handler = async (event, context) => {
  // Create a mock response object for Express
  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS'
    },
    body: ''
  };

  return new Promise((resolve) => {
    // Create mock request and response objects
    const req = {
      method: event.httpMethod,
      url: event.path,
      headers: event.headers,
      body: event.body,
      query: event.queryStringParameters || {},
      params: {}
    };

    const res = {
      status: (code: number) => {
        response.statusCode = code;
        return res;
      },
      json: (data: any) => {
        response.body = JSON.stringify(data);
        resolve(response);
        return res;
      },
      send: (data: any) => {
        response.body = typeof data === 'string' ? data : JSON.stringify(data);
        resolve(response);
        return res;
      },
      setHeader: (name: string, value: string) => {
        response.headers[name] = value;
        return res;
      }
    };

    // Handle the request with Express app
    try {
      app(req as any, res as any, () => {
        response.statusCode = 404;
        response.body = JSON.stringify({ error: 'Not found' });
        resolve(response);
      });
    } catch (error) {
      response.statusCode = 500;
      response.body = JSON.stringify({ error: 'Internal server error' });
      resolve(response);
    }
  });
};

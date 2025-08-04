import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const response = await fetch('https://sleepingpill.javazone.no/public/allSessions/javazone_2025', {
      headers: {
        'Accept': 'application/json; charset=utf-8',
        'Content-Type': 'application/json; charset=utf-8',
        'User-Agent': 'JavaZone2025-App/1.0.0'
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch program: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    // Set proper content type and charset
    res.setHeader('Content-Type', 'application/json; charset=utf-8');

    return res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching program:', error);
    return res.status(500).json({
      error: 'Failed to fetch program data',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

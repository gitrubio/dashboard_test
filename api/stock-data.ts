import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.status(200).json({
    symbol: "AAPL",
    prices: [
      { date: "2024-03-01", price: 150.25 },
      { date: "2024-02-01", price: 148.90 }
    ]
  });
}
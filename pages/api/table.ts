import { matchSorter } from 'match-sorter';
import type { NextApiRequest, NextApiResponse } from 'next';
import tz from '../../utils/tz';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { q } = Object.freeze(req.query);
  const table = tz.table();

  if (!q) return res.status(200).json(table);

  const data = matchSorter(table, q.toString(), { keys: ['name', 'timezone'] });

  res.status(200).json(data);
}

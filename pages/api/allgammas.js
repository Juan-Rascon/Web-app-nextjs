import { NextApiRequest, NextApiResponse} from 'next';


export default function getAllGammas (req, res) {
    res.json({hello: 'world', method: req.method})
}
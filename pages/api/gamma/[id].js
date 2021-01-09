import { NextApiRequest, NextApiResponse} from 'next';


export default function getGammaById (req, res) {
    res.json({byId: req.query.id, message: "hello"})
}
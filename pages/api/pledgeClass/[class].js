import { NextApiRequest, NextApiResponse} from 'next';


export default function getGammaById (req, res) {
    res.json({byClass: req.query.class, message: "hello"})
}
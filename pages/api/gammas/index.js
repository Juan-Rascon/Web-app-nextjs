const db = require ('../../../db/models');

export default async function getAllGammas (req, res) {
    if (req.method === 'GET') {
      try {
        await db.sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
        res.json({CurrentPage: "All Gammas", method: req.method})
      
      } else {
        
      }
   
}
export default function pledgeClassHandler(req, res) {
    const {
      query: { pledgeClass},
      method,
    } = req
  
    switch (method) {
      case 'GET':
        // Get data from your database
        res.status(200).json({ pledgeClass, name: pledgeClass })
        break
      case 'PUT':
        // Update or create data in your database
        res.status(200).json({ id, name: name || pledgeClass  })
        break
      default:
        res.setHeader('Allow', ['GET', 'PUT'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
  }
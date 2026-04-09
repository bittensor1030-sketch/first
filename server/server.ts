import express = require('express')
import cors = require('cors')

const app = express()
const PORT = 3001

app.use(cors())

app.get('/api/projects', (req, res) => {
  res.json([
    {
      name: 'AI Risk Engine',
      description: 'Machine learning system for financial risk prediction',
      impact: 'Improved prediction accuracy by 25%'
    },
    {
      name: 'ESG Platform',
      description: 'Automated ESG scoring system',
      impact: 'Reduced analysis time by 60%'
    }
  ])
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
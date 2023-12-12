const express = require('express')
const cors = require('cors')
const path = require('path');
const app = express()
const port = process.env.PORT || 5000


// middleware
app.use(cors(
   
));
app.use(express());


app.get('/', (req, res) => {
    const pdfFilePath = path.join(__dirname, 'my resume.pdf');
  res.download(pdfFilePath)

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




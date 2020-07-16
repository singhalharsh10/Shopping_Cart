//In this project i have used api interface not server side renering means only data will be fetch from server ot whole HTML page
const express = require('express')
const path = require('path')

const app = express()

app.use('/', express.static(path.join(__dirname, 'public'))) //used to include public folder to prevent aap.get command




app.listen(3000, () => {
    console.log('Server has started at 3000 port')
})
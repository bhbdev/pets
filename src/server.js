const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const finale = require('finale-rest');


let app = express()
app.use(cors())
app.use(bodyParser.json())

/*let database = new Sequelize({
  dialect: 'sqlite',
  storage: './pets.sqlite'
})*/
let database = new Sequelize('pets', 'beau', null, {
  dialect: 'postgres'
})

let List = database.define('lists', {
  listid: Sequelize.INTEGER,
  active: { type: Sequelize.CHAR(1), defaultValue: '1' },
  name: Sequelize.TEXT,
  title: Sequelize.TEXT,
  description: Sequelize.TEXT,
  listgroup: Sequelize.TEXT
})

let Channel = database.define('channels', {
  channelid: Sequelize.INTEGER,
  active: { type: Sequelize.CHAR(1), defaultValue: '1' },
  name: Sequelize.TEXT,
  code: Sequelize.TEXT,
  contenttype: Sequelize.TEXT,
  description: Sequelize.TEXT,
  author: Sequelize.TEXT,
  bio: Sequelize.TEXT,
  parentid: Sequelize.INTEGER,
  listid: Sequelize.INTEGER,
  sortidx: Sequelize.INTEGER
})

let StoryAd = database.define('storyads', {
  storyid: Sequelize.INTEGER,
  channelid: Sequelize.INTEGER,
  listid: Sequelize.INTEGER,
  contenttype: Sequelize.TEXT,
  headline: Sequelize.TEXT,
  summary: Sequelize.TEXT,
  source: Sequelize.TEXT,
  storybody: Sequelize.TEXT,
  copyright: Sequelize.TEXT,
  byline: Sequelize.TEXT,
  storydate: Sequelize.DATEONLY,
  expiredate: Sequelize.DATEONLY
})

finale.initialize({
  app: app,
  sequelize: database
})


let listAPI = finale.resource({
  model: List,
  endpoints: [
    '/lists',
    '/lists/:id'
  ]
})

let channelAPI = finale.resource({
  model: Channel,
  endpoints: [
    '/channels',
    '/channels/:id'
  ]
})

let storyAdAPI = finale.resource({
  model: StoryAd,
  endpoints: [
    '/storyads',
    '/storyads/:id'
  ]
})


database
  .sync({ 
    // force: true
  })
  .then(() => {
    app.listen(8081, () => {
      console.log('listening to localhost:8081');
    })
  })
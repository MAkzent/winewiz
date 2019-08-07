const knex = require('knex')({
  client: 'pg',
  connection:
    process.env.DATABASE_URL ||
    `postgres://${process.env.USER}@127.0.0.1:5432/wine__wiz`,
  searchPath: ['knex', 'public']
})

export default knex

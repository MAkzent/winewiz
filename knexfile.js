module.exports = {
  development: {
    client: 'pg',
    connection: `postgres://${process.env.USER}@127.0.0.1:5432/wine__wiz`,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    },
    useNullAsDefault: true
  }
}

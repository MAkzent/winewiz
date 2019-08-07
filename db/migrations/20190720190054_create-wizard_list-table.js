exports.up = function(knex) {
  return knex.schema.createTable('wizard__list', function(t) {
    t.increments('id').unsigned()
    t.integer('tokenId').notNull()
    t.string('owner').notNull()
    t.string('affinity').notNull()
    t.string('power').notNull()
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('wizard__list')
}

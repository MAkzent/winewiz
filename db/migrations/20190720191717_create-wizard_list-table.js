exports.up = function(knex) {
  return knex.schema.createTable('wizard_list', function(t) {
    t.increments('id').unsigned()
    t.integer('tokenId').notNull()
    t.string('owner').notNull()
    t.string('affinity').notNull()
    t.string('power').notNull()
    t.unique(['tokenId', 'id'])
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('wizard_list')
}

exports.up = function(knex) {
  return knex.schema.dropTable('wizard__list')
}

exports.down = function(knex) {
  return knex.schema.dropTable('wizard__list')
}

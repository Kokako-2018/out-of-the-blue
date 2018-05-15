
exports.up = function(knex, Promise) {
    return knex.schema.createTable('identities', table => {
        table.increments('id')
        table.string('image1')
        table.string('title')
        table.text('header')
        table.text('blurb')
        table.text('text_extra')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('identities')
};

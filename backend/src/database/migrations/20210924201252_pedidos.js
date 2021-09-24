exports.up = function (knex) {
    return knex.schema.createTable('pedidos', (table) => {
        table.increments('id');
        table.integer('cliente_id').unsigned().notNullable();
        table.string('carne', 100).notNullable();
        table.string('pao', 100).notNullable();
        table.string('opcionais', 100).defaultTo('Sem opcionais');
        table.string('status', 100).notNullable().defaultTo('Solicitado');
        table.timestamp('createdAt').defaultTo(knex.raw('now()'));
        table.timestamp('updatedAt').defaultTo(knex.raw('now()'));

        table.foreign('cliente_id').references('id').inTable('clientes');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('pedidos');
};

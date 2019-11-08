
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { resource_name: 'Wood', resource_desc: 'Wood for building a fort', project_id: '1' },
        { resource_name: 'Saw', resource_desc: 'Saw for cutting the wood you buy', project_id: '1' },
        { resource_name: 'Screws', resource_desc: 'Screws for building the fort, 1.5in to 4in long screws need', project_id: '1' },
        { resource_name: 'Mop', resource_desc: 'To clean the kitchen', project_id: '2' },
        { resource_name: 'Vaccum', resource_desc: 'to pick up that darn dog hair ', project_id: '2' },
        { resource_name: 'Spotify', resource_desc: 'so much music', project_id: '3' },

      ]);
    });
};

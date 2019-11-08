
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { project_name: 'Build a Fort', project_desc: 'We want to use some wood to build a fort in a tree' },
        { project_name: 'Clean the floors', project_desc: 'Need to mop and vaccum the floors in the house' },
        { project_name: 'Build a playlist', project_desc: 'Build a playlist of the top 100 songs that I have heard in the last year' }
      ]);
    });
};

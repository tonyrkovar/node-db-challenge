
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { task_name: 'Plan Fort', task_desc: 'We need to plan out the design of the fort before doing anything, plan to use autoCAD', task_notes: `General dimmensions are 20'x30'`, project_id: '1' },
        { task_name: 'Buy Wood', task_desc: 'I need to get all of the wood for building this form', task_notes: 'We want to use a soft wood for the fort so it is easy to work with in large quantities.', project_id: '1' },
        { task_name: 'Cut wood', task_desc: 'Now that we have planned the fort and bought the wood it is time to get working', task_notes: 'Take this slow, measure twice cut once', project_id: '1' },
        { task_name: 'Set up mop', task_desc: 'Get the mop water ready to clean the tile/hardwood', task_notes: 'be sure to not use too much soap', project_id: '2' },
        { task_name: 'clean the carpeted floors so you can vaccum', task_desc: 'have the kids pick up toys so you can vaccum', task_notes: 'Be sure to keep an eye on them so they do not get distracted', project_id: '2' },
        { task_name: 'Filter out the bad songs', task_desc: 'You listen to a lot of music so be sure to give yourself a place to start with making this playlist', task_notes: 'do NOT get distracted', project_id: '3' },
      ]);
    });
};

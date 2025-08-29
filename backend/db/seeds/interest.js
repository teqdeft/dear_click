/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('interest').del();

  // Inserts seed entries
  await knex('interest').insert([
    { interest: "Music", status: 1 },
    { interest: "Fashion", status: 1 },
    { interest: "Games", status: 1 },
    { interest: "Pet", status: 1 },
    { interest: "Travelling", status: 1 },
    { interest: "Technology", status: 1 },
    { interest: "Beauty", status: 1 },
    { interest: "Food", status: 1 },
    { interest: "Comedy", status: 1 },
    { interest: "Skincare", status: 1 },
    { interest: "Wellness", status: 1 },
    { interest: "Bag", status: 1 },
    { interest: "Accessories", status: 1 },
    { interest: "Sports", status: 1 },
  ]);
};

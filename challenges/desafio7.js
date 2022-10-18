db.produtos.find(
  { tags: { $exists: false }, vendidos: { $not: { $eq: 50 } } },
  { nome: 1, vendidos: 1, tags: 1, _id: 0 },
);

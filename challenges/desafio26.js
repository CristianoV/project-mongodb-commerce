db.produtos.updateMany(
    {
      valoresNutricionais: {
        $elemMatch: {
          tipo: "sódio",
          percentual: { $gt: 20, $lt: 40 },
        },
      },
    },
    { $addToSet: { tags: "contém sódio" } },
  );
  
db.produtos.find({}, { _id: 0, tags: 1, nome: 1 });

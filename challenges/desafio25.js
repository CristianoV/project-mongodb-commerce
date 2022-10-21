db.produtos.updateMany(
    {
      valoresNutricionais: {
        $elemMatch: {
          tipo: "sódio",
          percentual: { $gte: 40 },
        },
      },
    },
    { $addToSet: { tags: "muito sódio" } },
  );
  
db.produtos.find({}, { _id: 0, tags: 1, nome: 1 });

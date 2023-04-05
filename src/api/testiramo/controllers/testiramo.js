/**
 * A set of functions called "actions" for 'hello'
 */
module.exports = {
  async index(ctx, next) {
    console.log("HEREEEEEE123");

    const filterWord = ctx.query.filter; // ovdje se postavlja riječ za filtriranje dinamički, prema vrijednosti parametra "filter" iz query stringa. Ako parametar ne postoji, koristi se "wat".

    const tableNames = [
      "api::beer.beer",
      "api::burger.burger",
      "api::hot-drink.hot-drink",
      "api::pizza.pizza",
      "api::rice-bowl.rice-bowl",
      "api::salad.salad",
      "api::water.water",
      "api::alcoholic-beverage.alcoholic-beverage",
      "api::bottle-service.bottle-service",
      "api::carbonated-alcoholic-beverage.carbonated-alcoholic-beverage",
      "api::natural-juices-and-freshly-squeezed-juice.natural-juices-and-freshly-squeezed-juice",
      "api::non-carbonated-carbonated-beverage.non-carbonated-carbonated-beverage",
      "api::promotion.promotion",
      "api::rakije.rakije",
      "api::sparkling-wine.sparkling-wine",
      "api::toast-and-croissant.toast-and-croissant",
      "api::desert.desert",
    ];

    const results = [];

    for (const tableName of tableNames) {
      const entries = await strapi.db.query(tableName).findMany({
        select: ["*"],
        orderBy: { publishedAt: "DESC" },
      });

      const filteredEntries = entries.filter((entry) =>
        JSON.stringify(entry).toLowerCase().includes(filterWord.toLowerCase())
      );

      results.push(...filteredEntries);
    }

    ctx.body = results;
  },
};

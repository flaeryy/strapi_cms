module.exports = {
  async find(ctx) {
    const { user } = ctx.state; // dobivanje korisničkog konteksta
    const models = Object.keys(strapi.models).map((model) => {
      return {
        collection: model,
        fields: strapi.models[model].attributes,
      };
    });
    return models;
  },
};

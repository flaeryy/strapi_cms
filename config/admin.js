module.exports = ({ env }) => ({
  // ...
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "myAdminSecret"),
      apiToken: {
        // Set the apiToken.salt variable
        salt: env("ADMIN_API_TOKEN_SALT", "mySalt"),
      },
    },
  },
});

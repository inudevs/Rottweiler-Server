const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Rottweiler',
      version: '1.0.0',
      description: 'Project manage solution for INU',
    },
    jwt: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header',
    },
  },
  apis: ['./routes*.js'],
  security: [{ jwt: [] }],
};

export default swaggerOptions;

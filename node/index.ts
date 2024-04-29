import { Service  } from '@vtex/api'


export default new Service({
  graphql: {
    resolvers: {
      Query: {
        banner: () => "Estás viendo un producto de la categoría",
      },
    },
  },
})

export const typeDefs = `#graphql
   type Product {
        id: ID!
        name: String
        image: String
        description: String
        price: Float
        quantity: Int
        onStock: Boolean
        
    }
    
  type Query {
    products: [Product]
  }
`;
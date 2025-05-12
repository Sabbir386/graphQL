import { db } from "../../db.js";

export const resolvers = {
    Query: {
        products: () => db.products
    },
};
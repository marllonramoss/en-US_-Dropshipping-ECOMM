import { GraphQLClient, gql } from "graphql-request";

// Configure o cliente GraphQL
const hygraphClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT ||
    "https://api-us-west-2.hygraph.com/v2/cm84grveb01cf07w8odh9ome1/master",
  {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_API_TOKEN || ""}`,
    },
  }
);

// Defina o tipo do produto
export type Watch = {
  model: string;
  brand: string;
  avaible: boolean; // Note que o campo está escrito "avaible" (com um "i" faltando)
  price: number;
  image: {
    url: string;
    width: number;
    height: number;
  }[];
};

// Query para buscar todos os relógios
export async function getAllWatches(): Promise<Watch[]> {
  const query = gql`
    query AllWatches {
      wristwatchs {
        model
        brand
        avaible
        price
        image {
          url
          width
          height
        }
      }
    }
  `;

  try {
    const response = await hygraphClient.request<{ wristwatchs: Watch[] }>(
      query
    );
    return response.wristwatchs; // Retorna o array de produtos
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return []; // Retorna um array vazio em caso de erro
  }
}

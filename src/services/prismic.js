import Prismic from "@prismicio/client";


export function getPrismicClient(request
) {
  const prismic = Prismic.client(process.env.PRISMIC_API_ENDPOINT, {
    request,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });

  return prismic;
}

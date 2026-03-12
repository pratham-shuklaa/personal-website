import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.coerce.date(),
      coverImage: image().optional(),
      coverAlt: z.string().optional(),
      draft: z.boolean().default(false)
    })
});

export const collections = { blog };


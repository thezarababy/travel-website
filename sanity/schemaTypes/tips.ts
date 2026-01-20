import { defineField, defineType } from "sanity";

export const tip = defineType({
  name: "tip",
  title: "Travel Tip",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "text",
    }),
    defineField({
      name: "destination",
      title: "Destination",
      type: "reference",
      to: [{ type: "destination" }],
    }),
  ],
});

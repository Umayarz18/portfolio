export default {
  name: "resourceLink",
  title: "Resource Link",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "link",
      title: "Link",
      type: "url",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validatation: Rule =>
        Rule.required()
          .min(10)
          .max(80)
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: { type: "tag" } }]
    },
  ]
};

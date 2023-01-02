export default {
  name: "codeSnippet",
  title: "Code Snippet",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      }
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
    {
      name: "body",
      title: "Body",
      type: "blockContent"
    }
  ]
};

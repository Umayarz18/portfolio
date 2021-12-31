export default {
  title: "Project",
  name: "project",
  type: "document",
  fields: [
    {
      title: "Project Title",
      name: "title",
      type: "string"
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      title: "SEO Description",
      name: "description",
      type: "text"
    },
    {
      title: "SEO Image",
      name: "image",
      type: "mainImage"
    },
    {
      title: "Project Breakdown",
      name: "projectBreakdown",
      type: "blockContent"
    },
    {
      title: "Technologies Used",
      name: "technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "tag" } }]
    },
    {
      title: "Links",
      name: "links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              title: "Link Name",
              name: "name",
              type: "string"
            },
            {
              title: "Link Source",
              name: "source",
              type: "string"
            }
          ]
        }
      ]
    }
  ]
};

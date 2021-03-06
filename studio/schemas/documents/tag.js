export default {
  name: "tag",
  title: "Tag",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      title: "Featured Tag",
      name: "isFeatured",
      type: "boolean"
    },
    {
      title: "Link",
      name: "link",
      type: "url"
    },
    {
      name: "color",
      title: "Color",
      type: "color"
    },
    {
      name: "image",
      title: "Image",
      type: "image"
    },
    {
      name: "related_posts",
      title: "related_posts",
      type: "array",
      of: [{ type: "reference", to: { type: "post" } }]
    }
  ]
};

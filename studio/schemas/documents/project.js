import React from "react";
export default {
  title: "Project",
  name: "project",
  type: "document",
  fields: [
    {
      name: "seoContent",
      title: "SEO Content",
      type: "seo"
    },
    {
      title: "Project Image",
      name: "projectImage",
      type: "mainImage"
    },
    { title: "Featured Project", name: "isFeatured", type: "boolean" },
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
          type: "link"
        }
      ]
    }
  ],
  preview: {
    select: {
      title: "seoContent.title",
      description: "seoContent.description",
      image: "projectImage"
    },
    prepare({ title, description, image }) {
      return {
        title,
        subtitle: description,
        media: image ? (
          image
        ) : (
          <span
            style={{
              fontSize: "1.5rem",
              backgroundColor: "#D0BCD5",
              width: "4rem",
              height: "4rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "1rem"
            }}
          >
            <p>🎉</p>
          </span>
        )
      };
    }
  }
};

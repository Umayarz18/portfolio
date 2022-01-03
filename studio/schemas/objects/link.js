import React from "react";
export default {
  title: "Link",
  name: "link",
  type: "object",
  fields: [
    {
      title: "Label",
      name: "label",
      type: "string"
    },
    {
      title: "Link Source",
      name: "source",
      type: "url"
    },
    {
      title: "Icon Type",
      name: "icon",
      type: "string"
    }
  ],
  preview: {
    select: {
      title: "label"
    },
    prepare({ title }) {
      return {
        title,
        media: (
          <span
            style={{
              fontSize: "1.5rem",
              backgroundColor: "#70ae6e",
              width: "4rem",
              height: "4rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "1rem"
            }}
          >
            <p>🔗</p>
          </span>
        )
      };
    }
  }
};

// SEO object schema with title, description and image
import { blogPostLayout } from "../../parts/blogPostLayout";
import { MediaEditor } from 'sanity-plugin-asset-source-ogimage';
import React from 'react';
export default {
  name: 'seo',
  type: 'object',
  title: 'SEO',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      description: 'This description populates meta-tags on the webpage',
      type: 'text',
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "seo.title",
        maxLength: 96
      }
    },
    {
      name: 'ogImage',
      title: 'Social sharing image',
      type: 'image',
      options: {
        hotspot: true,
        sources: [
          {
            name: 'sharing-image',
            title: 'Generate sharing image',
            component: (props) => (
              <MediaEditor
                // It's vital to forward props to MediaEditor
                {...props}
                // Our custom layouts
                layouts={[
                  blogPostLayout,
                ]}
                // See dialog section below
                dialog={{
                  title: 'Create sharing image',
                }}
              />
            ),
            icon: () => <div>🎨</div>,
          }]
      }
    },
  ],
};

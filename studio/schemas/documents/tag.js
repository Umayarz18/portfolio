export default {
  name: 'tag',
  title: 'Tag',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    
    {
      name: 'color',
      title: 'Color',
      type: 'color',
    },

    {
      name: "related_posts",
      title: "related_posts",
      type: 'array',
      of: [{type: 'reference', to: {type: 'post'}}],
      
    }
  ],
}
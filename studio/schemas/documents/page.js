export default {
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
        {
            name: "seoContent",
            title: "SEO Content",
            type: "seo",
        },
        {
            name: "pageType",
            title: "Page Type",
            type: "string",
            options: {
                list: [
                    "Home Page",
                    "Contact Page",
                    "Basic Page"
                ]
            }
        },
        {
            title: "Hero Section",
            name: "heroSection",
            type: "object",
            fields: [
                {
                    title: "Heading",
                    name: "heading",
                    type: "string",
                },
                {
                    title: "Subheading",
                    name: "subheading",
                    type: "string"
                },
                {
                    title: "Summary",
                    name: "summary",
                    type: "blockContent"
                },
                {
                    title: "Profile Image",
                    name: "profileImage",
                    type: "image"
                }
            ],
            hidden: ({ parent, value }) => !value && parent["pageType"] !== "Home Page"
        },
        {
            title: "Skill Section",
            name: "skillSection",
            type: "object",
            fields: [
                {
                    title: "Heading",
                    name: "heading",
                    type: "string"
                },
                {
                    title: "Body",
                    name: "body",
                    type: "blockContent"
                },
            ],
            hidden: ({ parent, value }) => !value && parent["pageType"] !== "Home Page"
        },
        {
            name: "highlighted_content",
            title: "Highlighted Content",
            type: "array",
            of: [{ type: "reference", to: [{ type: "post" }, { type: "codeSnippet" }] }],
            hidden: ({ parent, value }) => !value && parent["pageType"] !== "Home Page"
        },
        {
            name: "pageContent",
            title: "Page Content",
            type: "blockContent",
            hidden: ({ parent, value }) => !value && parent["pageType"] === "Home Page"

        }
    ],
    preview: {
        select: {
            title: "seoContent.title",
            author: "author.name",
            media: "mainImage"
        },
        prepare(selection) {
            const { author } = selection;
            return Object.assign({}, selection, {
                subtitle: author && `by ${author}`
            });
        }
    }
}
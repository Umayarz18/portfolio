// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import blockContent from "./objects/blockContent";
import post from "./documents/post";
import author from "./documents/author";
import tag from "./documents/tag";
import codeSnippet from "./documents/codeSnippet";
import project from "./documents/project";
import mainImage from "./objects/mainImage";
import link from "./objects/link";
import seo from "./objects/seo";
import resourceLink from "./documents/resourceLink";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    post,
    author,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    tag,
    codeSnippet,
    project,
    mainImage,
    link,
    seo,
    resourceLink
  ])
});

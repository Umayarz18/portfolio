// ./studio/deskStructure.js

import S from "@sanity/desk-tool/structure-builder";
import Iframe from "sanity-plugin-iframe-pane";
import SocialPreview from "part:social-preview/component";
import resolveProductionUrl from "./resolveProductionUrl";

export const getDefaultDocumentNode = ({ schemaType }) => {
  if (["post", "project", "codeSnippet"].includes(schemaType)) {
    return S.document().views([
      S.view.form(),
      S.view
        .component(Iframe)
        .options({
          url: doc => resolveProductionUrl(doc)
        })
        .title("Preview"),
      S.view.component(SocialPreview({})).title("Social & SEO")
    ]);
  }
  return S.document().views([S.view.form()]);
};

export default () =>
  S.list()
    .title("Content")
    .items(S.documentTypeListItems());

// parts/sharingImageTool.js
import React from "react";
import { MediaEditor } from "sanity-plugin-asset-source-ogimage";
import TwitterImageLayout from "./TwitterImageLayout";

export default {
  name: "sharing-image",
  title: "Generate image",
  component: MediaEditor
};

import BlockContent from "@sanity/block-content-to-react";
import { config } from "../lib/config";
import React, { CSSProperties } from "react";
import { CodeBlock } from "./code-block/CodeBlock";

type MarkupContentProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any;
  /** Optional page source to provide splitbee anayltics to interactive block content */
  source?: string;
};

export default function MarkupContent({ body, source }: MarkupContentProps) {
  return (
    <BlockContent
      className=""
      ignoreUnknownTypes={false}
      blocks={body}
      serializers={serializers(source)}
      {...config}
    />
  );
}

const link = (props) => {
  return (
    <a className="link" href={props.mark.href}>
      {props.children}
    </a>
  );
};

const list = (props) => {
  return <li className="list-disc">{props.children}</li>;
};

const code = (props) => {
  return (
    <span className="text-base lg:text-lg font-mono bg-gray-300 text-gray-950 rounded px-1">
      {props.children}
    </span>
  );
};

const serializers = (source) => {
  return {
    marks: { link, list, code },
    types: {
      code: (props) => <CodeBlock {...props} analyticsSource={source} />,
      codepen: (props) => {
        const iframeStyles: CSSProperties = {
          width: "inherit",
        };
        return (
          <div className="min-w-full lg:max-w-2xl">
            <iframe src={props.node.link} style={iframeStyles} />
          </div>
        );
      },
      block: (props) => {
        const { style = "normal", listItem = "none" } = props.node;

        if (/^h\d/.test(style)) {
          const level = style.replace(/[^\d]/g, "");
          return React.createElement(
            style,
            { className: `heading-${level}` },
            props.children
          );
        }

        if (style === "blockquote") {
          return <blockquote>- {props.children}</blockquote>;
        }

        if (listItem === "bullet") {
          return <li className="uppercase list-disc">-{props.children}</li>;
        }
        // Fall back to default handling
        return BlockContent.defaultSerializers.types.block(props);
      },
    },
  };
};

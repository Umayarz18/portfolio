/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { useTheme } from "next-themes";
import { CodeIcon } from "../Icons";
import { lightTheme, darkTheme } from "./style";

export const CodeBlock = (props: unknown) => {
  const [copySuccess, setCopySuccess] = useState("");
  const { theme } = useTheme();

  useEffect(() => {
    setTimeout(() => setCopySuccess(""), 2000);
  }, [copySuccess]);

  const CodeButton = () => {
    function copyToClipboard() {
      const tempInput = document.createElement("input");
      tempInput.value = props["node"].code;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      setCopySuccess("Copied!");
    }
    return (
      <button
        className="text-gray-700 rounded
                dark:ring-primary-dark focus:ring-2 ring-primary
              bg-gray-300  dark:text-gray-200 dark:bg-gray-700 p-1"
        onClick={() => copyToClipboard()}
        aria-label="Copy code"
      >
        <CodeIcon classes={" h-5 w-5"} />
      </button>
    );
  };
  return (
    <div
      className="not-prose rounded border 
      border-gray-200 bg-gray-200 dark:border-gray-700 dark:bg-gray-800
      text-sm lg:text-md max-w-xs md:max-w-xl lg:max-w-2xl mx-auto "
    >
      {props["node"].filename && (
        <div
          className=" dark:bg-gray-700 bg-gray-300 text-gray-700 
            dark:text-gray-200 font-bold mx-auto p-2 flex flex-row justify-between items-center"
        >
          {" "}
          {props["node"].filename}
        </div>
      )}
      <div className="relative">
        <SyntaxHighlighter
          wrapLongLines
          language={props["node"].language}
          style={theme === "dark" ? darkTheme : lightTheme}
        >
          {props["node"].code}
        </SyntaxHighlighter>
        <div
          className="absolute right-0 bottom-0 flex flex-row 
                justify-center align-middle p-2"
        >
          <span className="text-green-600 dark:text-green-300 mr-1 self-center">
            {copySuccess}
          </span>
          <CodeButton />
        </div>
      </div>
    </div>
  );
};

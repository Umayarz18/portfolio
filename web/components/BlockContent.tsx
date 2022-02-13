import BlockContent from '@sanity/block-content-to-react';
import { config } from '../lib/config';
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

type MarkupContentProps = {
    body: any;
};

export default function MarkupContent({ body }: MarkupContentProps) {
    return (
        <BlockContent
            className=''
            blocks={body}
            imageOptions={{ w: 320, h: 240, fit: 'max' }}
            serializers={serializers}
            {...config}
        />
    );
}

const link = (props) => {
    return (
        <a className='link' href={props.mark.href}>
            {props.children}
        </a>
    );
};

const list = (props) => {
    return <li className='list-disc'>{props.children}</li>;
};
const serializers = {
    marks: { link, list },
    types: {
        code: (props) => (
            <div
                className='rounded border 
      border-gray-200 bg-gray-200 dark:border-gray-700 dark:bg-gray-800
      text-sm lg:text-md max-w-xs md:max-w-xl lg:max-w-2xl mx-auto mb-6'
            >
                <pre
                    className='h-full relative '
                    data-language={props.node.language}
                >
                    {props.node.filename && (
                        <p
                            className=' dark:bg-gray-700 bg-gray-300 text-gray-700 
                dark:text-gray-200 font-bold mx-auto p-2'
                        >
                            {props.node.filename}
                        </p>
                    )}
                    <div className='overflow-x-scroll p-2'>
                        <SyntaxHighlighter
                            language='javascript'
                            useInlineStyles={false}
                        >
                            {props.node.code}
                        </SyntaxHighlighter>
                    </div>
                </pre>
            </div>
        ),

        block: (props) => {
            const { style = 'normal', listItem = 'none' } = props.node;

            if (/^h\d/.test(style)) {
                const level = style.replace(/[^\d]/g, '');
                return React.createElement(
                    style,
                    { className: `heading-${level}` },
                    props.children
                );
            }

            if (style === 'blockquote') {
                return <blockquote>- {props.children}</blockquote>;
            }

            if (listItem === 'bullet') {
                return (
                    <li className='uppercase list-disc'>-{props.children}</li>
                );
            }
            // Fall back to default handling
            return BlockContent.defaultSerializers.types.block(props);
        },
    },
};

import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta
                        name='application-name'
                        content='Roewyn Umayam Portfolio'
                    />
                    <meta name='apple-mobile-web-app-capable' content='yes' />
                    <meta
                        name='apple-mobile-web-app-status-bar-style'
                        content='default'
                    />
                    <link rel='mask-icon' href='/favicon.ico' />
                    <link rel='shortcut icon' href='/favicon.ico' />
                    <link rel='manifest' href='/manifest.json' />
                    <link rel='apple-touch-icon' href='/favicon.ico'></link>
                    <meta name='theme-color' content='#fff' />
                    <script async src='https://cdn.splitbee.io/sb.js'></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;

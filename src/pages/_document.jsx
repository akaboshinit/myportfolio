import Document, { Html, Head, Main, NextScript } from 'next/document'
import {ServerStyleSheet} from 'styled-components';

export default class MyDocument extends Document {
    static getInitialProps( {renderPage} ) {
        const sheet = new ServerStyleSheet();
        const page = renderPage(App => props =>
            sheet.collectStyles(<App {...props} />),
        );
        const styleTags = sheet.getStyleElement();
        return {...page, styleTags};
    }

    render() {
        return (
        <Html lang="ja">
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="google-site-verification" content="XoOrJUFaeFmuY6WXOhRp40t9FrM-FWHu73TX7fLW7Eg" />
                    <link rel="stylesheet" href="https://meyerweb.com/eric/tools/css/reset/reset200802.css"></link>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/earlyaccess/notosansjapanese.css"></link>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Condensed:700"></link>
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"></link>
                    {this.props.styleTags}
                </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
        );
    }
}

// import Document, { Html, Head, Main, NextScript } from 'next/document'
// import {ServerStyleSheet} from 'styled-components';

// type Props = {
//     styleTags: any;
// };

// export default class MyDocument extends Document<Props> {
//     static getInitialProps({renderPage}) {
//         const sheet = new ServerStyleSheet();
//         const page = renderPage(App => props =>
//             sheet.collectStyles(<App {...props} />),
//         );
//         const styleTags = sheet.getStyleElement();
//         return {...page, styleTags};
//     }

//     render() {
//         return (
//         <Html lang="ja">
//                 <Head>
//                     <meta charSet="utf-8" />
//                     <meta name="google-site-verification" content="XoOrJUFaeFmuY6WXOhRp40t9FrM-FWHu73TX7fLW7Eg" />
//                     <link rel="stylesheet" href="https://meyerweb.com/eric/tools/css/reset/reset200802.css"></link>
//                     <link rel="stylesheet" href="https://fonts.googleapis.com/earlyaccess/notosansjapanese.css"></link>
//                     <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Condensed:700"></link>
//                     <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"></link>
//                     {this.props.styleTags}
//                 </Head>
//             <body>
//                 <Main />
//                 <NextScript />
//             </body>
//         </Html>
//         );
//     }
// }

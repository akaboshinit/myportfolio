import Document, { Html, Head, Main, NextScript } from 'next/document'

class CustomDocument extends Document {
render(): JSX.Element {
    return (
    <Html lang="ja-JP">
        <Head>
            {/* <title>akaboshi-portfolio</title> */}
            <link rel="stylesheet" href="https://meyerweb.com/eric/tools/css/reset/reset200802.css"></link>
            <link rel="stylesheet" href="https://fonts.googleapis.com/earlyaccess/notosansjapanese.css"></link>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Condensed:700"></link>
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
    )
}
}

export default CustomDocument
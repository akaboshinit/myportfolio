import Document, { Html, Head, Main, NextScript } from 'next/document'
import {ServerStyleSheet} from 'styled-components';
const dir = String(process.env.BACKEND_URL);

type Props = {
    styleTags: any;
};

export default class MyDocument extends Document<Props> {
    // static getInitialProps({renderPage}:{renderPage:any}) {
    //     const sheet = new ServerStyleSheet();
    //     const page = renderPage((App:any) => (props:any) =>
    //         sheet.collectStyles(<App {...props} />),
    //     );
    //     const styleTags = sheet.getStyleElement();
    //     return {...page, styleTags};
    // }
    static async getInitialProps(ctx:any) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage
        try {
            ctx.renderPage = () =>
                originalRenderPage({
                enhanceApp: (App:any) => (props:any) =>
                    sheet.collectStyles(<App {...props} />),
                })
            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                <>
                    {initialProps.styles}
                    {sheet.getStyleElement()}
                </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
        <Html lang="ja">
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="icon" type="image/jpg" href={dir+'/icon.jpg'}></link>
                    <meta name="google-site-verification" content="XoOrJUFaeFmuY6WXOhRp40t9FrM-FWHu73TX7fLW7Eg" />
                    <link rel="stylesheet" href="https://meyerweb.com/eric/tools/css/reset/reset200802.css"></link>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/earlyaccess/notosansjapanese.css"></link>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Condensed:700"></link>
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"></link>
                    {/* {this.props.styleTags} */}
                </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
        );
    }
}

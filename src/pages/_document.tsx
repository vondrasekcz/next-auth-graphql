import Document, {
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';


class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>

        <Head>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
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
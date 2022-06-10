import Link from "next/dist/client/link"
import Head from "next/dist/shared/lib/head"
import Script from "next/script"
import Layout from "../../components/layout"


export default function FirstPost() {
    return (
        <Layout>
            <Head>
            
                <title>First Blog</title>
                
            </Head>

            <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />

            <h1>First Post</h1>
            <Link href="/">
            <a>Back Home</a>

            </Link>

            </Layout>


    )
  }
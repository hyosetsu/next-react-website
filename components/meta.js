import Head from "next/head"

// サイトに関する情報
import { sitaMeta } from "lib/contants"
const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } = sitaMeta
export default function Meta({ pageTitle }) {
    // ページのタイトル
    const title = pageTitle ? '${pageTitle} | ${siteTitle}' : siteTitle
    return (
        <Head>
            <title>{pageTitle} | {siteTitle}</title>
            <meta property="og:title" content={'${pageTitle} | ${siteTitle}'} />
        </Head>
    )
}
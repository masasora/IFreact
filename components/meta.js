import Head from 'next/head'
import { siteMeta } from '../lib/constants'
const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } = siteMeta
import { useRouter } from 'next/router'

export default function Meta({pageTitle,pageDesc}) {

    //ページのタイトル
    const title = pageTitle ? `${pageTitle}  | ${siteTitle}` : siteTitle
    //ページの説明
    const desc = pageDesc ?? siteDesc
    //ページのURL
    const router = useRouter()
    const url =  `${siteUrl}${router.asPath}`



    return (
        <Head>
            <title>{title}</title>
            <meta property="og:title" content={title} />
            <meta name="description" content={desc} />
            <meta property="og:description" content={desc} />
            <link rel="canonical" href={url} />
            <meta property="og:ril" content={url} />

            <meta property="og:site_name" content={siteTitle} />
            <meta property="og:type" content={siteType} />
            <meta property="og:locale" content={siteLocale} />

            {/* ファビコン */}
            <link rel="icon" href={siteIcon} />
            <link rel="apple-touch-icon" href={siteIcon} />
            {/* レスポンシブ用 */}
            <meta name="viweport" content="width=device-width,initial-scale=1" />
            {/* エンコードの指定 */}
            <meta charset="utf-8" />
            {/* 公開前は検索エンジンにインデックスさせない */}
            <meta name="robots" content="noindex, nofollow" />
            {/* IEで常に標準モードで表示させる */}
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            {/* 電話番号の自動リンク化を無効 */}
            <meta name="format-detection" content="telephone=no"/>
                </Head>
    ) 
}
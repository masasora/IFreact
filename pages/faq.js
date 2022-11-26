import React from 'react';
import styles from '../styles/faq.module.css'
import Reverce from '../components/reverce'
import Skygrass from '../public/skygrass.jpg'
import Image from 'next/image'
import Meta from '../components/meta'

export default function fap() {
    return (
        <div>
            <Meta pageTitle="FAQ" pageDesc="このアプリの説明" />
        <div className={styles.wrapper}>
                            <div className={styles.divSample}>
                    <Image
                        className={styles.imgSample}
                        alt="サンプル"
                        src={Skygrass}
                        layout='fill'
                        objectFit="cover"
                    /> 
                </div>

        <div className={styles.longflame}>
            <div className={styles.titleflame}>
                <p className={styles.title1}>「IF」ってなに？</p>
            </div>
                <div className={styles.desflame}>
                                        <div>
                        <p className={styles.short1}>もしゲームに費やした時間を資格勉強に費やしていた場合、どんな資格がとれていたか分かるツールです。</p>
                        </div>
                </div>

            <div className={styles.titleflame}>
                <p className={styles.title2}>どう使えばいいの？</p>
            </div>
                <div className={styles.desflame}>
                    <div>
                <p className={styles.short2}>SteamやSwitchに記録されているプレイ時間を入力すれば、その時間で取得できていたであろう資格がランダムで表示されます。</p>
                    </div>
                </div>
                                <div className={styles.desflame}>
                    <div>
 <p className={styles.short3}>例：スマブラを3000時間プレイしていたので、3000と入力したら一級建築士と日商簿記一級などが取れていたことがわかった。</p>
                    </div>
                </div>
                               
            <div className={styles.titleflame}>
                <p className={styles.title3}>ランクって？</p>
            </div>
                <div className={styles.desflame}>
                    <div>
                    <p className={styles.short4}>資格にはそれぞれ取得想定時間ごとにランクが付与されています。目指せ（？）Sランク！</p>
                        <div className={styles.rlist}>
                            <div>
                    <p>Sランク：5000時間~</p>
                    <p>Aランク：1000~4999時間</p>
                    <p>Bランク：550~999時間</p>
                    <p>Cランク：200~549時間</p>
                                <p>Dランク：~199時間</p>
                                </div>
                            </div>
                </div>
                </div>
                
            </div>

            
            <div className={styles.home}>
                <Reverce></Reverce>
            </div>
            </div>
            </div>
    )
}
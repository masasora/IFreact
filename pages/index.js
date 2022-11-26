import React from 'react';
import styles from '../styles/about.module.css'

import FormTime from "../components/form"

import Image from 'next/image'
import Aboutend from '../public/aboutsharpnoflame.png'
import Meta from "../components/meta"
import Link from 'next/link'
import Sc from '../public/allsc.png'


export default function App() {

    return (
        <div className={styles.about}>
            <Meta />
            <div className={styles.wrapper}>
                <div className={styles.divSample}>
                    <Image
                        className={styles.imgSample}
                        alt="サンプル"
                        src={Aboutend}
                        layout='fill'
                        objectFit="cover"
                        placeholder='blur'
                        style={{ transition: '0.05s' }}
                        priority
                    /> 
                </div>
                                <h1 className={styles.title}>IF</h1>
                <p className={styles.textTop}>~もしもゲームの代わりに資格勉強をしていたら~</p>

                <p className={styles.textMiddle}>ゲームの総プレイ時間を入力</p>
                <div className={styles.form}>
                    <FormTime></FormTime>
                    </div>
                <div className={styles.imgscSample}>
                    <Image
                        className={styles.scSample}
                        alt="スクロール"
                        src={Sc}
                        layout="fixed"
                        width={55}
                    height={20}
                    /> 
                    </div>
<div className={styles.whatis}>
    <Link href="/faq">
        <a>このサイトの説明</a>
        </Link>
                </div>
                </div>
        </div>
  )
}


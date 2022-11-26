import React from 'react';

import Rocker from '../components/rocker'
import Reverce from '../components/reverce'
import Twi from '../components/twitter'

import Box from '../public/box.jpg'
import styles from '../styles/score.module.css'
import Image from 'next/image'
import Meta from '../components/meta'

export default function Job() {


  return (
    <div>
      <Meta pageTitle="結果画面" pageDesc="結果一覧"/>
  <div className={styles.score}>
  <div >
                    <div className={styles.divSample}>
                    <Image
                        className={styles.imgSample}
                        alt="サンプル"
                        src={Box}
                        layout='fill'
                        objectFit="cover"
      /> 
    </div>
    <div className={styles.wrapper}>
      <div className={styles.reverce}>
        <Reverce></Reverce> 
        </div>
      <div className={styles.twi}>
        <Twi></Twi>
        </div>
        </div>
        <div className={styles.list}>
    <Rocker></Rocker>
</div>
      </div>
      </div>
      </div>
    );
}
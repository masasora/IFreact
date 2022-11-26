import React from 'react';
import styles from '../styles/404.module.css'
import Reverce from '../components/reverce'
import Image from 'next/image'
import Skygrass from '../public/skygrass.jpg'
import Meta from '../components/meta'

// pages/404.js
export default function Custom404() {
  return (
    <div>
      <Meta pageTitle="404　このページは存在しません" pageDesc="存在しないページであることを示す" />
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
            <h1 className={styles.text404}>404 - Page Not Found</h1>
            </div>
        </div>
            <div className={styles.home}>
          <Reverce></Reverce>
          </div>
      </div >
      </div>
        )
}
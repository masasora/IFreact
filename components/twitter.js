import styles from '../styles/twitter.module.css'
import Twiwhite from '../public/twiwhite.png'
import Image from 'next/image'

export default function Twi() {
    return(
        <div className={styles.twitter}>

            <a className={styles.min} href="https://twitter.com/intent/tweet?text=%23IF　IFとは自分がゲームに費やした時間を資格勉強に費やしていたら何が取れていたかわかるツールです！ https://iflicensegacha.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <Image
                                        alt="青い鳥"
                src={Twiwhite}
                width={40}
                height={40}
            />ツイート
            </a>
               </div>
    )
}
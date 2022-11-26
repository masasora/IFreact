import Link from 'next/link'
import styles from '../styles/reverce.module.css'
import Home from '../public/homewhite.png'
import Image from 'next/image'

export default function Reverce() {
    return (
        <div className={styles.reverce }>
        <Link href="/">
                <a className={styles.min}>
                                                <Image
                                        alt="家"
                src={Home}
                width={40}
                height={30}
                    />
                    ホームへ
                </a>
            </Link>
            </div>
    )
}
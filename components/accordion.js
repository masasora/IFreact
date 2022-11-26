import { useState, useRef } from 'react'
import styles from '../styles/accordion.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function Accordion({ heading, children }) {
  const [textIsOpen, setTextIsOpen] = useState(false)
  const toggleText = () => {
    setTextIsOpen((prev) => !prev)
  }
  const refText = useRef(null)

  return (
    <div className={textIsOpen ? styles.open : styles.close}>
      {/* 見出し */}
      <h3 className={styles.heading}>
        <button className={styles.headingtext} onClick={toggleText}>
          {heading}
          <FontAwesomeIcon icon={faCircleChevronDown} className={styles.icon} />
        </button>
      </h3>
      {/* 開けた後の内容 */}
      <div
        className={styles.text}
        ref={refText}
        style={{
          '--text-height': refText.current
            ? `${refText.current.scrollHeight}px`
            : '0px',
        }}
      >
        <div className={styles.textInner}>{children}</div>
      </div>
    </div>
  )
}

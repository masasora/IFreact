import React from 'react';

import { useRouter } from "next/router";

import Accordion from '../components/accordion'

import { siteArray } from '../lib/joblist';

import styles from '../styles/rocker.module.css'

export default function Rocker() {
  let array = siteArray
  const router = useRouter();
  // console.log(router.query.id)

  let count = router.query.id;
  const list = [];
  const judge = []

  let S = 0;
  let A = 0;
  let B = 0;
  let C = 0;
  let D = 0;
  let fullncount = count;
  let jcount = 0;

  while (true) {
    let roll = Math.floor(Math.random() * array.length) //ランダムな要素の添字取得(IDではない)
    if (count >= array[roll].num) { //残り時間で選ばれた資格が取れるか検証
      // console.log("==================================")
      // console.log("選ばれたのは"+array[roll].job+"だよ。これの必要時間は"+array[roll].num+"だよ。")
      count=count-array[roll].num //残り時間から資格時間を引き、残りを保存
      judge.push(array[roll])
      jcount++

switch (array[roll].rank){
  case 'S':
    S++
    break;
  case 'A':
    A++
    break;
  case 'B':
    B++
    break;
  case 'C':
    C++
    break;
  case 'D':
    D++
    break;
  default:
}



      array = array.filter(n => n.id !== array[roll].id) //入れたのでリストから削除
      // console.log("残りの長さは"+array.length+"")
      // console.log("残りは" + count + "時間だよ")
    }
    else{
      // console.log("==================================")
      // console.log(array[roll].count+"時間は無理でした")
      array = array.filter(n => n.id !== array[roll].id) //範囲外なのでリストから削除
      // console.log("残りの長さは"+array.length+"")
    }
    if (array.length == 0 || count <= 0) {
      // console.log("==================================")
      // console.log("壊れたよ")
      break;
    }
  }

  judge.sort((a, b) => b.num - a.num)

  const time=fullncount-count

  // console.log(S)
  // console.log(A)
  // console.log(B)
  // console.log(C)
  // console.log(D)
  // console.log(time)
  // console.log(jcount)


  judge.map((item) => {
            list.push(
              <div className={styles.id} key={item.id}>
                <li >
                  <div className={styles.box}>
                    <p className={styles.rank}>{item.rank}</p>
                    <div className={"boxcenter" +  item.rank}>
                      <div className={styles.boxin}>
                      <p className={"job" + item.rank}>
                        {item.job}
                      </p>
                    <p className={"num" + item.rank}>
                        勉強時間：{item.num}時間
                        </p>
                        </div>
                    </div>
                {/* <Image
                  src={item.pic}
                  alt="サンプル画像"
                  layout="responsive"
                /> */}

            <Accordion heading="説明">
              <p>
                {item.log}
              </p>
                    </Accordion>
                    </div>
                </li>
                </div>
                
            );
        });
  return (
    <div>
      <div className={styles.total}>
        <p>計{time}時間</p> 
        <p>取得資格数：{jcount}個</p> 
        <p>RANK</p>
        <div>
          <p>S：{S}個</p>
          <p>A：{A}個</p>
          <p>B：{B}個</p>
          <p>C：{C}個</p>
          <p>D：{D}個</p>
          </div>
        </div>
      <ul className={styles.list}>{list}</ul>
    </div>
  )
        }

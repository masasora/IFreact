import React from 'react';
import { useForm } from 'react-hook-form';

import { useRouter } from "next/router";

import styles from "../styles/form.module.css"

export default function FormTime() {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data)
        const rank = parseInt(data.email)
        // console.log(rank)

        const query = {
            id: rank,
        };

        const nextPage = () => {
            router.push({ pathname: "score", query: query }, "result");
        };
        nextPage()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className={styles.formSample} {...register('email', {
                    // required: true,
                    maxLength: 6,
                              pattern: {
            value:
              /^[0-9]*$/,
            message: '形式が不正です',
          },
                })} />
                {errors.email && <span className={styles.dangerSample}>
                    <div>
                    <p className={styles.dangerTextup}>Attention</p>
                        <p className={styles.dangerTextdown}>0以上6桁までの整数を入力してください</p>
                        </div>
                </span>}

                <div >
                    <input className={styles.inputSample} type="submit" value="結果を見る"></input>
                </div>
                            </form>
            
        </div>
  )
}
"use client"

import Header from '../componets/Header';
import classes from '@/app/contact/contact.module.scss'
import React, { useRef } from 'react';
import { Footer } from '../componets/Footer';

export default function Contact() {

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  let data = {
    name: nameRef.current?.value,
    email: emailRef.current?.value,
    message: messageRef.current?.value,
  };

  await fetch("/api/sendmail/", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (res.status === 200) {
      console.log("メール送信成功")
      alert("お問い合わせありがとうございます。\n1～2日でご返信差し上げますので少々お待ちください。");
    }
  });
};
  
  return (
    < >
      <Header />

      <div className={classes.contact}>
        <h2>お問い合わせ</h2>
        <p>サイトをご覧いただきありがとうございました。</p>
        <p>少しでも興味を持っていただきましたら下記よりご連絡いただけますと幸いです。</p>
      </div>


      <div className={classes.form}>
        <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
          <div className={classes.form__container}>
            <label htmlFor="name" className={classes.form__label}>
              名前
            </label>
            <input type="text"  className={classes.form__control} id='name' ref={nameRef} required />
          </div>

          <div className={classes.form__container}>
            <label htmlFor="email" className={classes.form__label}>
              メールアドレス
            </label>
            <input type="mail"  className={classes.form__control} id='email' ref={emailRef} required/>
          </div>

          <div className={classes.form__container}>
            <label htmlFor="message" className={classes.form__label}>
              メッセージ
            </label>
            <textarea  name="message" className={classes.form__control__textarea} id='message' ref={messageRef} required></textarea>
          </div>
          <button type='submit' className={classes.btn__submit}>送信</button>
        </form>
      </div>

      <Footer />

      
    </>
  )
}

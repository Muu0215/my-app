"use client";

import Image from 'next/image'
import classes from '@/app/componets/Profile.module.scss'
import { useState } from 'react'
import clsx from 'clsx';

export default function Profile() {

  const [open , setOpen] = useState(false);
  const toggleClass = () => {
    setOpen(!open);
  }

  const [open1 , setOpen1] = useState(false);
  const toggleClass1 = () => {
    setOpen1(!open1);
  }

  const [open2 , setOpen2] = useState(false);
  const toggleClass2 = () => {
    setOpen2(!open2);
  }

  const [open3 , setOpen3] = useState(false);
  const toggleClass3 = () => {
    setOpen3(!open3);
  }


  

  return (
    <>
      <div className={classes.container}>
        <div className={classes.profile}>
          <h2 className={classes.profile__ttl}>Profile</h2>
          <div className={classes.profile__container}>
            <Image className={classes.avatar} src="/top.jpg" alt="" width={200} height={200} />
            <p>現在、靴メーカーで勤務しています。<br />
              2023年4月よりフロントに関わるディレクション、ライティング、
              撮影コーディングからSNS運用など幅広い業務を担当。
              現職の自社サイト統合でページスピードが低下したことを<br />
              SPAに興味をもち現在はReact＆Next.jsを勉強中。
            </p>
            </div>
        </div>
        <div className={classes.tree_container}>
          <h2 className={classes.profile__ttl}>Job Career</h2>
          <div className={classes.tree}>
            <h2>2018年4月～</h2>
            <h3 className={classes.tree__ttl}>人事部付</h3>
            <div className={clsx(classes.tree__content, open && classes.tree__content__open)}>
              <p>人事部付で自社・百貨店での店頭販売研修や営業同行をし、業務内容の把握と取引先社員との関係構築に努めました。</p>
              <p>この経験により販売スタッフは営業に何を望むのか、どういう情報を欲してるかなど営業に求められている基礎を理解することができました。</p>
            </div>
            <button className={classes.tree__btn} onClick={toggleClass}>もっと見る</button>

          </div>
        </div>
        <div className={classes.tree}>
          <h2>2019年4月〜</h2>
          <h3 className={classes.tree__ttl}>ルートセールス</h3>
          <div className={clsx(classes.tree__content, open1 && classes.tree__content__open)}>
            <h3 className={classes.tree__content__ttl}>【業務概要】</h3>
            <p>呉服系百貨店に向けてルートセールスとして、リーガルを中心とした婦人靴の提案営業を実施しておりました。 </p>
            <p>百貨店では自社で雇用した販売スタッフが勤務しているため、販売スタッフのマネジメントを行いつつ、取引先や販売スタッフからヒアリングを行い提案商品の選定や販促計画の作成や提案、在庫の確保、新規ブランド投入に伴う契約書の締結等を主な業務としておりました。</p>
            
            <h3 className={classes.tree__content__ttl}>【課題①：関係構築＆売上改善】</h3>
            <p>販売スタッフは私よりも年齢が高い方が多く、営業１年目ということもあり、最初はなかなか信頼を得ることができませんでした。</p>
            <p>そのためは、まずは、自分自身を知ってもらうことが大事と考え、現場に足繫く通い、コミュニケーションを重ねることで自分がどういう人間か、どう考えているのかを知ってもらえるよう努めました。</p>
            <p>同時に、現場の販売スタッフがどういう状況で勤務しているか、売場での自社の立ち位置などを把握するようにしました。</p>
            
            <h3 className={classes.tree__content__ttl}>【結果①】</h3>
            <p>自社販売スタッフに対して、有益な情報や売上向上となる商品を提供することができ、信頼を勝ち取ることができました。</p>
            <p>このことにより少しずつ売上を向上させることができ、取引先社員やキーマンとなる人物とのコミュニケーションを増やすことができました。</p>
            <p>上記を重ねることで取引先と掛率交渉の場を設けることができ、掛率改善をすることで自社に利益をもたらすことができました。</p>
            
            <h3 className={classes.tree__content__ttl}>【課題②：販売スタッフ教育】</h3>
            <p>販売スタッフのスキル向上のため、現場で働く上で足りないと考えるスキルは何かアンケートを集計を行いました。</p>
            <p>フィッティングに不安を抱えていたスタッフが多かったため、フィッテイングスキル向上のための資料作成や関係部署との調整を図り、勉強会を実施いたしました。</p>
            
            <h3 className={classes.tree__content__ttl}>【結果②】</h3>
            <p>販売スタッフからは不安が解消された、自信がついたとの声をいただき、次への勉強会の活力となりました。</p>
          </div>
          <button className={classes.tree__btn} onClick={toggleClass1}>もっと見る</button>
        </div>
        <div className={classes.tree}>
          <h2>2022年4月〜</h2>
          <h3 className={classes.tree__ttl}>ECセールス</h3>
          <div className={clsx(classes.tree__content, open2 && classes.tree__content__open)}>
            <h3 className={classes.tree__content__ttl}>【業務概要】</h3>
            
            <p>大手ECモールに向けて、リーガルを中心とした紳士靴・婦人靴の提案営業を実施、自社商品の在庫管理、販促計画の作成、また、自社ECサイトでは商品登録、在庫管理、写真撮影などの店舗運営をしておりました。</p>
            
            <h3 className={classes.tree__content__ttl}>【課題：売上向上】</h3>
            <p>ＥＣモールでは実店舗との営業スタイルの差に最初は戸惑いましたが、データ分析を重ね、担当者と連絡を密にすることで特徴や傾向の把握に努めました。</p>
            <p>自社ECサイトでは、自分が一お客様になったつもりで自社サイトを見るようにし改善点を探すよう努めました。</p>
            
            <h3 className={classes.tree__content__ttl}>【結果】</h3>
            <p>ECモールの特徴にあった商品の投入、取引先の販促への積極的参加で年度目標140％を達成することができました。</p>
            <p>自社サイトでは、商品画像の不足や商品詳細ページへの導線の少なさが見られたため、商品撮影やリンクの拡充、メイン位置への商品配置を行うことで年度目標119％を達成することができました。</p>
          </div>
          <button className={classes.tree__btn} onClick={toggleClass2}>もっと見る</button>
        </div>
        <div className={classes.tree}>
          <h2>2023年4月〜</h2>
          <h3 className={classes.tree__ttl}>コンテンツ企画・作成</h3>
          <div className={clsx(classes.tree__content, open3 && classes.tree__content__open)}>
            <h3 className={classes.tree__content__ttl}>【業務概要】</h3>
            <p>現在では自社サイトのコンテンツ作成やSNS運営をしております。</p>
            <p>主な業務としては、自社サイトにて公開するコンテンツ用やSNS用に写真撮影や記事作成、HTMLやCSS、Javascriptを用いてのコーディング、Instagramでのストーリー作成や投稿をしています。</p>
            <p>自社のコンテンツ作成では、Google Analyticsを用いてどういった商品がよく見られているのか、自社の販売計画に沿っているかを分析し、お客様のニーズに合わせたテーマでコンテンツ案を作成しています。</p>
            
            <p>また、Instagramではインサイトを用いて、どういった写真や投稿がお客様の琴線に触れるかを確認し、傾向を分析、作成しています。</p>
            <p>現在所属している部門で”Apexfiz”という島精機製作所様が作成されているデザインシステムの導入が決まった際は率先して業務習得に努めました。</p>
            <p>主に色変換や素材を合成してイメージ画像を作成することに利用し、自社で初のオンラインでのオーダー会を実施しました。</p>
            <p>受注も目標比120％を達成し、以降、部を股いだ施策の１つとなっています。</p>
            <p>また、Apexfizを使用した業務が属人化しないようマニュアルを作成、だれでも簡単にできるよう敷居を下げ、現在では別部門でも使用しています。</p>
            
            <h3 className={classes.tree__content__ttl}>【課題①：JavaScriptを用いてのコンテンツ作成】</h3>
            <p>ブランドの性質上、メンズコンテンツはよく見られるが、レディースコンテンツは興味を惹きづらいという傾向がありました。そのため、どちらの内容も盛り込んだコンテンツを作成し、セッション数を上げようと考えページを作成しました。</p>
            <p>ただ、１ページあたりの文章量が多くなってしまうとページ離脱が多くなってしまうため、タブ分けをし、サムネイル毎に文章のだし分けすることで文章量と離脱を最小限にしようと考えました。</p>
            <p>自社ではJavascriptは外注で、社内にも経験のある人間がいなかったため、自分でどういう機能を作りたいか、どういう処理が必要なのか１から調べ機能を作成しました。</p>
            
            <h3 className={classes.tree__content__ttl}>【結果①】</h3>
            <p>タブの実装は容易でしたが、サムネイル画像をクリックしたら、文章をだし分けるという機能はDOMへの理解が浅く、苦労しました。</p>
            <p>わからない部分はQUITAや個人のブログを見て調べ、トライ＆エラーで作成しました。</p>
            <p>時間はかかりましたが、機能を作成、コンテンツへの実装をすることができました。</p>
            <p>セッションは平均的でしたが、コンテンツとしては重要という評価をいただき、TOPページの常設コンテンツとして配置することができました。</p>
            
            <h3 className={classes.tree__content__ttl}>【課題②：Instagramのノウハウ不足】</h3>
            <p>長らくInstagramを部門では運営していましたが、どういう投稿が良いか、実績などがなくノウハウ不足でした。そのため、インサイトを活用し、客観的に見れる実績リストを作成し、実態の把握に努めました。</p>
            
            <h3 className={classes.tree__content__ttl}>【結果】</h3>
            <p>分析ができ傾向を反映させた投稿ではアカウント開設以来最も良いホーム率や、インプレッション、CVRを達成することができました。</p>
            <p>実績リストは部で共有、どういう投稿がお客様に見てもらえるのか、写真はどういうのがよく見られるのかノウハウの構築ができました。</p>
            <p>また、他部署で運営しているアカウント担当者とすり合わせを行い、自社としてアカウント毎の差別化をどうするか話し合うことができました。</p>
          </div>
          <button className={classes.tree__btn} onClick={toggleClass3}>もっと見る</button>
        </div>
      </div>
    </>
  )
}

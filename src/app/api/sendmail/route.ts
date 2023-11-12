import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    const {name, email, message} = await req.json();

    const transpoter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAILUSER,
            pass: process.env.GMAILPASSWORD
        },
    });

    const toHostMailData = {
        from: name,
        to: "nordvillaggio.s.0215@gmail.com",
        subject:`【お問い合わせ】${name}様より`,
        text: `${message} Send from ${email}`,
        html:`
            <p>【名前】<p/>
            <p>${name}</p>
            <p>【メールアドレス】<p/>
            <p>${email}</p>
            <p>【メッセージ】<p/>
            <p>${message}</p>
        `
    };

    transpoter.sendMail(toHostMailData, (err, info) => {
        if(err) console.log(err);
        else console.log(info);
    });

  try {
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}




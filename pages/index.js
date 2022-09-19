import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import React from 'react';
import { pageErrorHandler } from '../utils';

export default function Index(props) {
    if (props.pageName && props.desc) {
        return (
            <div>

                <Head>
                    <script type="text/javascript"
                        src="main.js"
                    ></script>
                </Head>
                <p>
                    <a href="http://www.google.com" style={{ color: 'blue' }}>Click here to Go to Google!</a>
                </p>
                <p>{props.pageName}</p>
                <p>{props.desc}</p>
                <p>{props.timestamp}</p>
            </div>
        )
    }

    return <div>Cannot get data from Server</div>
}

export async function getServerSideProps(context) {
    try {
        console.log({ context })
        const p = new Promise((resolve, reject) => {
            const d = {
                pageName: "Home Page",
                desc: 'Fetched from server side render',
                timestamp: Date.now()
            }
            resolve(d);
        })
        const data = await p;
        return { props: data}
    } catch (e) {
        return pageErrorHandler(e)
    }
}

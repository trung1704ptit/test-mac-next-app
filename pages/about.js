import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import React from 'react';

export default function About(props) {
    if (props.pageName && props.desc) {
        return (
            <div>
                <p>
                    <a href="http://www.google.com" style={{ color: 'blue'}}>Click here to Go to Google!</a>
                </p>
                <p>{props.pageName}</p>
                <p>{props.desc}</p>
                <p>{props.timestamp}</p>
                <p>There is no script added to this page</p>
            </div>
        )
    }

    return <div>Cannot get data from Server</div>

}

export async function getServerSideProps(context) {
    return { props: { pageName: "About Page", desc: 'Fetched from server side render', timestamp: Date.now() } }
}

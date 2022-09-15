import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import React from 'react';

export default class About extends React.Component {
    static async getInitialProps({req}){
        if(req){
            console.log('initialProps: server');
            return {txt: 'server'}
        }
        else{
            console.log('initialProps: client');
            return {txt: 'client'}
        }
    }
  
    render(){
        console.log(this.props.txt, new Date().toISOString());
        return (
            <div>
                <p>
                    <a href="http://www.google.com">Go to Google!</a>
                </p>
                <p>{this.props.txt}</p>
            </div>
        )
    }
  }


// export async function getServerSideProps(context) {
//     return { props: { pageName: "About Page", desc: 'Fetched from server side render' } }
// }
  
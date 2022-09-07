//This page code is about my self

import Head from "next/head";
import Layout from "../components/layout";
import { getUserData } from "../lib/posts";
import utilStyles from "/styles/utils.module.css";

//Name, age, study status, Technology use, hobby and contact
export async function getStaticProps() {
    const userData = getUserData();
    return {
        props: {
            userData,
        },
    };
}

export default function About({userData}) {
    return (
        <Layout>
            <Head>
                <title>{userData.title}</title>
            </Head>
            <h1 className={utilStyles.headingXl}>This page is about my self</h1>
            <ul>
                <li className={utilStyles.listItem}>Full Name: {userData.fullName}</li>
                <li className={utilStyles.listItem}>Date Of Birth: {userData.dateOfBirth}</li>
                <li className={utilStyles.listItem}>School: {userData.studyStatus}</li>
                <li className={utilStyles.listItem}>Technology: {userData.technologyUse}</li>
                <li className={utilStyles.listItem}>Hobby: {userData.hobby}</li>
                <li className={utilStyles.listItem}>Phone Number: {userData.phoneNumber}</li>
                <li className={utilStyles.listItem}>Address: {userData.address}</li>
                <li className={utilStyles.listItem}>Facebook: <a href={userData.facebook}>{userData.facebook}</a></li>
                <li className={utilStyles.listItem}>Github: <a href={userData.github}>{userData.github}</a></li>
                <li className={utilStyles.listItem}>Email: {userData.email}</li>
            </ul>
        </Layout>
    );
}
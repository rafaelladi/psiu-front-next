import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {useState} from "react";

interface Tab {
    id: number
    title: string
}

const Home: NextPage = () => {
    const [id, setId] = useState(1);
    const tabs: Tab[] = [
        {
            id: 1,
            title: "Test 1"
        },
        {
            id: 2,
            title: "Test 2"
        },
        {
            id: 3,
            title: "Test 3"
        },
        {
            id: 4,
            title: "Test 4"
        }
    ];

    return (
        <>
            <Head>
                <title>Be Connect 2</title>
            </Head>
            <div>
                <ul className="nav nav-tabs">
                    {tabs.map((tab, index) =>
                        <li className="nav-item" key={index} onClick={() => setId(tab.id)}>
                            <a className={"nav-link " + (id === tab.id ? "active" : "")} href="#">{tab.title}</a>
                        </li>
                    )}
                </ul>
            </div>
        </>
    );
}

export default Home;

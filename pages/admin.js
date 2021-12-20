import { useState } from "react";
import Layout from "../components/layout"
import { connectToDatabase } from '../util/nextmongodb'
import { Redirect } from "next";

import * as style from './admin.module.css'
import { useRouter } from "next/dist/client/router";


export default function AdminPage({  }) {
    const router = useRouter();

    const [processing, setProcessing] = useState(false);

    async function addSchool() {
        setProcessing(true);

        // make a new school
        const requestOptions = {
            method: 'POST'
        };
        let res = await fetch('/schools/new', requestOptions)
            .then((res) => res.text());

        router.push('/schools/' + res.replaceAll('"', ''));
    }

    return (
        <Layout>
            <div className={style.grid}>
                <button onClick={addSchool} disabled={processing}>
                    + Add School
                </button>
                <button disabled={processing}>
                    Coming soon...
                </button>
                <button disabled={processing}>
                    Coming soon...
                </button>
            </div>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const { client, db } = await connectToDatabase()

    return {
        props: {  },
    }
}

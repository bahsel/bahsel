import Layout from "../../components/layout"
import { connectToDatabase } from '../../util/nextmongodb'

import {ObjectId} from 'mongodb'


export default function SchoolPage({ school }) {
    return (
        <Layout>
            <p>
                {JSON.stringify(school)}
            </p>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const { client, db } = await connectToDatabase();

    let school = await db.collection('schools').findOne({
        "_id": new ObjectId(context.params.schoolid)
    });

    return {
        props: { school },
    }
}

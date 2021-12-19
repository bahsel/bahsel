import Layout from "../components/layout"
import { connectToDatabase } from '../util/mongodb'


export default function TestMongoPage({  }) {
    return (
        <Layout>
            <p>
                hello world
            </p>
            <p>
                yeet
            </p>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const { client, db } = await connectToDatabase()

    return {
        props: {  },
    }
}

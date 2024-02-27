import {MessageContent} from '@/components/MessageContent'
import Head from 'next/head'
import {BASE_URL} from '@/config/defaultValues'
import {Box} from '@chakra-ui/react'

export default function Message({users}) {
    return (
        <>
            <Head>
                <title>App | Messages</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Box p={{base: 2, md: 4}}>
                <MessageContent users={users}/>
            </Box>
        </>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`${BASE_URL}/api/user/all`)
    const users = await res.json()

    return {
        props: {
            users
        }
    }
}

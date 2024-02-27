import Head from 'next/head'
import {Box} from '@chakra-ui/react'
import {FormAuth} from '@/components/FormAuth'

export default function Signin() {
    return (
        <>
            <Head>
                <title>App | Sign In</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box>
                <FormAuth/>
            </Box>
        </>
    )
}
import Link from 'next/link'
import {Avatar} from '@chakra-ui/react'

export const Logo = ({imgUrl = '', status, name}) => {
    return (
        <>
            {status === 'unauthenticated'
                ? <Avatar style={{visibility: 'hidden'}}/>
                : status === 'authenticated'
                    ? <Link href="/">
                        <Avatar src={imgUrl ? imgUrl : 'https://bit.ly/broken-link'} name={name}/>
                    </Link>
                    : status === 'loading' && <Link href="/">
                        <Avatar style={{visibility: 'hidden'}}/>
                    </Link>
            }
        </>
    )
}

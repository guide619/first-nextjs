import {useRouter} from 'next/router'

export default function Car(){
    const route = useRouter()
    const {id} = route.query
    
    return <h1>Hello {id}</h1>
}
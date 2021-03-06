import {useRouter} from 'next/router'
import Head from 'next/head'

const url = process.env.SERVER_URL

// export async function getServerSideProps({ params }){
//     const req = await fetch(`${url}/${params.id}.json`);
//     const data = await req.json();
//     return {
//         props: { car : data}
//     }
// }

export async function getStaticProps({ params }){
    const req = await fetch(`${url}/${params.id}.json`);
    const data = await req.json();
    return {
        props: { car : data}
    }
}

export async function getStaticPaths() {
    const req = await fetch(`${url}/car.json`);
    const data = await req.json();

    const paths = data.map(car => {
        return {params : { id : car }}
    })
    return {
        paths,
        fallback : false
    }
}

export default function Car({ car } ){
    const route = useRouter()
    const {id} = route.query

    
    
    return (<>
    <Head>
        <title>{car.color} {car.id} </title>
    </Head>
    <h1>Hello {car.id}</h1>
    </>
    )
}
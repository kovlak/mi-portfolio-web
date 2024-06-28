import { useRouter } from 'next/router'

export default function ProjectDetail() {
    const router = useRouter()
    const { slug } = router.query

    return <h1>Project: {slug}</h1>
}
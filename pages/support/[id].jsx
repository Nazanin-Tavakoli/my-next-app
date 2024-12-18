import { useRouter } from 'next/router';

export default function SupportAdmin() {
    const router = useRouter();
    const { id } = router.query;

    return <p>admin id: {id}</p>;
}

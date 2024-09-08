import { useRouter } from 'next/router';

interface LogoProps{
    link?: boolean,
}

export default ({ link = true } : LogoProps ) => {
    const router = useRouter();

    const logo = <h4>ALIF</h4>;
    return link ? <a href="#" onClick={() => router.push('/')}>{logo}</a> : logo;
};
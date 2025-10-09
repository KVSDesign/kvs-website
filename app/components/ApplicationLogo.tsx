import Image from 'next/image';

export const ApplicationLogo = () => {
    return (
        <Image src="/assets/images/logo.svg" width={66} height={56} alt='KVS' />
    );
};
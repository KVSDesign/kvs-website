interface ApplicationLogoProps {
    color?: 'light' | 'dark';
};

export const ApplicationLogo = ({ color = 'light' }: ApplicationLogoProps) => {
    return (
        <img src={`/assets/images/logo${color === 'dark' ? '-dark' : ''}.svg`} width={66} height={56} alt='KVS' />
    );
};
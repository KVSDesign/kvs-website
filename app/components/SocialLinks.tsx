import Link from "next/link";

export const SocialLinks = () => {
    return (
        <ul className="flex flex-col gap-6 text-primary text-end">
            <li>
                <Link href="#" target="_blank">EMAIL</Link>
            </li>
            <li>
                <Link href="https://www.linkedin.com/company/kvsdesign" target="_blank">LINKEDIN</Link>
            </li>
            <li>
                <Link href="https://www.youtube.com/@KVS.design" target="_blank">YOUTUBE</Link>
            </li>
            <li>
                <Link href="https://www.instagram.com/kvs.services" target="_blank">INSTAGRAM</Link>
            </li>
        </ul>
    )
};
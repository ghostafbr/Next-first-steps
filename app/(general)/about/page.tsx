import type {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'About Page',
    description: 'SEO Description',
    keywords: 'SEO, Description, About, Page, Keywords',
};

const AboutPage = () => {
    return (
        <span className="text-7xl">About Page</span>
    );
};

export default AboutPage;

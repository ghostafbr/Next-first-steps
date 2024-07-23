import type {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'Contact Page',
    description: 'Contact Page Description',
    keywords: 'SEO, Description, Contact, Page, Keywords',
};

const ContactPage = () => {
    return (
            <span className="text-7xl">Contact Page</span>
    );
};

export default ContactPage;

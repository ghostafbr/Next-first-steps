import type {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'Pricing Page',
    description: 'Pricing Page Description',
    keywords: 'SEO, Description, Pricing, Page, Keywords',
};

const PricingPage = () => {
    return (
            <span className="text-7xl">Pricing Page</span>
    );
};

export default PricingPage;

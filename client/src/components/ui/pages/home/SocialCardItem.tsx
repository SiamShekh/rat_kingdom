import WebApp from "@twa-dev/sdk";

const SocialCardItem = ({ title, href, description, cta }: { title: string, href: string, description: string, cta: string }) => {
    return (
        <div className="p-3 mx-1 bg-white bg-opacity-10 rounded-2xl min-w-72 h-32 relative cursor-default">
            <p className="font-montserrat text-white font-bold text-xl">{title}</p>
            <p className="font-montserrat text-white font-normal text-xs">{description}</p>
            <button
                onClick={() => {
                    WebApp.openLink(href);
                }}
                className="bg-white px-4 py-1 font-medium text-black font-montserrat absolute bottom-2 rounded-full">{cta}</button>
        </div>
    );
};

export default SocialCardItem;
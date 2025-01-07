import React, { useRef } from 'react';
import { useSwipeable, SwipeableHandlers } from 'react-swipeable';
import SocialCardItem from './SocialCardItem';

const SwipeableSocialCards: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Swipe handlers
    const handlers: SwipeableHandlers = useSwipeable({
        onSwipedLeft: () => {
            if (containerRef.current) {
                containerRef.current.scrollLeft += 1000;
            }
        },
        onSwipedRight: () => {
            if (containerRef.current) {
                containerRef.current.scrollLeft -= 1000;
            }
        },
        trackMouse: true,
    });

    return (
        <div {...handlers} ref={containerRef} className="w-full flex gap-3 overflow-x-auto scrollbar-hide">
            <SocialCardItem
                title='Join Telegram Channel'
                description='Join our telegram channel for get letest news and updates.'
                cta='Join Channel'
                href={import.meta.env.VITE_TELEGRAM_CHANNEL}
            />
           <SocialCardItem
                title='Subscribe'
                description='Subscribe youtube channel for understand how we work and why we pay you?'
                cta='Subscribe'
                href={import.meta.env.VITE_YOUTUBE_CHANNEL}
            />
        </div>
    );
};

export default SwipeableSocialCards;

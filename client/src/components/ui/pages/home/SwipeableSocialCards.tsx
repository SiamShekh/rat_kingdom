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
            <SocialCardItem />
            <SocialCardItem />
        </div>
    );
};

export default SwipeableSocialCards;

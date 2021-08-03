import React, { useEffect, useRef } from 'react';
import './TopicSuggestion.scss';

function TopicSuggestion(props) {
    const {topics} = props;
    const scrollContainer = useRef(null);

    // setting an width for scroll-container once the initial mount is done
    useEffect(() => {
        let scrollWidth = 0;
        scrollContainer.current.querySelectorAll('.topic-container').forEach(element => {
            scrollWidth += element.offsetWidth;
        });

        scrollContainer.current.style.width = `${scrollWidth}px`;
    }, [])

    return(
        <div className="suggestion-container">
            <div className="left-arrow">&lt;</div>
            <div className="scroll-container" ref={scrollContainer}>
                {topics.map((topic,index)=> (
                    <div className="topic-container"  key={index}>{topic}</div>
                ))}
            </div>
            <div className="right-arrow">&gt;</div>
        </div>
    )

}

export default TopicSuggestion;
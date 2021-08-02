import './TopicSuggestion.scss';

function TopicSuggestion(props) {
    const {topics} = props;

    return(
        <div className="suggestion-container">
            <div className="left-arrow">&lt;</div>
            <div className="scroll-container">
                {topics.map((topic,index)=> (
                    <div className="topic-container"  key={index}>{topic}</div>
                ))}
            </div>
            <div className="right-arrow">&gt;</div>
        </div>
    )

}

export default TopicSuggestion;
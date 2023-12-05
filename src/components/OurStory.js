import {ourStoryTimeLine} from  "../data/ourStory";
import StoryItem from "./StoryItem"
const OurStory = () => {
    return (
        <>
        <section className="feature-section feature-odd" id="our-story">
            <div className="container">
                <h2 className="theme-title">Our Story</h2>
                {ourStoryTimeLine.map((story, index) => {
                    return <StoryItem props={{story:story,index:index}} key={index} />
                })}
            </div>
        </section>
        </>
    );
}

export default OurStory;

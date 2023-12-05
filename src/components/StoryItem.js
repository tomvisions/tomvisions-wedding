import { loadImage400x267 } from "../shared/image";

const StoryItem = (props, key) => {

    const classNames = {classNamePicture: null, classNameContent: null}
    if (props.props.index  % 2 === 0) {
        classNames.classNamePicture = 'col-sm-6';
        classNames.classNameContent = 'col-sm-6';

    } else {
        classNames.classNamePicture = 'col-sm-6  col-sm-push-6';
        classNames.classNameContent = 'col-sm-6  col-sm-pull-6';
    }

    const pictureHead = loadImage400x267(props.props.story.picture);
    return (
        <>
        <div className="love-block-icon">
            <span className="love-icon ti ti-pulse" aria-hidden="true"></span>
            <span>{props.props.story.date}</span>
        </div>
        <div className="row love-block love-block-1 love-block-odd">
            <div className={classNames.classNamePicture}>
                <img src={pictureHead} alt="add a description to get better accessibility" className="img-circle img-responsive center-block"/>
            </div>
            <div className={classNames.classNameContent}>
                <h3 className="h2">{props.props.story.title}</h3>
                <p>
                    {props.props.story.dateDetails}
                </p>
            </div>
        </div>
        </>
    );
}
export default StoryItem;

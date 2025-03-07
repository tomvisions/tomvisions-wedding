import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import {useEffect, useState, useCallback, useRef} from "react";
import {loadImage1280x720, loadImage720x1280, loadImage100x100, setSitePrefix} from "../shared";
import { restAPIUrl } from '../shared/environment';

const Gallery = () => {
    const lightGallery = useRef(null);
    const [items, setItems] = useState([]);
   
    console.log(`${restAPIUrl}/wedding`);
    useEffect(() => {
        fetch(`${restAPIUrl}/wedding`)
            .then(results => results.json())
            .then(data => {
                const items = [];
                data.map((entry, index) => {
                    setSitePrefix(false );

                    if (entry.orientation === 1) {
                        items.push( {id: index, big: loadImage720x1280(entry['key']), small: loadImage100x100(entry['key'])});
                    } else {
                        items.push( {id: index, big: loadImage1280x720(entry['key']), small: loadImage100x100(entry['key'])});
                    }
                    setItems(items);

                    return items;
                });
            });
    }, []);

    const onInit = useCallback((detail) => {
        if (detail) {
            lightGallery.current = detail.instance;
        }
    }, []);

    const getItems = useCallback(() => {
        return items.map((item, index) => {
            return (
                <div
                    style={{display: "inline-block", border:"10px solid #eee"}}
                    key={item.id}
                    className="gallery-item"
                    data-src={item.big}
                    alt="The bigger version"
                >
                    <img className="img-responsive" src={item.small} alt="The Smaller version" />
                </div>
            );
        });
    }, [items]);

    useEffect(() => {
        lightGallery.current.refresh();
    }, [items])

    return (
        <>
            <section className="feature-section feature-even" id="gallery">

                <div className="container">
                <div className="col-lg-12 col-md-4 col-sm-12">
                    <h2 className="theme-title">Photo Gallery</h2>
                    <LightGallery
                        onInit={onInit}
                        speed={500}
                        plugins={[lgThumbnail, lgZoom]}
                    >
                        {getItems()}
                    </LightGallery>
                </div>
            </div>
            </section>
        </>
    );
}

export default Gallery;

import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import {useEffect, useState, useCallback, useRef} from "react";
import {loadImage1200x729, loadImage720x1280, loadImage100x100, setSitePrefix} from "../shared";

const Gallery = () => {
    const lightGallery = useRef(null);
    const [items, setItems] = useState([]);
   // const [galleryImages, setGalleryImages] = useState([]);

   // const lightGallery = useRef<any>(null);
    //let galleryImages = [];


    useEffect(() => {
        fetch('https://api-stage.tomvisions.com/api/v1/wedding')
            .then(results => results.json())
            .then(data => {
                const items = [];
                data.map((entry, index) => {
                    setSitePrefix(false );
                    items.push( {id: index, big: loadImage1200x729(entry['key']), small: loadImage100x100(entry['key'])});
                    setItems(items);

                 //   console.log(entry);
                  //  console.log( {big: loadImage1200x729(entry['key']), small: loadImage100x100(entry['key'])});
//                    setGalleryImages([
  //                      ...galleryImages, {big: loadImage1200x729(entry['key']), small: loadImage100x100(entry['key'])}
    //                ]);

                //        console.log('test')
                 //   console.log(galleryImages);
                });
              //  console.log(data);
              //  console.log(data[0].id);

            //    if (data.orientation === 1) {
              //      galleryImages.push({big: loadImage720x1280(data['key']), small: loadImage100x100(data['key'])});
              //  } else {

        //        setGalleryImages(...galleryImages, {big: loadImage1200x729(data['key']), small: loadImage100x100(data['key'])});
              // }
            });
    }, []);

    const onInit = useCallback((detail) => {
        if (detail) {
            lightGallery.current = detail.instance;
        }
    }, []);

    const getItems = useCallback(() => {
        return items.map((item) => {
            return (
                <div
                    style={{display: "inline-block", border:"10px solid white"}}
                    key={item.id}
                    className="gallery-item"
                    data-src={item.big}
                >
                    <img className="img-responsive" src={item.small} />
                </div>
            );
        });
    }, [items]);

    useEffect(() => {
        lightGallery.current.refresh();
    }, [items])

//    console.log(galleryImages);

   // const [items, setItems] = useState(galleryImages);
  //  console.log(items);

//    useEffect(() => {
  //      lightGallery.current.refresh();
  ///  }, [items]);

/*
    const getItems = useCallback(() => {
        console.log('hee')
        console.log(items);
        return items.map((item) => {
            return (
                <div
                    key={item.id}
                    data-lg-size={item.size}
                    className="gallery-item"
                    data-src={item.src}
                >
                    <img className="img-responsive" src={item.thumb} />
                </div>
            );
        });
    }, [galleryImages]);

*/
    return (
        <>
            <section className="feature-section feature-odd" id="gallery">

                <div className="container">
                <div class="col-lg-12 col-md-4 col-sm-12">
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

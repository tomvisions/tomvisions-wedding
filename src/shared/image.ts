//declare var require;
import { Buffer } from 'buffer'
//const buffer = Buffer.from('hello world', 'utf8')

//const Buffer = require('buffer').Buffer;

const PARAM_FRONTCLOUD = 'https://images.tomvisions.com';
let PARAM_LOCATION : string|null = 'wedding';

export const loadImage400x513 = (image:string) =>  {
    const resizedImage = resizeWithInS3(image, {
      "resize": {
        "width": 400,
        "height": 513,
        "fit": "cover"
      }
    });

    return `${PARAM_FRONTCLOUD}/${resizedImage}`;
  }

  export const loadImage400x267 = (image:string) => {
  console.log("hell")
    console.log(image);
    const resizedImage = resizeWithInS3(image, {
      "resize": {
        "width": 400,
        "height":267,
        "fit": "cover"
      }
    });
    console.log(`${PARAM_FRONTCLOUD}/${resizedImage}`);
    return `${PARAM_FRONTCLOUD}/${resizedImage}`;
  }



  export const loadImage1280x610 = (image:string) => {
    const resizedImage = resizeWithInS3(image, {
      "resize": {
        "width": 1280,
        "height":610,
        "fit": "cover"
      }
    });
    return `${PARAM_FRONTCLOUD}/${resizedImage}`;
  }

   export const loadImage100x100 = (image:string) => {
      const resizedImage = resizeWithInS3(image, {
        "resize": {
          "width": 100,
          "height":100,
          "fit": "outside"
        }
      });
      return `${PARAM_FRONTCLOUD}/${resizedImage}`;
    }

export const loadImage300x300 = (image:string) => {
  const resizedImage = resizeWithInS3(image, {
    "resize": {
      "width": 250,
      "height":250,
      "fit": "outside"
    }
  });
  return `${PARAM_FRONTCLOUD}/${resizedImage}`;
}

    export const loadImage1280x720 = (image:string) => {
      const resizedImage = resizeWithInS3(image, {
        "resize": {
          "width": 1200,
          "height":720,
          "fit": "outside"
        }
      });
      return `${PARAM_FRONTCLOUD}/${resizedImage}`;
    }

    export const loadImage720x1280 = (image:string) => {
        const resizedImage = resizeWithInS3(image, {
          "resize": {
            "width": 720,
            "height":1280,
            "fit": "outside"
          }
        });
        return `${PARAM_FRONTCLOUD}/${resizedImage}`;
      }

  /**
   * Setup Signature so that a specific bucket and key are resized with the resized serverless app that is running along with the edits
   * being applied
   * @param key
   * @param edits
   */
  const resizeWithInS3 = (key:string, edits:any) => {

    if (PARAM_LOCATION) {
      key = `${PARAM_LOCATION}/${key}`;
    }

    const imageRequest = JSON.stringify({
      bucket: "images.tomvisions.com",
      key: key,
      edits: edits
    })

    return `${Buffer.from(imageRequest).toString('base64')}`;
  }

  export const setSitePrefix = (prefix = true) => {
    if (!prefix) {
      PARAM_LOCATION = null;
    }
  }

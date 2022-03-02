import {get} from 'lodash-es'
import {S3Image} from "./Storybook";
export default {
  "_uid": "a45fc449-98c2-407d-b4a4-98d772d8dcd2",
  "author": "Em",
  "images": [{
    "id": 2487699,
    "alt": null,
    "name": "",
    "focus": null,
    "title": null,
    "filename": "https://a.storyblok.com/f/118408/750x753/adc07d2b5b/img_6542.jpeg",
    "copyright": null
  }, {
    "id": 2487701,
    "alt": null,
    "name": "",
    "focus": null,
    "title": null,
    "filename": "https://a.storyblok.com/f/118408/750x824/c3aa20ba3e/img_6543.jpeg",
    "copyright": null
  }, {
    "id": 2487700,
    "alt": null,
    "name": "",
    "focus": null,
    "title": null,
    "filename": "https://a.storyblok.com/f/118408/750x729/1ebd6b8981/img_6544.jpeg",
    "copyright": null
  }],
  "excerpt": "You are the sweetest, most kind, thoughtful, caring, funny, flamboyant little witch in the world",
  "message": {
    "type": "doc",
    "content": [{
      "type": "paragraph",
      "content": [{"text": "Dearest Andrew,", "type": "text"}]
    }, {
      "type": "paragraph",
      "content": [{
        "text": "You are the sweetest, most kind, thoughtful, caring, funny, flamboyant little witch in the world. I wish you the happiest of birthdays and hope you have enjoyed every second of celebrating over the weekend. I’m so excited to see what 30 has in store for you and looking forward to many more fun and silly moments shared together. ",
        "type": "text"
      }]
    }, {"type": "paragraph", "content": [{"text": "Love xxx", "type": "text"}]}]
  },
  "component": "Message"
}


export const Message = (data) => ({
  ...data,
  ...data.content,
  get link() {
    return data.full_slug
  },
  get featured_image() {
    return S3Image(get(data, 'content.images[0].filename') || '')
  }
})

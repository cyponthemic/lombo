export const S3Image = (image) => {
  return image.replace(/https:\/\//, 'https://s3.amazonaws.com/')
}

// https://a.storyblok.com/f/118408/750x753/adc07d2b5b/img_6542.jpeg
export function storyImage(image, option) {
  const imageService = 'https://img2.storyblok.com/'
  const path = image.replace('//a.storyblok.com', '')
  return imageService + option + path
}

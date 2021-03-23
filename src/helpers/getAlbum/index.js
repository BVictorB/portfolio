import fs from 'fs'
import matter from 'gray-matter'

const getAlbum = (album) => {
  const markdown = fs
  .readFileSync(`src/content/albums/${album}.md`)
  .toString()

  const photos = fs.readdirSync(`public/albums/${album}`)
  const parsedMarkdown = matter(markdown)

  return {
    data: {
      slug: album,
      ...parsedMarkdown.data
    },
    photos: photos.filter(photo => photo !== 'main.jpg')
  }
}

export default getAlbum

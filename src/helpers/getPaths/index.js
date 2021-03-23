import fs from 'fs'

const getPaths = (dir, param) => {
  const files = fs.readdirSync(dir)
  const paths = files.map(filename => ({
    params: {
      [param]: filename.replace('.md', '')
    }
  }))

  console.log(paths)

  return paths
}

export default getPaths

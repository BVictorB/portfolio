import fs from 'fs'

const getPaths = (dir, param) => {
  const files = fs.readdirSync(dir)
  const paths = files.map(filename => ({
    params: {
      [param]: filename.replace('.md', '')
    }
  }))

  return paths
}

export default getPaths

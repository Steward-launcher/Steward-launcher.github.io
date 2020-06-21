import marked from 'marked'

export function parseMarkdown(content = '') {
  const text = content.trim()
  
  if (text) {
    return marked(text)
  } else {
    return ''
  }
}
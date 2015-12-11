import { INSERT } from './header'
// import { header, knowledge, interest } from 'semantic-internet-protocol'

const deserilize (data) {
  const [ header, body ] = data
  if(header && header.command === INSERT)
    return deserilize(body)
}

const serilize (data) {
  const [ meta, body ] = data
  if(meta && meta.command === INSERT) {
    const message = serilize(body)
    mate.contentLength = message.length
    return [ meta, body ]
  }
}

export default { deserilize, serialize }

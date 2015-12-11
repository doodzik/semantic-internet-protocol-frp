import { EXPOSE }  from './header'
// import { header, knowledge, interest } from 'semantic-internet-protocol'

export const deserilize (data) {
  const [ header, body ] = data
  if(header && header.command === EXPOSE)
    return deserilize(body)
}

export const serilize (data) {
  const [ meta, body ] = data
  if(meta && meta.command === EXPOSE) {
    const message = serilize(body)
    mate.contentLength = message.length
    return [ meta, body ]
  }
}

export default { deserilize, serialize }

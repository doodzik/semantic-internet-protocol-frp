import { serialize } from './header'
import { header as headerUtil }    from 'semantic-internet-protocol'

export function serialize(data) {
  const [ header, body ] = data
  header.version = 1.0
  return [ headerUtil.serialize(header), body ]
}

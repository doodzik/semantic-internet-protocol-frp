import Middleware from 'frp-middleware'
import { INSERT } from './header'

class Insert extends Middleware {
  run(data) {
    const [ header, body ] = data
    if(header && header.command === INSERT)
      return deserilize(body)
  }

  deserilize(body) {
    return body
  }
}

export default Insert

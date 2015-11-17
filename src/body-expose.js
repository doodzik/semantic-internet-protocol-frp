import Middleware from 'frp-middleware'
import { EXPOSE }  from './header'

class Expose extends Middleware {
  run(data) {
    const [ header, body ] = data
    if(header && header.command === EXPOSE)
      return deserilize(body)
  }

  deserilize(body) {
    return body
  }
}

export default Expose


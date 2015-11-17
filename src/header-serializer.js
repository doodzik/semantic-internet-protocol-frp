import Middleware    from 'frp-middleware'
import { serialize } from './header'

class Serializer extends Middleware {
  serialize(data) {
    return data
  }
}


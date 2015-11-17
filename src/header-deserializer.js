import Middleware      from 'frp-middleware'
import { deserialize } from './header'

class Deserializer extends Middleware {
  constructor() {
    super()
    this.header = false
    this.buffer = ''
  }

  get diff() {
    return this.buffer.length - this.header.contentLength
  }

  deserialize(data) {
    this.buffer += data

    if(!this.header)
      [ this.header, this.buffer ] = deserialize(buffer)
    if(!!this.header && this.diff > -1)
      return this._seperateHeaderAndBody()
  }

  _reset(){
    this.buffer  = this.buffer.slice(this.diff)
    this.header  = false
  }

  _seperateHeaderAndBody() {
    const header = this.header
    const body   = this.buffer.slice(0, header.contentLength)
    this._reset(diff)
    return [ header, body ]
  }
}

export default Deserializer

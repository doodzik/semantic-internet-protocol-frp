import Deserializer from './middleware-header-deserializer'
import Serializer   from './middleware-header-serializer'

class Header {
  constructor() {
    this.deserializer = new Deserializer()
    this.serializer   = new Serializer()
  }

  serialize() {
    return this.serializer.serialize
  }

  deserialize() {
    return this.deserializer.deserialize
  }
}

export default Header

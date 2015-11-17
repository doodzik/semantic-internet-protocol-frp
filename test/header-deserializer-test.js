import assert       from 'assert'
import Deserializer from '../src/middleware-header-deserializer'

describe('Deserializer', () => {
  it('#diff diffs buffer.length and header.contentLength', () => {
    const des = new Deserializer()
    des.buffer = '123'
    des.header = { contentLength: 6 }

    assert(des.diff, -3)

    des.buffer = '1234567890'
    assert(des.diff, 7)
  })

  // describe('#deserialize', () => {
  //   it('', () => {
  //   })
  // })

  // describe('#_seperateHeaderAndBody', () => {
  //   it('', () => {

  //   })
  // })

  // describe('#_reset', () => {
  //   it('', () => {
  //   })
  // })
})


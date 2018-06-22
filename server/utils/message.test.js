const { generateMessage, generateLocationMessage } = require('./message')

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    const from    = 'testUser'
    const text    = 'Hello text'
    const message = generateMessage(from, text)

    expect(message).toMatchObject({ from, text: 'Hello text' })
    expect(typeof message.createdAt).toBe('number')
  })
})

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    const from      = 'testUser'
    const latitude  = 45
    const longitude = 41
    const url       = 'https://google.com/maps?q=45,41'
    const message   = generateLocationMessage(from, latitude, longitude)

    expect(message).toMatchObject({ from, url })
    expect(typeof message.createdAt).toBe('number')
  })
})
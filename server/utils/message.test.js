const { generateMessage } = require('./message')

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    const from = 'testUser'
    const text = 'Hello text'
    const message = generateMessage(from, text)

    expect(typeof message).toBe('object')
    expect(message).toMatchObject({from, text: 'Hello text'})
    expect(typeof message.createdAt).toBe('number')
  })
})
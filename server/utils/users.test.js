const { Users } = require('./users')

describe('Users', () => {
  var users
  beforeEach(() => {
    users = new Users()
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Test Room'
    }, {
      id: '2',
      name: 'Blob',
      room: 'Guest Room'
    }, {
      id: '3',
      name: 'Mar',
      room: 'Test Room'
    }]
  })

  it('should add new user', () => { 
    const users = new Users()
    const user = {
      id: '123',
      name: 'testUser',
      room: 'testRoom'
    }
    const res = users.addUser(user.id, user.name, user.room)

    expect(users.users).toEqual([user])
    expect(res).toMatchObject({id: '123', name: 'testUser', room: 'testRoom'})
  })

  it('should remove a user', () => {
    const removedUser = users.removeUser('1')

    expect(removedUser).toMatchObject({id: '1', name: 'Mike', room: 'Test Room'})
    expect(users.users).toEqual([{id: '2', name: 'Blob', room: 'Guest Room'}, {id: '3', name: 'Mar', room: 'Test Room'}])
  })

  it('should not remove user with non-existing id', () => {
    const removedUser = users.removeUser('123')

    expect(removedUser).toBeUndefined()
    expect(users.users).toEqual(users.users)
  })

  it('should find user', () => {
    const user = users.getUser('2')
    expect(user).toMatchObject({id: '2', name: 'Blob', room: 'Guest Room'})
  })

  it('should not find user with non-existing id', () => {
    const user = users.getUser('321')
    expect(user).toBeUndefined()
  })

  it('should return names for Test Room', () => {
    const userList = users.getUserList('Test Room')
    expect(userList).toEqual(['Mike', 'Mar'])
  })

  it('should return names for Guest Room', () => {
    const userList = users.getUserList('Guest Room')
    expect(userList).toEqual(['Blob'])
  })
})
const postsHandlers = require('./index')

describe('Services', () => {
  describe('Posts', () => {
    it('should create a post', async () => {
      const req = {
        body: {
          userId: 1,
          title: "testing post",
          body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }
      }

      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      }

      const mockUsers = [
        { "id": 1 },
        { "id": 2 }
      ]

      const axios = {
        get: jest.fn().mockResolvedValue({ data: mockUsers }),
        post: jest.fn().mockResolvedValue({ data: { id: 1000 } })
      }

      await postsHandlers({ axios }).post(req, res)

      expect(res.status.mock.calls).toEqual([
        [201]
      ])
      expect(res.send.mock.calls).toEqual([
        [{ id: 1000 }]
      ])
      expect(axios.get.mock.calls).toEqual([
        ['https://jsonplaceholder.typicode.com/users']
      ])
      expect(axios.post.mock.calls).toEqual([
        ['https://jsonplaceholder.typicode.com/posts', req.body]
      ])
    })

    it('should not create a post if userId does not exists', async () => {
      const req = {
        body: {
          userId: 30,
          title: "testing post",
          body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }
      }

      const res = {
        sendStatus: jest.fn()
      }

      const mockUsers = [
        { "id": 1 },
        { "id": 2 }
      ]

      const axios = {
        get: jest.fn().mockResolvedValue({ data: mockUsers }),
        post: jest.fn().mockResolvedValue({ data: { id: 1000 } })
      }

      await postsHandlers({ axios }).post(req, res)

      expect(axios.get.mock.calls).toEqual([
        ['https://jsonplaceholder.typicode.com/users']
      ])
      expect(axios.post.mock.calls).toEqual([])
      expect(res.sendStatus.mock.calls).toEqual([
        [403]
      ])
    })
  })
})

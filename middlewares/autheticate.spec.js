const authenticate = require('./autheticate')

describe('Middlewares', () => {
  describe('Authenticate', () => {
    it('should have id: 1', async () => {
      const req = {
        header: jest.fn().mockReturnValue("1")
      }

      const res = {
        sendStatus: jest.fn()
      }

      const next = jest.fn()

      authenticate(req, res, next)
      expect(req.header.mock.calls).toEqual([
        ['user_id']
      ])
      expect(res.sendStatus.mock.calls).toEqual([])
      expect(next.mock.calls).toEqual([[]])
    })

    it('should fail if the user is not the one with id: 1', async () => {
      const req = {
        header: jest.fn().mockReturnValue("2")
      }

      const res = {
        sendStatus: jest.fn()
      }

      const next = jest.fn()

      authenticate(req, res, next)
      expect(req.header.mock.calls).toEqual([
        ['user_id']
      ])
      expect(res.sendStatus.mock.calls).toEqual([
        [403]
      ])
      expect(next.mock.calls).toEqual([])
    })
  })
})

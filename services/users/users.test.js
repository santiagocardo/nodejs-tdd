const userHandlers = require('./index')

const axios = {
  get: jest.fn().mockResolvedValue({ data: 1 }),
  post: jest.fn().mockResolvedValue({ data: 1 }),
  patch: jest.fn().mockResolvedValue({ data: 1 }),
  delete: jest.fn().mockResolvedValue()
}

const userServices = userHandlers({ axios })

describe('Services', () => {
  describe('Users', () => {
    describe('get', () => {
      it('makes axios get call properly', async () => {
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn()
        }

        await userServices.get({}, res)

        expect(res.status.mock.calls).toEqual([
          [200]
        ])
        expect(res.send.mock.calls).toEqual([
          [1]
        ])
        expect(axios.get.mock.calls).toEqual([
          ['https://jsonplaceholder.typicode.com/users']
        ])
      })
    })

    describe('post', () => {
      it('makes axios post call properly', async () => {
        const req = {
          body: 'body request'
        }

        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn()
        }

        await userServices.post(req, res)

        expect(res.status.mock.calls).toEqual([
          [201]
        ])
        expect(res.send.mock.calls).toEqual([
          [1]
        ])
        expect(axios.post.mock.calls).toEqual([
          ['https://jsonplaceholder.typicode.com/users', 'body request']
        ])
      })
    })

    describe('patch', () => {
      it('makes axios patch call properly', async () => {
        const req = {
          body: 'body request',
          params: {
            id: 1
          }
        }

        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn()
        }

        await userServices.patch(req, res)

        expect(res.status.mock.calls).toEqual([
          [200]
        ])
        expect(res.send.mock.calls).toEqual([
          [1]
        ])
        expect(axios.patch.mock.calls).toEqual([
          ['https://jsonplaceholder.typicode.com/users/1', 'body request']
        ])
      })
    })

    describe('delete', () => {
      it('makes axios delete call properly', async () => {
        const req = {
          params: {
            id: 1
          }
        }

        const res = {
          sendStatus: jest.fn()
        }

        await userServices.delete(req, res)

        expect(res.sendStatus.mock.calls).toEqual([
          [204]
        ])
        expect(axios.delete.mock.calls).toEqual([
          ['https://jsonplaceholder.typicode.com/users/1']
        ])
      })
    })
  })
})

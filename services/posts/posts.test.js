const supertest = require('supertest')

const app = require('../../app')

describe('API /posts', () => {
  describe('POST', () => {
    it('should create a new post', async () => {
      const respose = await supertest(app)
        .post('/posts')
        .send({ userId: 2 })
        .set('user_id', 1)
        .set('Content-Type', 'application/json')

      expect(respose.statusCode).toEqual(201)
      expect(respose.body.userId).toEqual(2)
      expect(respose.body).toHaveProperty('id')
    })

    it('should not create a new post for user_id: 2', async () => {
      const respose = await supertest(app)
        .post('/posts')
        .send({ userId: 2 })
        .set('user_id', 2)
        .set('Content-Type', 'application/json')

      expect(respose.statusCode).toEqual(403)
    })
  })
})

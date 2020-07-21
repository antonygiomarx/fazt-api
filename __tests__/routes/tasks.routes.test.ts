import router from '../../src/routes/users.routes';
import server from '../utils/server';
import { clearDatabase, closeDatabase, connect } from '../utils/dbHandler';

beforeAll(async () => await connect());
afterEach(async () => await clearDatabase());
afterAll(async () => await closeDatabase());

describe('Route - Tasks', () => {
  const request = server(router);
  it('Get list of Tasks', async () => {
    const result = await request.get('/');
    expect(result.status).toBe(200);
    expect(result.body.data).toEqual([]);
  });
});

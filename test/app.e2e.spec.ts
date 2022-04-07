import request from 'supertest';
import App from '../src/app';
import AppController from '../src/app/app.controller';

describe('AppController (e2e)', () => {
    let app: App
    beforeAll(async () => {
        app = new App([
            new AppController()
        ]);

    });

    it('/health-check (GET)', () => {
        return request(app.getHttpServer())
            .get('/health-check')
            .expect(200)
            .expect('hello world');
    });
});

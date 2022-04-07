import request from 'supertest';
import App from '../../app';
import AppController from '../app.controller';
import * as express from 'express';



describe('The AppController', () => {
    describe('GET /', () => {
        describe('if app is wokring correctly', () => {
            it('should resoond with hello-world', () => {
                const controller = new AppController()
                controller.appService.checkHealth = jest.fn().mockReturnValue("hello world")
                const app = new App([
                    controller
                ]);

                process.env.PORT = "5000"
                return request(app.getServer())
                    .get(controller.path)
                    .expect(200)
            });
        });
    });
});

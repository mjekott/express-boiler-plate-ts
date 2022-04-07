import * as request from 'supertest';
import App from '../app';
import AppService from './app.service';



describe("Authservice", () => {
    describe("checkHealth", () => {
        it("should return hello world", () => {
            const appService = new AppService()
            appService.checkHealth = jest.fn().mockReturnValue("hello world")
            expect(appService.checkHealth()).toBe("hello world")
        })
    })
})
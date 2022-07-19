const { fastify, start } = require("./index");

afterAll(async () => {await fastify.close()});
describe("Server", () => {
    test("Server starts", async () => {
        const spy = jest.spyOn(fastify, 'listen');
        await start();
        expect(spy).toHaveBeenCalled();
    }) ;
});
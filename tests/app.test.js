const request = require("supertest");
const app = require("../app");

require("dotenv").config();

describe("GET /", () => {
    it("should show if the server is alive", async () => {
        const res = await request(app).get("/");
        expect(res.statusCode).toBe(200);
        expect(res.body.isAlive).toBe(true)
    });
});
const request = require("supertest");
const app = require("../../app");

require("dotenv").config();

describe("POST /api/v1/signup", () => {
    it("should sign up the user", async () => {
        const validUser = {
                
            first_name: "Test",
            last_name: "Testy",
            handle: "@test",
            email: "test@test.com",
            password: 12345
        }

const invalidUser = {
                
            first_name: "",
            last_name: "",
            handle: "",
            email: "",
            password: 1234
        }
        const res = await request(app).post("/api/v1/signup");
        expect(res.statusCode).toBe(201);
    });
});
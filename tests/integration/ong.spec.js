const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/index");
describe("ONG", () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => await connection.destroy());
  it("should be able to create a new ONG", async () => {
    const response = await request(app)
      .post("/ongs")
      .send({
        name: "DOTA2",
        email: "cont@tes.com",
        whatsapp: "92984319670",
        city: "Manaus",
        uf: "AM"
      });
    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
    console.log(response.body);
  });
});

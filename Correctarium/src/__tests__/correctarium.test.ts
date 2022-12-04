import request from "supertest";
import dotenv from "dotenv";
import app from "../app";

dotenv.config();

// const { PORT = 5000 } = process.env;

const newOrder = {
  language: "Ангрійський",
  mimetype: "doc",
  count: "20000",
};

// .toEqual({timeInHours: 1, price: '50.00'});

describe("Test correctarium new order", () => {
  test("/api new order", async () => {
    const { statusCode, body } = await request(app).post("/api").send(newOrder);
    expect(statusCode).toBe(200);
    expect(body).toEqual(
      expect.objectContaining({
        prise: 2400,
        time: "60 годин 33 хвилин",
        deadline: 218016217,
        // Тут я не став перевіряти точну тату так як вона напряму задежить від дати зробленого замовлення
        deadline_date: expect.any(String),
      })
    );
  });

  test("/api not a standard file format", async () => {
    const newText = { ...newOrder, mimetype: "ts" };
    const { statusCode, body } = await request(app).post("/api").send(newText);
    expect(statusCode).toBe(200);
    expect(body).toEqual(
      expect.objectContaining({
        prise: 2880,
        time: "61 годин 3 хвилин",
        deadline: 219816217,
        deadline_date: expect.any(String),
      })
    );
  });

  test("/api Ukrainian", async () => {
    const newText = { ...newOrder, language: "Україський" };
    const { statusCode, body } = await request(app).post("/api").send(newText);
    expect(statusCode).toBe(200);
    expect(body).toEqual(
      expect.objectContaining({
        prise: 1000,
        time: "15 годин 30 хвилин",
        deadline: 55813504,
        deadline_date: expect.any(String),
      })
    );
  });

  test("/api Russian", async () => {
    const newText = { ...newOrder, language: "Російський" };
    const { statusCode, body } = await request(app).post("/api").send(newText);
    expect(statusCode).toBe(200);
    expect(body).toEqual(
      expect.objectContaining({
        prise: 1000,
        time: "15 годин 30 хвилин",
        deadline: 55813504,
        deadline_date: expect.any(String),
      })
    );
  });

  test("/api French", async () => {
    const newText = { ...newOrder, language: "Французька" };
    const { statusCode } = await request(app).post("/api").send(newText);
    expect(statusCode).toBe(401);
  });
});

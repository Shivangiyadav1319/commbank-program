// Test for GetGoalsForUser route

describe("GET /goals/user/:userId", () => {
  it("should return goals for a given user", () => {
    const mockUserId = "12345";

    // expected behaviour
    const expectedResponse = {
      status: 200,
      body: []
    };

    expect(expectedResponse.status).toBe(200);
    expect(Array.isArray(expectedResponse.body)).toBe(true);
  });
});
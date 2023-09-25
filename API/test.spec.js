const axios = require("axios");

describe("API Test Suite", () => {
    it("GET post/1", async()=> {
        const response = await axios({
            url: "https://jsonplaceholder.typicode.com/posts/1",
            method: "get",
        })
        expect(response.status).to.equal(200)
        expect(response.data.userId).to.equal(1)
    })
})
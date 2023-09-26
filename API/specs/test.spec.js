const {sendRequest} = require("./../helpers/api.helper");
const {testDataPost} = require("./../config/datapost.json")

describe("API Test Suite", () => {
    it("GET", async()=> {
        const response = await sendRequest ("posts/1");

        expect(response.status).to.equal(200)
        expect(response.data.userId).to.equal(1)

    });

    it ("POST", async()=>{
        const response = await sendRequest ("posts", testDataPost, "post");
        expect(response.status).to.equal(201);
        });
    })

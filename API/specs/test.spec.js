const {sendRequest} = require("./../helpers/api.helper");
const {testDataPost} = require("./../config/datapost.json");
const {testDataPut} = require("./../config/dataput.json")

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

    it ("PUT", async()=>{
            const response = await sendRequest ("posts/1", testDataPut, "put");
            expect(response.status).to.equal(200);
            });   

    it("DELETE", async () => {
            const response = await sendRequest("posts/1", null, "delete");
            expect(response.status).to.equal(200);
            });        
    })

const axios = require("axios");

describe("API Test Suite", () => {
    it("GET", async()=> {
        const response = await axios({
            url: "https://www.epam.com/content/epam/en/_jcr_content/contexthub.pagedata.json",
            method: "get",
        })
 //       console.log(response.data);
  expect(response.status).to.equal(200)
  expect(response.data.title).to.equal('EPAM | Software Engineering & Product Development Services  ')

    });

    it ("POST", async()=>{
        const response = await axios({
            method: "post",
            url: "https://jsonplaceholder.typicode.com/posts",
            headers: {'Content-type': 'application/json; chartset=UTF-8'},
            data: {
                title: 'Java',
                description: 'Script',
                userID: 'is fun'
            },
        })
    })
})
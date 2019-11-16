var request = require("supertest");
var app = require("../routes/index.js");

describe("get /", ()=>{
    it('should render hello world 200', (done) => {     
        chai.request(router).get('/').then((res)=>{
                    expect(res.body.message).to.equal("Hello World");
                    expect(res).to.have.status(200);
                    done();
                })
        })    
    })

    /*
    it("respond with hello world", (done)=>{
        request(app).get("/").then((res)=>{
            expect((res.body.message).to.equal("hello world"),done);
        });
    });

});*/
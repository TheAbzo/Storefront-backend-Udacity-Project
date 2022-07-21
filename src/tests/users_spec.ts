import { Users, User } from "../models/users";

const user = new Users()

const userTest:User = {
    "id":1,
    "first_name":"Abzo",
    "last_name":"The Abzo",
    "password":"123"
}

describe("Users Model", () => {
    
    //id to be set in index
    let id = 1

    it('Create method test', async () => {
        const result = await user.create(userTest)
        expect(result).toBeInstanceOf(Object);
    });

    it('Index method test', async () => {
        const result = await user.index();
        // console.log("Result of index iddddddddd" , result[0].id)
        id = result[0].id
        expect(result).toBeInstanceOf(Array);
    });

    it('Show method test', async () => {
        const result = await user.show(id);
        // console.log("result in show", result)
        expect(result).toBeInstanceOf(Object);
    });

    it('Delete method test', async () => {
        const result = await user.delete(1)
        expect(result).toBe(true);
    });
    
})

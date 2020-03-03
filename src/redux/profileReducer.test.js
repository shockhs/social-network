import profileReducer, { addPostActionCreater, deletePostActionCreater } from "./profileReducer";

let state = {
    postsData: [
        { id: 1, likesCount: 232, message: "Тестовое сообщение 1" },
        { id: 2, likesCount: 15, message: "Тестовое сообщение 2" },
        { id: 3, likesCount: 24, message: "Тестовое сообщение 3" },
        { id: 4, likesCount: 55, message: "Тестовое сообщение 4" },
        { id: 5, likesCount: 125, message: "Тестовое сообщение 5" }
    ]
}

test('add new post test', () => {
    let action = addPostActionCreater("Hello World");
    let newState = profileReducer(state,action);
    expect(newState.postsData.length).toBe(6);
});

test('check new post message', () => {
    let action = addPostActionCreater("Hello World");
    let newState = profileReducer(state, action);
    expect(newState.postsData[5].message).toBe("Hello World");
});

test('delete post by id', () => {
    let action = deletePostActionCreater(5);
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(4);
});

test('check deleted post by id', () => {
    let action = deletePostActionCreater(5);
    let newState = profileReducer(state, action);
    for (let i = 0; i < newState.postsData.length; i++)
    {
        expect(newState.postsData[i].id).not.toBe(5);
    }
});
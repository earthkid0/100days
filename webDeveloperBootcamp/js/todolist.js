// let list = prompt("입력히세요.")
// while (true) {
//     let todoList = [];
//     if (list == "new") {
//         todoList.push(list)
//         console.log(`${todoList}`)
//         list = prompt("추가")
//     }
//     if (list == "quit") {
//         console.log("QUIT")
//         break
//     }
// }


let todoList = [];
while (true) {
    let choice = prompt("chat")

    if (choice == "new") {
        let memo = prompt("add")
        todoList.push(memo)
        console.log(`add to memo: ${memo}`)
    } else if (choice == "list") {
        console.log("**************");
        for (i = 0; i < todoList.length; i++) {
            console.log(`${i}: ${todoList[i]}`);
        };
        console.log("**************");
    } else if (choice == "delete") {
        const index = prompt("choice delete index:")
        const deleted = todoList.splice(index, 1)
        console.log(`delete to ${index}: ${deleted} memo`)
    } else if (choice == "quit") {
        console.log("QUIT")
        break
    } else {
        console.log("unknown index")
    }
}
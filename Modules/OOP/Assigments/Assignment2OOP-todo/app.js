// Task: Build a Todo Appa
// In this assignment, you are going to build a todo app. Here's a guide on what the app should have:
// User can run the app.
// User can view their todo list.
// User can add a new todo.
// User can edit an existing todo item.
// User can toggle a todo completed status.
// User can delete a todo.
// User can quit the app.

const prompt = require("prompt-sync")();
let arrOfObj = []

class myTodo {
    constructor(para1) {
        if(para1) {this.value = para1 } 
        else {this.value = "none"}
    }
    view_myTodo() {
        consoleLogTodo()
    }
    add_myTodo() {
        let tempstr = prompt('Write in your Todo :')
        let tempobj = {'Todo': tempstr, 'toggle': '❌'}
        this.Todo = tempstr;
        this.toggle = '❌';
        arrOfObj.push(this)
        // console.log(arrOfObj)
        // console.log(this, typeof this)
        return arrOfObj, this
    }
    edit_myTodo() {
        let tempstr = prompt('Which Todo # you wish to EDIT :')
        if(!isInputValid(parseInt(tempstr))) return console.log("********************************invalid input")
        this.Todo = prompt('Pls edit Todo :')
        this.toggle = '❌'
        arrOfObj.splice(parseInt(tempstr)-1, 1)
        arrOfObj.splice(parseInt(tempstr)-1, 0, this)
        return arrOfObj, this
    }
    toggle_myTodo() {
        let tempstr = prompt('Enter Todo # to Toggle complete :')
        if(!isInputValid(parseInt(tempstr))) return console.log("********************************invalid input")
        let ind = parseInt(tempstr)

        if(arrOfObj[ind-1].toggle == '❌') {
            arrOfObj[ind-1].toggle = '✅'
        } else if (arrOfObj[ind-1].toggle == '✅') {  
            arrOfObj[ind-1].toggle = '❌'
        }
        return arrOfObj, this
    }
    delete_myTodo() {
        let tempstr = prompt('Enter Todo # to DELETE :')
        if(!isInputValid(parseInt(tempstr))) return console.log("********************************invalid input")
        let ind = parseInt(tempstr)
        arrOfObj.splice(ind - 1, 1)
        return arrOfObj, this
    }
    quit_myTodo() {
        process.exit(0);
    }
    obj_myTodo() {
        console.log(this);
        console.log(arrOfObj);
        console.log(myTodo);
    }
}
function consoleLogTodo() {
    if(arrOfObj.length == 0) {
        console.log('[Your Todo list is empty]')
    } else {
        arrOfObj.forEach((x,ind) => {
            console.log(
                `# ${ind+1} ${x.Todo} ${x.toggle}`
            )
        })
    }
}
function isInputValid(x) {
    if(x <= arrOfObj.length) {return true;}
    else { return false; }
}

function landingPage() { 
    console.log(`
    #
    #
    #
    #
    `)
    consoleLogTodo();
    console.log(`
    ----------TodoApp-------------------------------------------------------
    |   What would you like to do? |
    |    1: View my todo list      |
    |    2: Add new todo list      |
    |    3: Edit a todo list       |
    |    4: Toggle complete a todo |
    |    5: Delete a todo          |
    |    6: Quit app               |
    `)
    const menuChosen = prompt("Enter menu number (1-6) : ")
    switch(parseInt(menuChosen)) { //switch statement has to block scoped
        case 1: {console.log(`You entered ${menuChosen} =========== Viewing your Todo list`); new myTodo().view_myTodo(); landingPage();}
            break;
        case 2: {console.log(`You entered ${menuChosen} =========== `); new myTodo().add_myTodo(); landingPage(); }
            break;
        case 3: {console.log(`You entered ${menuChosen} =========== `); new myTodo().edit_myTodo(); landingPage();}
            break;
        case 4: console.log(`You entered ${menuChosen} =========== `); new myTodo().toggle_myTodo(); landingPage();
            break;
        case 5: {console.log(`You entered ${menuChosen} =========== Delete a Todo`); new myTodo().delete_myTodo(); landingPage();}
            break;
        case 6: {console.log(`You entered ${menuChosen} =========== EXITING`); new myTodo().quit_myTodo(); }
            break;
        case 7:  new myTodo().obj_myTodo(); landingPage();
            break;
        default: console.log('Invalid input, Try again...'); landingPage();
            break;
    }
}
landingPage()



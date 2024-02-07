interface tasksInterface{
    Tasks: Array<string>;
    addTask(task:string):number;
    listAllTasks(): void;
    deleteTask(task:string): number;
}

class Tasks implements tasksInterface{
    
    constructor() {}

    Tasks: Array<string>=[];

    addTask(task: string): number {
        let length: number;

        length = this.Tasks.push(task);
        console.log(task + " has been added to our Tasks Array")
        return length;
    }

    listAllTasks(): void {
        this.Tasks.forEach(function(element){
            console.log("task" + element + "is on our Tasks Array")
        })
    }

    deleteTask(task: string): number {
        let index: number;
        index = this.Tasks.indexOf(task);
        if (index > -1) {
            this.Tasks.splice(index, 1);
            console.log(task + " has been deleted from out Tasks Array.");
        }
        else {
            console.log(task + " was not found in our Tasks Array");
        }
        return this.Tasks.length;

    }
}
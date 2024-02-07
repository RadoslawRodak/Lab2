var Tasks = /** @class */ (function () {
    function Tasks() {
        this.Tasks = [];
    }
    Tasks.prototype.addTask = function (task) {
        var length;
        length = this.Tasks.push(task);
        console.log(task + " has been added to our Tasks Array");
        return length;
    };
    Tasks.prototype.listAllTasks = function () {
        this.Tasks.forEach(function (element) {
            console.log("task" + element + "is on our Tasks Array");
        });
    };
    Tasks.prototype.deleteTask = function (task) {
        var index;
        index = this.Tasks.indexOf(task);
        if (index > -1) {
            this.Tasks.splice(index, 1);
            console.log(task + " has been deleted from out Tasks Array.");
        }
        else {
            console.log(task + " was not found in our Tasks Array");
        }
        return this.Tasks.length;
    };
    return Tasks;
}());

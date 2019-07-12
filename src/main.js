let rover = {
    direction: 'N',
    position: [0, 0],
};
let object;
let columns;
let rows;
let objectStatus;
let tempMove;

//create world
let mars = createWorld(5, 5);

function createWorld(columns, rows) {
    let world = [];
    for (let i = 0; i < columns; i++) {
        world[i] = new Array(rows);
    }
    object = [Math.random() * columns, Math.random() * rows];
    columns = columns;
    rows = rows;
    return world;
}

function turning() {
    switch (turn) {
        case 'left':
            left();
            break;
        case 'right':
            right();
            break;
    }
}

function left() {
    switch (rover.direction) {
        case 'N':
            rover.direction = 'W';
            break;
        case 'E':
            rover.direction = 'N';
            break;
        case 'S':
            rover.direction = 'E';
            break;
        case 'W':
            rover.direction = 'S';
            break;
    }
}

function right() {
    switch (rover.direction) {
        case 'N':
            rover.direction = 'E';
            break;
        case 'E':
            rover.direction = 'S';
            break;
        case 'S':
            rover.direction = 'W';
            break;
        case 'W':
            rover.direction = 'N';
            break;
    }
}

function forward() {
    tempMove = rover.position;
    switch (rover.direction) {
        case 'N':
            tempMove = tempMove[0] - 1;
            break;
        case 'E':
            tempMove = tempMove[1] + 1;
            break;
        case 'S':
            tempMove = tempMove[0] + 1;
            break;
        case 'W':
            tempMove = tempMove[1] - 1;
            break;
    }
    objectCheck('forward');
    roundTheWorld('forward');
}

function backward() {
    tempMove = rover.position;
    switch (rover.direction) {
        case 'N':
            tempMove = tempMove[0] + 1;
            break;
        case 'E':
            tempMove = tempMove[1] - 1;
            break;
        case 'S':
            tempMove = tempMove[0] - 1;
            break;
        case 'W':
            tempMove = tempMove[1] + 1;
            break;
    }
    objectCheck('backward');
    roundTheWorld('backward');
}

function objectCheck(object, movement) {
    if (object == tempMove) {
        console.log('Looks like there is an object in the way, you cannot move any further ' + movement)
    }
}

function roundTheWorld(columns, rows) {
    if (rover.position[0] < 0) {
        rover.position[0] = columns - 1;
    } else if (rover.position[0] >= columns) {
        rover.position[0] = 0;
    } else if (rover.position[1] < 0) {
        rover.position[1] = rows - 1;
    } else if (rover.position[1] >= rows) {
        rover.position[1] = 0;
    }
}

function commands(command) {
    for (let i = 0; i < command.length; i++) {
        switch (command[i]) {
            case 'b':
                backward();
                break;
            case 'f':
                forward();
                break;
            case 'r':
                turn = 'right';
                turning();
                break;
            case 'l':
                turn = 'left';
                turning();
                break;
        }
    }
}
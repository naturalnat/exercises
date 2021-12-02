/*----------------------------------------------------------------------------------------------------------------
 General Notes
 
 * For all exercises, please prefer readability/expressiveness over maximum algorithmic efficiency.
 
 * You may add any other code such as functions, data structures, etc. that you may want in order to better complete
 an exercise, beyond what is explicitly asked for. Feel free to reuse code for multiple exercises as well.
-----------------------------------------------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------------------------------------------
1) Create a function that takes an array of integers as its lone argument and returns an array containing
 the square of each value in the input.
 
 For example, an input of `[2, 4, 6, 8, 10]` should result in an output of `[4, 16, 36, 64, 100]`.
-----------------------------------------------------------------------------------------------------------------*/
let array = [2, 4, 6, 8, 10]

function square(array) {
    return array.map(x => Math.pow(x, 2));
};

square(array);

/*----------------------------------------------------------------------------------------------------------------
 2) Create a function that takes an array of counter objects (see example) as its lone argument and returns
 the sum of all of the counters' `count` properties.
 
 For example, an input of `[{count: 1}, {count: 2}, {count: 3}]` should result in an output of `6`.
-----------------------------------------------------------------------------------------------------------------*/

let counterobj = [{ count: 1 }, { count: 2 }, { count: 3 }];

function counter(counterobj) {
    return counterobj.map(counter => counter.count).reduce((prev, curr) => prev + curr);
};

counter(counterobj);

/*----------------------------------------------------------------------------------------------------------------
 3) Create a function that takes an object in the general shape of `movies` (see below) as the first argument,
 and the name of an actor as the second argument. The function should return an object that is equivalent to
 the input, only with the given actor's name included in each movie's `actors` array. If the name is already
 present, it should not be added again. The function should not mutate the input object, or any of its sub-structures.
 
 Note: `movies` is just an example, the function should not assume that the movies in the object will be hard-coded.
-----------------------------------------------------------------------------------------------------------------*/
const movies = {
    theGoonies: {
        actors: [
            "Josh Brolin",
            "Corey Feldman",
            "Kerri Green",
        ],
    },

    momento: {
        actors: [
            "Guy Pearce",
            "Carrie-Anne Moss",
        ],
    },
}

const name = "Ben Affleck"

function addActor(movies, name) {
    let results = JSON.parse(JSON.stringify(movies))
    counter = 0;

    Object.values(movies).forEach(function (arr) {
        if (!arr.actors.includes(name)) {
            results[Object.keys(movies)[counter]].actors.push(name);
        }
        counter++
    });
    return results;
};



/*----------------------------------------------------------------------------------------------------------------
 4) Create a procedure that takes an object in the general shape of `movies` as its lone argument and appends
 an unordered list of every actor's name to the DOM's `body` element.
 
 The names in the list should be unique (no actor's name should appear in the list more than once).
 If the list element already exists in the DOM, the procedure should replace the existing list with a new one.
 
 Bonus points if the names are alphabetically sorted :)
-----------------------------------------------------------------------------------------------------------------*/

function domReplacer() {
    const newList = [...document.querySelectorAll('body *')];
    const texts = new Set(newList.map(x => x.innerHTML));
    let removed = false;
    newList.forEach(item => {
        if (texts.has(item.innerHTML)) {
            texts.delete(item.innerHTML);
        }
        else {
            item.remove();
            removed = true;
        }
    })
    if (removed == true) {
        document.body.append('This list has been replaced due to duplicates.');
    }
}

function domAdder(listItem) {
    let domlist = document.createElement("ul");

    listItem.forEach((function (ele) {
        let node = document.createElement("li");
        let text = document.createTextNode(ele);
        node.appendChild(text);
        domlist.appendChild(node);
    }))
    document.body.appendChild(domlist);
    domReplacer();
}

function appendMovieList(movies) {
    let list = []

    Object.values(movies).forEach(function (arr) {
        arr.actors.forEach(function (actor) {
            list.push(actor);
        })
    })
    
    domAdder(list.sort((a, b) => a.localeCompare(b)));
}

appendMovieList(movies)

/*----------------------------------------------------------------------------------------------------------------
5) Create a procedure that retrieves the data from the REST API endpoint hosted here: https://jsonplaceholder.typicode.com/posts.
The procedure should then log the id of the first post with a userId of 7 and a title that begins with the letter "e"
(or undefined if it does not exist). It should also log any potential retrieval errors using `console.error`.
-----------------------------------------------------------------------------------------------------------------*/

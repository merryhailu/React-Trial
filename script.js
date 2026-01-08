let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
console.log(fruits[2]);

fruits.sort();
console.log(fruits);

for (let fruit of fruits) {
    console.log(fruit);
}


const person1 = {
    name: "John",
    age: 30,
    city: "New York",
    beverage: {
        morning: "coffee",
        afternoon: "tea",
    },
    action: function () {
        return "time for " + this.beverage.morning;
    }
}
console.log(person1.action());

const band = {
    vocalist: "John",
    bassist: "George",
    guitarist: "Paul",
}

delete band["guitarist"];
console.log(band.hasOwnProperty("guitarist"));
console.log(band);
console.log(Object.keys(band));
console.log(Object.values(band));

for (let job in band) {
    console.log(job);
    console.log(band[job]);
    console.log(`${job} is ${band[job]}`)
}

function add(a, b) {
    return a + b;
}
console.log(add(1, 2));

const add2 = (a, b) => a + b;

const person = {
    name: "meron",
    age: 28,
    profession: "developer"
}


console.log(person.name);
console.log(person.age);
console.log(person.profession);

const { name, age, profession } = person;
console.log(person);

for (let key in person) {
    console.log(`${key} is ${person[key]}`)
}


function displayname({ fName, Aage, Profession }) {
    console.log(`first name ${fName} age ${Aage} profession ${Profession}`)
}
const person2 = {
    fName: "meron",
    Aage: 28,
    Profession: "developer"
}

const person3 = {
    fName: "hailu",
    Aage: 60,
    Profession: "acc"
}

console.log(person2.name)

// const { fName, Aage, Profession } = person2




displayname(person2);


function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('data fetched')
        }, 2000)

    });

}

fetchData().then(data => {
    console.log(data);
})
    .catch(error => {
        console.error(`error ${error}`)
    })


async function fetchData2() {
    console.log('one')
    setTimeout(() => {
        console.log('data fetched one')
    }, 2000)
    console.log('two')
    setTimeout(() => {
        console.log('data fetched two')
    }, 2000);
    console.log('three')
}

fetchData2();


async function getData() {
    try {
        const data = await fetchData();
        console.log(data)
    }
    catch (error) {
        console.error('error')
    }
}

getData();


const users = fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        return response.json();
    })
    .then(data => {
        data.forEach(user => {
            console.log(user.email)
        });

    })
    .catch(error => {
        console.error(error)
    })


async function fetchDatapost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data)
    }
    catch (error) {
        console.error(error)
    }
}

fetchDatapost();



function getBoredActivity() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            return response.json();

        })
        .then(data => {

            data.forEach(user => {
                console.log(user.email);
            })
        })
        .catch(error => {
            console.log(error)
        })


}

getBoredActivity();

function logActivity(userId) {

    console.log(userId)
}

async function getBoredActivity1(callback) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json();
    callback(data);

}

getBoredActivity1(logActivity);







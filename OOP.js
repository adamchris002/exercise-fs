class People { 
    constructor (name, age, gender, job, isSingle, hobbies) {
        this.name = name || "";
        this.age = age || 0;
        this.gender = gender || "";
        this.job = job || "";
        this.isSingle = isSingle;
        this.hobbies = hobbies || [];
    }

    mentionSelf() {
        if (this.isSingle === false) {
            console.log(`My name is ${this.name}, I am ${this.age} years old, I am a ${this.gender}. My job is ${this.job} and i am already Taken.`)
        }
        else {
            console.log(`My name is ${this.name}, I am ${this.age} years old, I am a ${this.gender}. My job is ${this.job} and i am still Single.`)
        }
    }
    mentionStatus() {
        if (this.isSingle === false) {
            console.log(`My status is 'Taken'.`)
        }
        else {
            console.log(`My status is 'Single'.`)
        }
    }

    mentionJob() {
        console.log(`My job is ${this.job}`)
    }

    changeStatus() {
        this.isSingle = !this.isSingle;
    }

    changeJob(newJob) {
        this.job = newJob;
    }

    mentionHobbies() {
        console.log(`${this.name} hobbies are : `);
        if (this.hobbies.length === 0) {
            console.log(`There are no hobbies.`);
        }
        else {
            this.hobbies.forEach((hobby, index) => {
                console.log(`${index + 1}. ${hobby}`);
            });
        }
    }

    addHobby(hobbyname) {
        this.hobbies.push(hobbyname);
    }
}

// Instance => Proses instanciation
let Adam = new People("Adam", 16, "Men", "Driver", true, ["masak"]);
let Joko = new People("Joko", 33, "Men", "Tukang Kue", false, ["makan"]);
let Agnes = new People("Agnes", 20, "Woman", "Mahasiswa", false, ["tidur"]);

Adam.addHobby("main bola");
Adam.mentionHobbies();
console.log(Adam);

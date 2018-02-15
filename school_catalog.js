class School {
	constructor(name, level, numberOfStudents) {
		this._name = name;
		this._level = level;
		this._numberOfStudents = numberOfStudents ;
	}
	get name() {
		return this._name;
	}
	get level() {
		return this._level;
	}
	get numberOfStudents() {
		return this._numberOfStudents;
	}
	quickFacts() {
		console.log(
		  // string interpolation should use back-ticks

			`${this.name} educates ${this.numberOfStudents} students, typically between the ages of ${this.level}.`
		);
	}
	static pickSubstituteTeacher(substituteTeachers) {
		let teacherIndex = Math.floor(Math.random() * substituteTeachers.length);
		return substituteTeachers[teacherIndex];
	}
}

class PrimarySchool extends School {
	constructor(name, numberOfStudents, pickupPolicy) {
		super(name, '6-12', numberOfStudents);
		this._pickupPolicy = pickupPolicy;
	}
	get pickupPolicy() {
		return this._pickupPolicy;
	}
}

class HighSchool extends School {
	constructor(name, numberOfStudents, sportsTeams) {
		super(name, 'highSchool', numberOfStudents);
		this._sportsTeams = sportsTeams;
	}
	get sportsTeams() {
		return this._sportsTeams;
	}
}

// create a new instance of PrimarySchool
const lorraineHansbury = new PrimarySchool(
	'Lorraine Hansbury',
	400,
	'Students must be picked up by a parent, guardian, or a family member over the age of 13.'
);

// runs a parent method on the instance of PrimarySchool
lorraineHansbury.quickFacts();

// displays the pickupPolicy of the instance of PrimarySchool
console.log(lorraineHansbury.pickupPolicy);

// run a class method pickSubstituteTeacher and assign the returned value to a new variable
let teacher = School.pickSubstituteTeacher([
	'Jamal Crawford',
	'Lou Williams',
	'J.R. Smith',
	'James Harden',
	'Jason Terry',
	'Manu Ginobli.',
]);

// displays the randomly picked teacher
console.log(teacher);

// create a new instance of HighSchool

const alSmith = new HighSchool(
	'Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']
);

// displays sportsTeams using a getter method
console.log(alSmith.sportsTeams);

type Subject =
  | "English"
  | "Mathematics"
  | "Urdu"
  | "Computer"
  | "Chemistry"
  | "Physics"
  | "Social Studies";

type Student = {
  id: number;
  name: string;
  roleNo: string;
  subjects: Subject[];
  age: number;
};

const students: Student[] = [];

students.push({
  id: 1,
  name: "Mudassar",
  age: 12,
  roleNo: "09039488",
  subjects: ["English", "Social Studies", "Urdu", "Computer"],
});

console.log(students);

// let s: string[] = ["23", "90"]

// let value = 45

// console.log(s)

// s = []

// console.log(s)

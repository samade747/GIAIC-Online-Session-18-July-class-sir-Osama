import { getAllStudents, getOnSiteStudents, getStudent } from "./student"
import { Student  } from "./interfaces"

const allStudents = getAllStudents();
console.log(allStudents);

const onsiteStudents = getOnSiteStudents();
console.log(onsiteStudents);

const singleStudent = getStudent(1);
console.log(singleStudent)


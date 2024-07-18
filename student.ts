// defult export ko imprt krte hwe kisi bi namh se kar skte hain 
import student from "./data"
import { Student } from "./interfaces"

export const getAllStudents = () => {
    return student
  }

  export const getOnSiteStudents = () => {
    const result = student.filter((student) => student.isOnSiteAllowed)
        return result
    }

    export const getStudent = (id: number) => {
        const result = student.find((student) => student.id === id)
        return result
    }
    

    const onsiteStudents = getOnSiteStudents()

    console.log(`onsiteStudents: ${onsiteStudents}`)

    
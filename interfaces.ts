export interface EntryTest {
    isPassed: boolean;
    obtainedMarks: number;
    totalMarks: number;
    grade: string;
    division: string;
}

export interface Student {
        id: number;
        name: string;
        age: number;
        gender: string;
        rollNo: number;
        email: string;
        isOnSiteAllowed: boolean;
        entryTest: EntryTest; // add above interface over here
    }






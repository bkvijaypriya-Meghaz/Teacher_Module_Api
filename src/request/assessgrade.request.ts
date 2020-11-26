import { IRequest } from "./IRequest";

export class AssessGrade {
    teacherid: string;
    studentid:string;
    sectionid:string;
    assigned:  [{
        category:string
        aname:string
        duedate:string
        grading:string
        score:string
        status: string
        graded: boolean
       
    }


    ];
    finalgrade:string
    
  }

export class AssessGradeRequest implements IRequest {

    constructor(AssessGrade: AssessGrade) {
        this.AssessGrade = AssessGrade;
    }

    public AssessGrade: AssessGrade

    public getAssessGrade() {
        return this.AssessGrade;
    }

    public setStudent(AssessGrade: AssessGrade) {
        this.AssessGrade = AssessGrade;
    }
}
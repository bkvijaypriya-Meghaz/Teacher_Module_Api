import { IRequest } from "./IRequest";

export class AssessGrade {
    teacherid: string;
    studentid:string;
    sectionid:string;
    assignments:  [{
        status: string
        graded: string
    }


    ]
    
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
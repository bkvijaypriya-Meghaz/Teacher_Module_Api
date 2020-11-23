import { IRequest } from "./IRequest";

export class Grade {
    teacherid: String;
    section:  [{
        sectionid: string
        sectionname: string
    }

   ]
    
  }

export class GradeRequest implements IRequest {

    constructor(Grade: Grade) {
        this.Grade = Grade;
    }

    public Grade: Grade

    public getGrade() {
        return this.Grade;
    }

    public setGrade(Grade: Grade) {
        this.Grade = Grade;
    }
}
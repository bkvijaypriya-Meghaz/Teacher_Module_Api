import { connect, disconnect } from "../config/db.config";
import { AssessGradeModel, IAssessgrade } from '../model';

export class AssessGradeRepository {

    constructor() {
        console.log('In the Repository ::::::::')
        connect();
        console.log('In the Repository ::::::::')
    }

    async createAssessGrade(asssessGrade: any) : Promise<any> {
        //console.log("from connect: process.env.MONGO_CONNECTION_STRING :::",process.env.MONGO_CONNECTION_STRING)
        return await AssessGradeModel.create(asssessGrade);
    }

    async listAssessGrades(teacherId:any): Promise<any> {
        return await AssessGradeModel.find(teacherId);
    }


}
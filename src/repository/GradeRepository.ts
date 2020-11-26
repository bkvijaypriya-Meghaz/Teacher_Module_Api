import { connect, disconnect } from "../config/db.config";
import { GradeModel, IGrade } from '../model';

export class GradeRepository {

    constructor() {
        console.log('In the Repository ::::::::')
        connect();
        console.log('In the Repository ::::::::')
    }

    async createGrade(assessGrade: any) : Promise<any> {
        //console.log("from connect: process.env.MONGO_CONNECTION_STRING :::",process.env.MONGO_CONNECTION_STRING)
        return await GradeModel.create(assessGrade);
    }

    async listGrades(studentId:any): Promise<any> {
        return await GradeModel.find(studentId);
    }


}
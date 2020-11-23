import { connect, disconnect } from "../config/db.config";
import { GradeModel, IGrade } from '../model';

export class GradeRepository {

    constructor() {
        console.log('In the Repository ::::::::')
        connect();
        console.log('In the Repository ::::::::')
    }

    async createGrade(grade: any) : Promise<any> {
        //console.log("from connect: process.env.MONGO_CONNECTION_STRING :::",process.env.MONGO_CONNECTION_STRING)
        return await GradeModel.create(grade);
    }

    async listGrades(): Promise<any> {
        return await GradeModel.find();
    }


}
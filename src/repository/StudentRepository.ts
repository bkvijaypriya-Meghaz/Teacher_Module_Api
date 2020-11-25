import { connect, disconnect } from "../config/db.config";
import { StudentModel, IStudent } from '../model';

export class StudentRepository {

    constructor() {
        console.log('In the Repository ::::::::')
        connect();
        console.log('In the Repository ::::::::')
    }

    async createStudent(student: any) : Promise<any> {
        //console.log("from connect: process.env.MONGO_CONNECTION_STRING :::",process.env.MONGO_CONNECTION_STRING)
        return await StudentModel.create(student);
    }

    async listStudents(): Promise<any> {
        return await StudentModel.find();
    }


}
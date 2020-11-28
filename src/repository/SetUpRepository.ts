import { connect, disconnect } from "../config/db.config";
import { SetUpModel, IStudent } from '../model';

export class SetUpRepository {

    constructor() {
        console.log('In the Repository ::::::::')
        connect();
        console.log('In the Repository ::::::::')
    }

        async listSetUp(schoolId): Promise<any> {
            console.log("received schoolId",schoolId);
            
        return await SetUpModel.find(schoolId);
    }

}
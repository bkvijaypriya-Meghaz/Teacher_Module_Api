import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { GradeController } from '../src/controller';
import { GradeRequest } from '../src/request';

const GradeCreate: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    
    const gradeController = new GradeController();
    const grade = req.body && req.body.teacherId;
    //const gradeRequest = new GradeRequest(grade);
    //const result = await gradeController.listGrades(req.body.teacherId);
    //console.log("final result of Grade create will be",result)

    context.res = {
        // status: 200, /* Defaults to 200 */
        
        body: await gradeController.listGrades(req.body.teacherId),
        headers: {'Content-Type': 'application/json'}
    };

};

export default GradeCreate;
import { model, Schema, Model, Document } from 'mongoose';

export interface IAssessgrade extends Document {
    teacherId: string;
    studentId:string;
    sectionId:string;
    assignments:  [{
        status: string
        graded: string
    }


    ]
    
    
}

const AssessGradeSchema: Schema = new Schema({
    teacherId: { type: String, required: true },
    studentId:{ type: String, required: true },
    sectionId:{ type: String, required: true },
    assignments: 
             [({
            status: { type: String, required: true },
            graded :{  
                type : String,
                required: true
              }
            
            }
            
            )]

 
    
});

// const Section :Schema=new Schema({
// id: { type: String, required: true },
// name :{  
//     type : String,
//     required: true
//   }

// }

// )

export const AssessGradeModel: Model<IAssessgrade> = model<IAssessgrade>('gradeassessment', AssessGradeSchema);
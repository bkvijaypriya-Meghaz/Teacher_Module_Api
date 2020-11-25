import { StudentRepository } from '../repository';
import { StudentRequest, Student } from '../request';
//import { StudentResponse } from '../response';

export class StudentService {

    studentRepository: StudentRepository;

    constructor() {
        this.studentRepository = new StudentRepository();
    }

    async listStudents(): Promise<any> {

        const students= await this.studentRepository.listStudents();

        console.log("the listed details",students);
         return students
        
    }

    public async createStudents(studentRequest: StudentRequest) {
        console .log("after user service its in  step in StudentRepository", studentRequest);
        return await this.studentRepository.createStudent(studentRequest.getStudent());
    }

}
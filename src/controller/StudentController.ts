import { StudentService } from '../service';
import { StudentRequest} from '../request'

export class StudentController {

    private studentService: StudentService;

    constructor() {
        this.studentService = new StudentService();
    }

    public async listStudents() {
        return await this.studentService.listStudents();
    }

    public async createStudents(StudentRequest: StudentRequest) {
        
        return await this.studentService.createStudents(StudentRequest);
    }
}
import { AssessGradeService } from '../service';
import { AssessGradeRequest} from '../request'

export class AssessGradeController {

    private assessGradeService: AssessGradeService;

    constructor() {
        this.assessGradeService = new AssessGradeService();
    }

    public async listAssessGrades(studentId) {
        return await this.assessGradeService.listAssessGrades(studentId);
    }

    public async createAssessGrades(AssessGradeRequest: AssessGradeRequest) {
        
        return await this.assessGradeService.createAssessGrades(AssessGradeRequest);
    }
}
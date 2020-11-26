import { AssessGradeService } from '../service';
import { AssessGradeRequest} from '../request'

export class AssessGradeController {

    private assessGradeService: AssessGradeService;

    constructor() {
        this.assessGradeService = new AssessGradeService();
    }

    public async listAssessGrades(teacherId) {
        return await this.assessGradeService.listAssessGrades(teacherId);
    }

    public async createAssessGrades(AssessGradeRequest: AssessGradeRequest) {
        
        return await this.assessGradeService.createAssessGrades(AssessGradeRequest);
    }
}
import { GradeService } from '../service';
import { GradeRequest} from '../request'

export class GradeController {

    private gradeService: GradeService;

    constructor() {
        this.gradeService = new GradeService();
    }

    public async listGrades() {
        return await this.gradeService.listGrades();
    }

    public async createGrades(GradeRequest: GradeRequest) {
        
        return await this.gradeService.createGrades(GradeRequest);
    }
}
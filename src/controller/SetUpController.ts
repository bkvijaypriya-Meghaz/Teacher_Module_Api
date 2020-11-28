import { SetUpService } from '../service';

export class SetUpController {

    private setUpService: SetUpService;

    constructor() {
        this.setUpService = new SetUpService();
    }

    public async listSetUp(schoolId) {
        return await this.setUpService.listSetUp(schoolId);
    }

   
}
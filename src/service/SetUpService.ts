import { SetUpRepository } from '../repository';

export class SetUpService {

    setUpRepository: SetUpRepository;

    constructor() {
        this.setUpRepository = new SetUpRepository();
    }

    async listSetUp(schoolId): Promise<any> {

        console.log("before fetch listed details......",schoolId);

        const setUp= await this.setUpRepository.listSetUp(schoolId);

        console.log("the listed details frm setup",setUp);
         return setUp
        
    }

    }
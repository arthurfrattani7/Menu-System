import { CoupleApplication } from "../../application/applications/couple.application";
import { CoupleRequestDto } from "../dto/request/couple.request.dto";
import { CoupleResponseDto } from "../dto/response/couple.response.dto";
export declare class CoupleController {
    private readonly coupleApplication;
    constructor(coupleApplication: CoupleApplication);
    createCouple(data: CoupleRequestDto): Promise<CoupleResponseDto>;
    getCoupleById(id: string): Promise<CoupleResponseDto>;
    getCoupleByUserId(userId: string): Promise<CoupleResponseDto>;
}

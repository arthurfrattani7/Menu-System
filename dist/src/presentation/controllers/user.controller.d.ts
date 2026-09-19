import { UserApplication } from "../../application/applications/user.application";
import { UserRequestDto } from "../dto/request/user.request.dto";
import { UserResponseDto } from "../dto/response/user.response.dto";
export declare class UserController {
    private readonly userApplication;
    constructor(userApplication: UserApplication);
    createUser(data: UserRequestDto): Promise<UserResponseDto>;
    getUserById(id: string): Promise<UserResponseDto>;
    getUserByEmail(email: string): Promise<UserResponseDto>;
}

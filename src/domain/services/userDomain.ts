import { Injectable } from "@nestjs/common";
import { UserRepository } from "../../data/repositories/db/userRepository";
import { User } from "../../data/entity/userModel";

@Injectable()
export class UserDomain {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(user: User): Promise<User> {
    const createdUser = await this.userRepository.createUser(user);
    return createdUser;
  }

  async getUserById(id: string): Promise<User | null> {
    const user = await this.userRepository.getUserById(id);
    return user;
  }

  async getUserByEmail(email: string): Promise<User | null> {
    const user = await this.userRepository.getUserByEmail(email);
    return user;
  }
}

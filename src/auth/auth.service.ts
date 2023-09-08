import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as bcrypt from 'bcrypt';
import { Tokens } from './types';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService
    ) {}

    hashData(data: string) {
        return bcrypt.hash(data, 10);
    }

    async signupLocal(dto: AuthDto): Promise<Tokens> {
        try {
            
            const hash = await this.hashData(dto.password)

            const user = this.prisma.user.create({
                data: {
                    email: dto.email,
                    hash
                }
            })

        } catch (error) {
            throw error
        }
    }

    signinLocal() {}

    logout() {}

    refreshTokens() {}
}

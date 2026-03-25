import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service';
import { ApiResponse } from './interfaces/response.interface'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Promise<ApiResponse<>> {
    const data = this.appService.getHello()
    return { success: true, message: "Hello NestJS", data}
  }
}

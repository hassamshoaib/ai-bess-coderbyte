import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { ProductModule } from '../products/product.module';
@Module({
  imports: [ProductModule],
  controllers: [PaymentsController],
})
export class PaymentsModule {}

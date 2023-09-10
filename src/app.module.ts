import { Module } from "@nestjs/common";
import { RankingController } from "./ranking/ranking.controller";
import { RankingService } from "./ranking/ranking.service";

@Module({
  imports: [],
  controllers: [RankingController],
  providers: [RankingService],
})
export class AppModule {}

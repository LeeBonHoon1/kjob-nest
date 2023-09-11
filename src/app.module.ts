import { Module } from "@nestjs/common";
import { RankingController } from "./ranking/ranking.controller";
import { RankingService } from "./ranking/ranking.service";
import { CommunityController } from "./community/community.controller";
import { CommunityService } from "./community/community.service";

@Module({
  imports: [],
  controllers: [RankingController, CommunityController],
  providers: [RankingService, CommunityService],
})
export class AppModule {}

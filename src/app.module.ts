import { Module } from "@nestjs/common";
import { RankingController } from "./ranking/ranking.controller";
import { RankingService } from "./ranking/ranking.service";
import { CommunityController } from "./community/community.controller";
import { CommunityService } from "./community/community.service";
import { NewsController } from "./news/news.controller";
import { NewsService } from "./news/news.service";

@Module({
  imports: [],
  controllers: [RankingController, CommunityController, NewsController],
  providers: [RankingService, CommunityService, NewsService],
})
export class AppModule {}

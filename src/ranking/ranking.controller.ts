import { Ranking } from "./entities/ranking.entity";
import { RankingService } from "./ranking.service";
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";

@Controller("home")
export class RankingController {
  constructor(private readonly rankingService: RankingService) {}

  @Get()
  getAll(): Ranking[] {
    return this.rankingService.getAll();
  }

  @Get("/:id")
  getOne(@Param("id") userId: string): Ranking {
    return this.rankingService.getOne(userId);
  }

  @Post()
  createRanking(@Body() rankingData) {
    return this.rankingService.create(rankingData);
  }

  @Delete("/:id")
  remove(@Param("id") rankingId: string) {
    return this.rankingService.deleteOne(rankingId);
  }

  @Patch("/:id")
  path(@Param("id") rankingId: string, @Body() rankingUpdateData) {
    return {
      rankingId: rankingId,
      ...rankingUpdateData,
    };
  }
}

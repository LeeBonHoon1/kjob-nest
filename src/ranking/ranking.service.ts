import { Injectable, NotFoundException } from "@nestjs/common";
import { Ranking } from "src/entities/ranking.entity";

@Injectable()
export class RankingService {
  private rankings: Ranking[] = [
    { userId: "1", grade: 1, name: "Simon", score: 200 },
    { userId: "2", grade: 2, name: "Raymond", score: 190 },
    { userId: "3", grade: 3, name: "Homezone", score: 170 },
  ];

  getAll(): Ranking[] {
    return this.rankings;
  }

  getOne(id: string): Ranking {
    const userRanking = this.rankings.find((ranking) => ranking.userId === id);
    if (!userRanking) {
      throw new NotFoundException(`가입되지 않은 회원입니다~!ㅋ`);
    }
    return userRanking;
  }

  deleteOne(id: string) {
    this.rankings.filter((ranking) => ranking.userId !== id);
    return true;
  }

  create(rankingData) {
    this.rankings.push({
      userId: this.rankings.length + 1,
      ...rankingData,
    });
  }
}

import { Injectable, NotFoundException } from "@nestjs/common";
import { News } from "src/entities/news.entity";

@Injectable()
export class NewsService {
  private news: News[] = [
    {
      id: 1,
      userId: 1,
      content:
        "운동하는 직장’이 늘어나는 이유 [Monday DBR] 건강 기능 식품 매출이 300%",
      createdAt: "2023년 09월 10일 금요일",
      keyword: "건강 • 피트니스",
    },
    {
      id: 2,
      userId: 2,
      content:
        "운동하는 직장’이 늘어나는 이유 [Monday DBR] 건강 기능 식품 매출이 300%",
      createdAt: "2023년 09월 10일 금요일",
      keyword: "건강 • 피트니스",
    },
    {
      id: 3,
      userId: 3,
      content:
        "운동하는 직장’이 늘어나는 이유 [Monday DBR] 건강 기능 식품 매출이 300%",
      createdAt: "2023년 09월 10일 금요일",
      keyword: "건강 • 피트니스",
    },
    {
      id: 4,
      userId: 4,
      content:
        "운동하는 직장’이 늘어나는 이유 [Monday DBR] 건강 기능 식품 매출이 300%",
      createdAt: "2023년 09월 10일 금요일",
      keyword: "건강 • 피트니스",
    },
  ];

  getAllNews(): News[] {
    return this.news;
  }

  getOneNews(id: string): News {
    const newsDetail = this.news.find((newsId) => newsId.id === +id);

    if (!newsDetail) {
      throw new NotFoundException(`해당 뉴스가 존재하지 않습니다.`);
    }

    return newsDetail;
  }
}

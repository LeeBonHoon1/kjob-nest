import { Controller, Get, Param } from "@nestjs/common";
import { NewsService } from "./news.service";
import { News } from "src/entities/news.entity";

@Controller("news")
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  getAllNews(): News[] {
    return this.newsService.getAllNews();
  }

  @Get("/:id")
  getOneNews(@Param("id") newsId: string): News {
    return this.newsService.getOneNews(newsId);
  }
}

import { Community } from "src/entities/community.entity";
import { CommunityService } from "./community.service";
import { Body, Controller, Get, Param, Post } from "@nestjs/common";

@Controller("community")
export class CommunityController {
  constructor(private readonly communityService: CommunityService) {}

  @Get()
  getAllPost(): Community[] {
    return this.communityService.getAllPost();
  }

  @Get("/:id")
  getOnePost(@Param("id") userId: string): Community {
    return this.communityService.getOnePost(userId);
  }

  @Post()
  createPost(@Body() userPost) {
    return this.communityService.addPost(userPost);
  }
}
